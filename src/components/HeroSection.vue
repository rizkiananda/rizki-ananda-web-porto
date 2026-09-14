<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { profile, stats, marquee, ui } from '../data'

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
  <section id="top" class="grid-paper relative overflow-hidden pt-28 sm:pt-36">
    <!-- soft accent wash -->
    <div
      class="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-[0.16] blur-3xl"
      style="background: radial-gradient(circle, #c45a3c 0%, transparent 65%)"
    />

    <div class="relative mx-auto max-w-6xl px-5 sm:px-8">
      <p v-reveal class="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">
        <span class="inline-flex items-center gap-2">
          <span class="relative grid h-2 w-2 place-items-center">
            <span class="absolute h-2 w-2 animate-ping rounded-full bg-accent/60" />
            <span class="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          {{ ui.hero.open }}
        </span>
        <span class="text-line">/</span>
        <span>{{ profile.location }}</span>
      </p>

      <h1 class="mt-7 font-display font-extrabold leading-[0.84] tracking-[-0.03em]">
        <span v-reveal class="block text-[clamp(3.4rem,13vw,10rem)]">RIZKI</span>
        <span
          v-reveal="120"
          class="block text-[clamp(3.4rem,13vw,10rem)] text-transparent"
          style="-webkit-text-stroke: 2px #c45a3c"
        >
          ANANDA
        </span>
      </h1>

      <div class="mt-10 grid gap-y-8 border-t border-line pt-8 md:grid-cols-12 md:gap-x-10">
        <div v-reveal class="md:col-span-5">
          <p class="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">{{ ui.hero.currently }}</p>
          <p class="mt-2 font-display text-2xl font-semibold leading-tight sm:text-3xl">
            <Transition name="role" mode="out-in">
              <span :key="roleIndex">{{ profile.tagline[roleIndex] }}</span>
            </Transition>
          </p>
          <p class="mt-4 text-sm text-ink-soft">{{ ui.hero.note }}</p>
        </div>

        <div v-reveal="100" class="md:col-span-7">
          <p class="text-lg leading-relaxed text-ink/85 sm:text-xl">{{ profile.summary }}</p>

          <div class="mt-7 flex flex-wrap gap-3">
            <a
              href="#work"
              class="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-accent"
            >
              {{ ui.hero.seeWork }}
              <svg viewBox="0 0 24 24" class="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
            <a
              :href="`mailto:${profile.email}`"
              class="inline-flex items-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              {{ ui.hero.contact }}
            </a>
            <a
              href="/CV-Rizki-Ananda.pdf"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ ui.hero.cv }}
            </a>
          </div>
        </div>
      </div>

      <dl v-reveal class="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
        <div v-for="s in stats" :key="s.label" class="bg-paper px-5 py-6">
          <dt class="font-display text-4xl font-extrabold tracking-tight text-accent">{{ s.value }}</dt>
          <dd class="mt-1.5 text-[13px] leading-snug text-ink-soft">{{ s.label }}</dd>
        </div>
      </dl>
    </div>

    <div class="marquee relative mt-16 overflow-hidden border-y border-line bg-paper-2/60 py-4">
      <div class="marquee-track flex w-max gap-10">
        <span
          v-for="(t, i) in [...marquee, ...marquee]"
          :key="i"
          class="font-mono text-[12px] uppercase tracking-[0.18em] text-ink-soft"
        >
          {{ t }}<span class="ml-10 text-accent/60">✦</span>
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
