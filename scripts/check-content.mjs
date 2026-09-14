/* Fails if the two content files drift apart in shape — the usual i18n bug. */
import en from '../src/content.en.js'
import id from '../src/content.id.js'

const problems = []

const shape = (v, path) => {
  if (Array.isArray(v)) return { type: 'array', items: v.map((x, i) => shape(x, `${path}[${i}]`)) }
  if (v && typeof v === 'object') {
    return { type: 'object', keys: Object.fromEntries(Object.entries(v).map(([k, x]) => [k, shape(x, `${path}.${k}`)])) }
  }
  return { type: v === null ? 'null' : typeof v }
}

const compare = (a, b, path) => {
  if (a.type !== b.type) return problems.push(`${path}: en=${a.type} id=${b.type}`)
  if (a.type === 'array') {
    if (a.items.length !== b.items.length) return problems.push(`${path}: length en=${a.items.length} id=${b.items.length}`)
    a.items.forEach((x, i) => compare(x, b.items[i], `${path}[${i}]`))
  } else if (a.type === 'object') {
    const ak = Object.keys(a.keys)
    const bk = Object.keys(b.keys)
    for (const k of ak) if (!bk.includes(k)) problems.push(`${path}.${k}: missing in id`)
    for (const k of bk) if (!ak.includes(k)) problems.push(`${path}.${k}: missing in en`)
    for (const k of ak) if (bk.includes(k)) compare(a.keys[k], b.keys[k], `${path}.${k}`)
  }
}

compare(shape(en, ''), shape(id, ''), 'content')

/* Screenshot filenames and links must be identical — they are not translatable. */
en.featured.forEach((p, i) => {
  const q = id.featured[i]
  if (p.slug !== q.slug) problems.push(`featured[${i}].slug differs`)
  if (p.link !== q.link) problems.push(`featured[${i}].link differs`)
  p.shots.forEach((s, j) => {
    if (s.file !== q.shots[j].file) problems.push(`featured[${i}].shots[${j}].file differs`)
  })
})
id.otherWork.forEach((w, i) => {
  if (w.icon !== en.otherWork[i].icon || w.tone !== en.otherWork[i].tone) problems.push(`otherWork[${i}] icon/tone differs`)
})

if (problems.length) {
  console.error('content mismatch:\n' + problems.map((p) => '  - ' + p).join('\n'))
  process.exit(1)
}
console.log('content.en.js and content.id.js match')
