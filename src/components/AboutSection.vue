<script setup>
import SectionHead from './SectionHead.vue'
import { profile, skillGroups, ui } from '../data'
</script>

<template>
  <section id="about" class="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
    <SectionHead num="01" :label="ui.about.label" :title="ui.about.title" />

    <div class="grid gap-12 md:grid-cols-12 md:gap-x-12">
      <div v-reveal class="space-y-5 text-[15px] leading-relaxed text-ink-soft md:col-span-7">
        <p v-for="(para, i) in ui.about.bio" :key="i" v-html="para" />
      </div>

      <div v-reveal="100" class="space-y-4 md:col-span-5">
        <div class="flex items-center gap-5 rounded-2xl border border-line bg-paper-2/50 p-5">
          <div class="relative shrink-0">
            <span class="absolute -bottom-2 -right-2 h-full w-full rounded-xl border border-accent" />
            <img
              src="/rizki-ananda.webp"
              :alt="ui.about.portrait"
              width="254"
              height="355"
              class="relative h-[8.5rem] w-[6.1rem] rounded-xl object-cover object-top sm:h-[10rem] sm:w-[7.15rem]"
            />
          </div>
          <div>
            <p class="font-display text-lg font-bold leading-tight">{{ profile.name }}</p>
            <p class="mt-1 text-[13px] text-ink-soft">{{ profile.role }}</p>
            <a
              href="/CV-Rizki-Ananda.pdf"
              target="_blank"
              rel="noopener"
              class="group mt-4 inline-flex items-center gap-2 rounded-full border border-ink/25 px-3.5 py-1.5 text-[12.5px] font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ ui.about.downloadCv }}
            </a>
          </div>
        </div>

        <div class="rounded-2xl border border-line bg-paper-2/50 p-6">
          <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{{ ui.about.education }}</p>
          <p class="mt-3 font-display text-lg font-semibold leading-snug">{{ profile.education.degree }}</p>
          <p class="mt-1 text-sm text-ink-soft">{{ profile.education.school }}</p>
          <p class="mt-3 flex items-center gap-3 font-mono text-xs text-ink-soft">
            <span>{{ profile.education.period }}</span>
            <span class="h-1 w-1 rounded-full bg-line" />
            <span>{{ profile.education.note }}</span>
          </p>
        </div>

        <div class="rounded-2xl border border-line bg-paper-2/50 p-6">
          <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{{ ui.about.languages }}</p>
          <ul class="mt-3 space-y-2.5">
            <li
              v-for="l in profile.languages"
              :key="l.name"
              class="flex items-baseline justify-between gap-4 text-sm"
            >
              <span class="font-semibold">{{ l.name }}</span>
              <span class="text-ink-soft">{{ l.level }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Skills -->
    <div class="mt-20">
      <p v-reveal class="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">{{ ui.about.toolbox }}</p>
      <div class="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
        <div
          v-for="(g, i) in skillGroups"
          :key="g.title"
          v-reveal="i * 70"
          class="group bg-paper p-7 transition-colors hover:bg-paper-2/70"
        >
          <div class="flex items-baseline justify-between gap-4">
            <h3 class="font-display text-xl font-bold">{{ g.title }}</h3>
            <span class="font-mono text-[11px] text-ink-soft/70">{{ String(i + 1).padStart(2, '0') }}</span>
          </div>
          <p class="mt-1.5 text-[13px] italic text-ink-soft">{{ g.note }}</p>
          <ul class="mt-5 flex flex-wrap gap-2">
            <li
              v-for="item in g.items"
              :key="item"
              class="rounded-full border border-line bg-paper px-3 py-1 font-mono text-[11.5px] text-ink-soft transition-colors group-hover:border-accent/30"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
