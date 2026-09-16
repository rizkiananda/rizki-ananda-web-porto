<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { profile, marquee, code, ui } from '../data'

const roleIndex = ref(0)
let timer

onMounted(() => {
  timer = setInterval(() => {
    roleIndex.value = (roleIndex.value + 1) % profile.value.tagline.length
  }, 2600)
})
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <section id="top" class="slide slide--first overflow-hidden" style="padding-top: var(--nav-h)">
    <div class="pointer-events-none absolute inset-0 grid-dots text-fg" />

    <div class="slide-inner mx-auto w-full max-w-7xl px-4 sm:px-6">
      <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-10">
        <div class="lg:col-span-6">
          <p v-reveal class="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-1.5 text-[12px] font-semibold text-fg-2">
            <span class="relative grid h-2 w-2 place-items-center">
              <span class="absolute h-2 w-2 animate-ping rounded-full bg-brand/60" />
              <span class="h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            {{ ui.hero.open }}
          </p>

          <p v-reveal="60" class="mt-6 font-display text-lg font-medium text-fg-2">{{ ui.hero.greeting }}</p>

          <h1
            v-reveal="90"
            class="mt-1 font-display text-[clamp(2.4rem,6vw,4.4rem)] font-bold leading-[1.02] tracking-[-0.03em]"
          >
            {{ profile.name }}
          </h1>

          <p v-reveal="120" class="mt-3 font-display text-[clamp(1.15rem,2.6vw,1.75rem)] font-semibold text-brand">
            <Transition name="role" mode="out-in">
              <span :key="roleIndex">{{ profile.tagline[roleIndex] }}</span>
            </Transition>
          </p>

          <p v-reveal="150" class="mt-5 max-w-2xl text-[15px] leading-relaxed text-fg-2">
            {{ profile.summary }}
          </p>

          <div v-reveal="180" class="mt-7 flex flex-wrap gap-3">
            <a
              href="#work"
              class="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-brand-ink transition-transform hover:-translate-y-0.5"
            >
              {{ ui.hero.seeWork }}
              <svg viewBox="0 0 24 24" class="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
            <a
              href="/CV-Rizki-Ananda.pdf"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-bold transition-colors hover:border-brand hover:text-brand"
            >
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ ui.hero.cv }}
            </a>
          </div>
        </div>

        <div v-reveal="120" class="relative lg:col-span-6">
          <!-- Ambient light: the hero's only glow, sitting behind the editor. -->
          <div
            class="code-glow pointer-events-none absolute -inset-x-16 -inset-y-14"
          />

          <div class="code-card relative overflow-hidden rounded-xl">
            <div class="code-bar flex items-center gap-2 px-4 py-2.5">
              <span class="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span class="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span class="h-3 w-3 rounded-full bg-[#28c840]" />
              <span class="mx-auto pr-10 font-mono text-[12px] text-[#cccccc]">{{ code.file }}</span>
            </div>

            <div class="code-tabs flex items-stretch">
              <span class="code-tab flex items-center gap-2 px-4 py-2 font-mono text-[12px] text-[#ffffff]">
                <span class="grid h-4 w-4 place-items-center rounded-[3px] bg-[#3178c6] text-[8px] font-bold text-white">TS</span>
                {{ code.file }}
                <svg viewBox="0 0 24 24" class="ml-2 h-3 w-3 text-[#8a8a8a]" fill="none" stroke="currentColor" stroke-width="2.4">
                  <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
                </svg>
              </span>
            </div>

            <div class="code overflow-x-auto py-3 font-mono text-[12.5px] leading-[1.75]">
              <div v-for="(l, i) in code.lines" :key="i" class="flex gap-4 px-4 sm:px-5">
                <span class="w-4 shrink-0 select-none text-right" style="color: #858585">{{ i + 1 }}</span>
                <span class="whitespace-pre">
                  <span v-html="l || '&nbsp;'" /><span v-if="i === code.lines.length - 1" class="code-caret" />
                </span>
              </div>
            </div>

            <div class="code-status flex items-center justify-between gap-4 px-3 py-1 font-mono text-[10.5px] text-white/95">
              <span class="flex items-center gap-3">
                <span>⎇ main</span>
                <span>⊗ 0 ⚠ 0</span>
              </span>
              <span class="flex items-center gap-3">
                <span class="hidden sm:inline">Ln {{ code.lines.length }}, Col 2</span>
                <span class="hidden sm:inline">UTF-8</span>
                <span>TypeScript</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="marquee absolute inset-x-0 bottom-0 overflow-hidden border-t border-line bg-panel py-3">
      <div class="marquee-track flex w-max gap-8">
        <span v-for="(t, i) in [...marquee, ...marquee]" :key="i" class="text-[12px] font-semibold text-fg-2">
          {{ t }}<span class="ml-8 text-brand">◆</span>
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.role-enter-active,
.role-leave-active {
  transition: opacity 0.28s ease, transform 0.28s ease;
}
.role-enter-from {
  opacity: 0;
  transform: translateY(0.4em);
}
.role-leave-to {
  opacity: 0;
  transform: translateY(-0.4em);
}
</style>
