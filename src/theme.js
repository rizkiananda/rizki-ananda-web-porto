import { ref, watch } from 'vue'

const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null
const prefersLight = typeof matchMedia !== 'undefined' && matchMedia('(prefers-color-scheme: light)').matches

export const theme = ref(stored || (prefersLight ? 'light' : 'dark'))

export const toggleTheme = () => (theme.value = theme.value === 'dark' ? 'light' : 'dark')

watch(
  theme,
  (v) => {
    document.documentElement.dataset.theme = v
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', v === 'light' ? '#eef2f7' : '#0b0f17')
    try {
      localStorage.setItem('theme', v)
    } catch {
      /* private mode — the toggle still works for this session */
    }
  },
  { immediate: true },
)
