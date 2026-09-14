<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { ui } from '../data'
import { LANGS, lang, setLang } from '../i18n'

const sections = computed(() => [
  { id: 'about', label: ui.value.nav.about },
  { id: 'experience', label: ui.value.nav.experience },
  { id: 'work', label: ui.value.nav.work },
  { id: 'contact', label: ui.value.nav.contact },
])

const active = ref('')
const scrolled = ref(false)
const open = ref(false)
let io

const onScroll = () => (scrolled.value = window.scrollY > 24)

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) active.value = e.target.id
    },
    { rootMargin: '-45% 0px -50% 0px' },
  )
  for (const s of sections.value) {
    const el = document.getElementById(s.id)
    if (el) io.observe(el)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  io?.disconnect()
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-40 transition-colors duration-300"
    :class="scrolled ? 'bg-paper/85 backdrop-blur-md border-b border-line' : 'border-b border-transparent'"
  >
    <nav class="mx-auto flex max-w-6xl items-center gap-4 px-5 py-4 sm:px-8">
      <a href="#top" class="group flex items-center gap-2.5" :aria-label="ui.nav.top">
        <span
          class="grid h-9 w-9 place-items-center rounded-lg bg-ink font-display text-[15px] font-extrabold text-paper transition-colors group-hover:bg-accent"
          >RA</span
        >
        <span class="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft sm:block">
          Rizki&nbsp;Ananda
        </span>
      </a>

      <div class="ml-auto hidden items-center gap-1 md:flex">
        <a
          v-for="s in sections"
          :key="s.id"
          :href="`#${s.id}`"
          class="relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors"
          :class="active === s.id ? 'text-accent' : 'text-ink-soft hover:text-ink'"
        >
          {{ s.label }}
          <span
            v-if="active === s.id"
            class="absolute inset-x-3.5 -bottom-0.5 h-px bg-accent"
          />
        </a>
        <div
          class="ml-3 flex items-center gap-0.5 rounded-full border border-line p-0.5"
          role="group"
          :aria-label="ui.nav.language"
        >
          <button
            v-for="l in LANGS"
            :key="l.code"
            class="rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold transition-colors"
            :class="lang === l.code ? 'bg-ink text-paper' : 'text-ink-soft hover:text-ink'"
            :aria-pressed="lang === l.code"
            @click="setLang(l.code)"
          >
            {{ l.label }}
          </button>
        </div>

        <a
          href="#contact"
          class="ml-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-accent"
        >
          {{ ui.nav.hire }}
        </a>
      </div>

      <div class="ml-auto flex items-center gap-0.5 rounded-full border border-line p-0.5 md:hidden">
        <button
          v-for="l in LANGS"
          :key="l.code"
          class="rounded-full px-2 py-1 font-mono text-[11px] font-semibold transition-colors"
          :class="lang === l.code ? 'bg-ink text-paper' : 'text-ink-soft'"
          :aria-pressed="lang === l.code"
          @click="setLang(l.code)"
        >
          {{ l.label }}
        </button>
      </div>

      <button
        class="grid h-9 w-9 place-items-center rounded-lg border border-line text-ink md:hidden"
        :aria-expanded="open"
        :aria-label="ui.nav.menu"
        @click="open = !open"
      >
        <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
          <path v-if="!open" d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
          <path v-else d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
        </svg>
      </button>
    </nav>

    <div v-if="open" class="border-t border-line bg-paper md:hidden">
      <a
        v-for="s in [...sections]"
        :key="s.id"
        :href="`#${s.id}`"
        class="block border-b border-line/60 px-6 py-3.5 text-sm font-medium text-ink-soft"
        @click="open = false"
      >
        {{ s.label }}
      </a>
    </div>
  </header>
</template>
