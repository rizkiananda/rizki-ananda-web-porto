<script setup>
import { computed, onMounted, onBeforeUnmount, nextTick, ref, watch } from 'vue'
import { ui } from '../data'
import { projectSlug } from '../router'
import { LANGS, lang, setLang } from '../i18n'
import { theme, toggleTheme } from '../theme'

const sections = computed(() => [
  { id: 'top', label: ui.value.nav.home },
  { id: 'about', label: ui.value.nav.about },
  { id: 'skills', label: ui.value.nav.skills },
  { id: 'experience', label: ui.value.nav.experience },
  { id: 'work', label: ui.value.nav.projects },
  { id: 'contact', label: ui.value.nav.contact },
])

const active = ref('top')
const open = ref(false)
let io

/* A project page unmounts every section, so the observer has to be re-pointed
   at the fresh elements on the way back — otherwise the highlight stays stuck
   on whichever tab was active when the page was opened. */
const observe = () => {
  io.disconnect()
  for (const s of sections.value) {
    const el = document.getElementById(s.id)
    if (el) io.observe(el)
  }
}

onMounted(() => {
  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) active.value = e.target.id
    },
    { rootMargin: '-40% 0px -55% 0px' },
  )
  observe()
})

watch(projectSlug, async (slug) => {
  await nextTick()
  if (slug) {
    io.disconnect()
    active.value = 'work'
  } else {
    observe()
  }
})

onBeforeUnmount(() => io?.disconnect())
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-40 bg-canvas/80 backdrop-blur-xl" style="height: var(--nav-h)">
    <nav class="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6">
      <a
        href="#top"
        class="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-brand bg-panel font-display text-[14px] font-bold tracking-tight text-brand transition-transform hover:scale-105"
        :aria-label="ui.nav.top"
        >RA</a
      >

      <!-- Absolute so the pill stays optically centred whatever the sides weigh. -->
      <div
        class="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-line bg-panel p-1.5 lg:flex"
      >
        <a
          v-for="s in sections"
          :key="s.id"
          :href="`#${s.id}`"
          class="rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors"
          :class="active === s.id ? 'bg-brand text-brand-ink' : 'text-fg-2 hover:text-fg'"
        >
          {{ s.label }}
        </a>
      </div>

      <div class="ml-auto flex items-center gap-2">
        <button
          class="orb relative h-10 w-10 shrink-0 rounded-full transition-transform hover:scale-105"
          :aria-label="ui.nav.theme"
          @click="toggleTheme"
        >
          <svg v-if="theme === 'dark'" viewBox="0 0 24 24" class="relative m-auto h-4 w-4 text-brand-ink" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="4.5" />
            <path d="M12 2.5v2m0 15v2M2.5 12h2m15 0h2M5.2 5.2l1.4 1.4m10.8 10.8 1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" stroke-linecap="round" />
          </svg>
          <svg v-else viewBox="0 0 24 24" class="relative m-auto h-4 w-4 text-brand-ink" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" stroke-linejoin="round" />
          </svg>
        </button>

        <div class="flex items-center gap-0.5 rounded-full border border-line bg-panel p-1" role="group" :aria-label="ui.nav.language">
          <button
            v-for="l in LANGS"
            :key="l.code"
            class="rounded-full px-2.5 py-1 text-[11.5px] font-bold transition-colors"
            :class="lang === l.code ? 'bg-brand text-brand-ink' : 'text-fg-2 hover:text-fg'"
            :aria-pressed="lang === l.code"
            @click="setLang(l.code)"
          >
            {{ l.label }}
          </button>
        </div>

        <a
          href="#contact"
          class="hidden items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-[13.5px] font-bold text-brand-ink transition-transform hover:-translate-y-0.5 sm:inline-flex"
        >
          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 20v-1a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v1M12 3.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          {{ ui.nav.hire }}
        </a>

        <button
          class="grid h-10 w-10 place-items-center rounded-full border border-line bg-panel text-fg lg:hidden"
          :aria-expanded="open"
          :aria-label="ui.nav.menu"
          @click="open = !open"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
            <path v-if="!open" d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
            <path v-else d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </nav>

    <div v-if="open" class="border-t border-line bg-panel lg:hidden">
      <a
        v-for="s in sections"
        :key="s.id"
        :href="`#${s.id}`"
        class="block border-b border-line/60 px-5 py-3.5 text-sm font-semibold"
        :class="active === s.id ? 'text-brand' : 'text-fg-2'"
        @click="open = false"
      >
        {{ s.label }}
      </a>
    </div>
  </header>
</template>

<style scoped>
.orb {
  background: var(--color-brand);
}
</style>
