import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue
      e.target.classList.add('is-in')
      io.unobserve(e.target)
    }
  },
  { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
)

createApp(App)
  .directive('reveal', {
    mounted(el, binding) {
      el.classList.add('reveal')
      if (binding.value) el.style.transitionDelay = `${binding.value}ms`
      io.observe(el)
    },
  })
  .mount('#app')
