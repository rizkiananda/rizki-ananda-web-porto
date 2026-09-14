<script setup>
import { inject } from 'vue'
import { ui } from '../data'

const props = defineProps({ project: { type: Object, required: true } })
const openLightbox = inject('openLightbox')

const src = (file, thumb = false) =>
  `/showcase/${props.project.slug}/${file}${thumb ? '-thumb' : ''}.webp`

const open = (i) =>
  openLightbox(
    props.project.shots.map((s) => ({ ...s, src: src(s.file) })),
    i,
  )
</script>

<template>
  <article class="border-t border-line pt-10">
    <div v-reveal class="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
      <div>
        <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
          <span class="text-accent">{{ project.index }}</span>
          <span class="mx-2 text-line">—</span>{{ project.year }}
        </p>
        <h3 class="mt-2 font-display text-[clamp(1.8rem,4.4vw,2.8rem)] font-extrabold leading-none tracking-[-0.025em]">
          {{ project.name }}
        </h3>
        <p class="mt-2 font-mono text-[12.5px] text-accent">{{ project.version }}</p>
      </div>

      <a
        v-if="project.link"
        :href="project.link"
        target="_blank"
        rel="noopener"
        class="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-accent"
      >
        {{ project.linkLabel }}
        <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="2.2">
          <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
      <span
        v-else
        class="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-soft"
      >
        <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 11V8a6 6 0 1 1 12 0v3M5 11h14v10H5z" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        {{ project.linkLabel }}
      </span>
    </div>

    <!-- hero shot -->
    <button
      v-reveal="60"
      class="group relative mt-8 block aspect-[21/10] w-full overflow-hidden rounded-2xl border border-line bg-paper-2 text-left"
      @click="open(0)"
    >
      <img
        :src="src(project.shots[0].file)"
        :alt="project.shots[0].caption"
        loading="lazy"
        class="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
      />
      <span
        class="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-gradient-to-t from-ink/80 to-transparent px-5 pb-4 pt-16 text-[13px] text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <span>{{ project.shots[0].caption }}</span>
        <span class="shrink-0 rounded-full bg-paper/15 px-3 py-1 font-mono text-[11px] backdrop-blur-sm">
          {{ project.shots.length }} {{ ui.work.screensCount }}
        </span>
      </span>
    </button>

    <div class="mt-10 grid gap-10 md:grid-cols-12 md:gap-x-12">
      <div v-reveal class="md:col-span-7">
        <p class="text-[15.5px] leading-relaxed text-ink/85">{{ project.summary }}</p>

        <ul class="mt-6 space-y-3.5">
          <li v-for="h in project.highlights" :key="h" class="flex gap-3.5">
            <span class="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
            <span class="text-[14.5px] leading-relaxed text-ink-soft">{{ h }}</span>
          </li>
        </ul>

        <p v-if="project.redacted" class="mt-6 rounded-xl border border-line bg-paper-2/60 px-4 py-3 text-[13px] italic text-ink-soft">
          {{ project.redacted }}
        </p>
      </div>

      <div v-reveal="100" class="md:col-span-5">
        <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">{{ ui.work.myRole }}</p>
        <p class="mt-2 text-[14.5px] font-semibold">{{ project.role }}</p>

        <p class="mt-7 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">{{ ui.work.builtWith }}</p>
        <ul class="mt-3 flex flex-wrap gap-1.5">
          <li
            v-for="s in project.stack"
            :key="s"
            class="rounded border border-line bg-paper-2/60 px-2.5 py-1 font-mono text-[11.5px] text-ink-soft"
          >
            {{ s }}
          </li>
        </ul>
      </div>
    </div>

    <!-- gallery strip -->
    <div v-reveal class="mt-10">
      <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
        {{ ui.work.screens }} <span class="text-line">— {{ ui.work.clickToEnlarge }}</span>
      </p>
      <div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        <button
          v-for="(shot, i) in project.shots"
          :key="shot.file"
          class="group relative overflow-hidden rounded-xl border border-line bg-paper-2"
          @click="open(i)"
        >
          <img
            :src="src(shot.file, true)"
            :alt="shot.caption"
            loading="lazy"
            class="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <span
            class="pointer-events-none absolute inset-0 flex items-end bg-ink/70 p-3 text-[11.5px] leading-snug text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            {{ shot.caption }}
          </span>
        </button>
      </div>
    </div>
  </article>
</template>
