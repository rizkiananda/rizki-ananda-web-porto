import { ref, watch } from 'vue'

export const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'id', label: 'ID' },
]

const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null
const initial = stored || (navigator.language?.startsWith('id') ? 'id' : 'en')

export const lang = ref(LANGS.some((l) => l.code === initial) ? initial : 'en')

export const setLang = (code) => (lang.value = code)

watch(
  lang,
  (v) => {
    document.documentElement.lang = v
    try {
      localStorage.setItem('lang', v)
    } catch {
      /* private mode — the toggle still works for this session */
    }
  },
  { immediate: true },
)
