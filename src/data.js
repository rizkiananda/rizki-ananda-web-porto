import { computed } from 'vue'
import { lang } from './i18n'
import en from './content.en'
import id from './content.id'

/* Everything with words in it lives in content.<lang>.js; these follow the toggle. */
const dict = { en, id }
const pick = (key) => computed(() => dict[lang.value][key])

export const profile = pick('profile')
export const skillGroups = pick('skillGroups')
export const experience = pick('experience')
export const cashiermediaOverview = pick('cashiermediaOverview')
export const featured = pick('featured')
export const otherWork = pick('otherWork')
export const ui = pick('ui')

/* Language-independent below. */

/* Hero editor card. Hand-highlighted: one snippet does not justify a
   syntax-highlighting dependency. Classes are styled in style.css. */
export const code = {
  file: 'stack.ts',
  lines: [
    '<span class="c">// stack.ts — what I actually build with</span>',
    '<span class="k">import</span> <span class="p">{</span> <span class="t">Developer</span> <span class="p">}</span> <span class="k">from</span> <span class="s">\'./rizki\'</span><span class="p">;</span>',
    '',
    '<span class="k">export const</span> <span class="f">rizki</span><span class="p">:</span> <span class="t">Developer</span> <span class="p">= {</span>',
    '  <span class="f">role</span><span class="p">:</span> <span class="s">\'Full-Stack Developer\'</span><span class="p">,</span>',
    '  <span class="f">backend</span><span class="p">:</span> <span class="p">[</span><span class="s">\'Golang\'</span><span class="p">,</span> <span class="s">\'Node.js\'</span><span class="p">,</span> <span class="s">\'Laravel\'</span><span class="p">],</span>',
    '  <span class="f">frontend</span><span class="p">:</span> <span class="p">[</span><span class="s">\'Vue 3\'</span><span class="p">,</span> <span class="s">\'TypeScript\'</span><span class="p">],</span>',
    '  <span class="f">shipped</span><span class="p">:</span> <span class="p">[</span><span class="s">\'POS\'</span><span class="p">,</span> <span class="s">\'ERP\'</span><span class="p">,</span> <span class="s">\'IoT telemetry\'</span><span class="p">],</span>',
    '  <span class="f">since</span><span class="p">:</span> <span class="n">2018</span><span class="p">,</span>',
    '  <span class="f">open</span><span class="p">:</span> <span class="k">true</span><span class="p">,</span>',
    '<span class="p">}</span>',
  ],
}

export const marquee = [
  'Golang', 'Fiber', 'Node.js', 'Express', 'Laravel', 'CodeIgniter', 'Phalcon',
  'OpenSwoole', 'Vue.js', 'TypeScript', 'Tailwind', 'MySQL', 'PostgreSQL',
  'SQL Server', 'GORM', 'Knex', 'JWT', 'REST API', 'IoT', 'Image Recognition',
]

export const icons = {
  ship: 'M2 21c1.6 0 2.6-1 4-1s2.4 1 4 1 2.6-1 4-1 2.4 1 4 1 2.6-1 4-1M4 18l-1.5-6L12 9l9.5 3L20 18M12 9V4m-3 0h6',
  scan: 'M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M3 12h18',
  truck: 'M10 17h4V5H2v12h3m5 0a2 2 0 1 0 4 0m-4 0a2 2 0 1 1-4 0m10 0h1a2 2 0 0 0 2-2v-4l-3-4h-3v10m3 0a2 2 0 1 1-4 0',
  cpu: 'M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M6 6h12v12H6zM10 10h4v4h-4z',
  droplet: 'M12 2.7 6.9 8.1a7.2 7.2 0 1 0 10.2 0z',
  parking: 'M4 3h16v18H4zM9.5 17V7.5h3.2a3 3 0 0 1 0 6H9.5',
  clipboard: 'M9 3h6v3H9zM8 5H6v16h12V5h-2M9 11h6M9 15h4',
}

/* Gradient pairs for the generated thumbnails in `otherWork`. */
export const tones = [
  ['#1f3a5f', '#3c6a9a'],
  ['#5c2f52', '#9b4f87'],
  ['#1e4a3f', '#3d8a72'],
  ['#4a3320', '#8a6340'],
  ['#233a52', '#4a7a9b'],
  ['#3f2a3f', '#7a5070'],
  ['#4a2b26', '#96574a'],
]
