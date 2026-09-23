import { ref } from 'vue'

/* The site is one scrolling page plus one route: #/work/<slug>. Hash-based on
   purpose — GitHub Pages needs no 404 rewrite for it, and plain #section
   anchors keep working because they never start with a slash. */
const parse = () => location.hash.match(/^#\/work\/([a-z0-9-]+)/i)?.[1] ?? null

export const projectSlug = ref(parse())

window.addEventListener('hashchange', () => (projectSlug.value = parse()))
