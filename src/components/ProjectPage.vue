<script setup>
import { computed, inject } from 'vue'
import { featured, ui } from '../data'

const props = defineProps({ project: { type: Object, required: true } })

const openLightbox = inject('openLightbox')

const src = (file, thumb = false) =>
  `/showcase/${props.project.slug}/${file}${thumb ? '-thumb' : ''}.webp`

const shots = computed(() => props.project.shots ?? [])

const openShot = (i) =>
  openLightbox(
    shots.value.map((s) => ({ ...s, src: src(s.file) })),
    i,
  )

/* The rail is a loop, so the last project's "next" is the first one. */
const next = computed(() => {
  const list = featured.value
  const i = list.findIndex((p) => p.slug === props.project.slug)
  return list[(i + 1) % list.length]
})
</script>

<template>
  <article class="bg-canvas" style="padding-top: var(--nav-h)">
    <div class="mx-auto w-full max-w-5xl px-4 pb-24 pt-10 sm:px-6">
      <a
        href="#work"
        class="inline-flex items-center gap-2 text-[13px] font-bold text-fg-2 transition-colors hover:text-brand"
      >
        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.2">
          <path d="M19 12H5m6-6-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        {{ ui.work.back }}
      </a>

      <header class="mt-7">
        <p class="text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand">
          {{ project.index }} · {{ project.year }}
        </p>
        <h1 class="mt-3 font-display text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.03em]">
          {{ project.name }}
        </h1>
        <p class="mt-2 font-display text-[clamp(1rem,2.2vw,1.35rem)] font-semibold text-fg-2">
          {{ project.version }}
        </p>

        <div class="mt-6 flex flex-wrap items-center gap-3">
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-brand-ink transition-transform hover:-translate-y-0.5"
          >
            {{ project.linkLabel }}
            <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2.4">
              <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
          <span
            v-else
            class="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-bold text-fg-2"
          >
            {{ ui.work.internalTag }}
          </span>
          <span class="text-[13px] text-fg-2">{{ shots.length }} {{ ui.work.screensCount }}</span>
        </div>
      </header>

      <button
        class="group relative mt-9 block aspect-[21/10] w-full overflow-hidden rounded-2xl border border-line bg-panel-2"
        @click="openShot(0)"
      >
        <img
          :src="src(shots[0].file)"
          :alt="shots[0].caption"
          class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </button>

      <div class="mt-12 grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-8">
          <h2 class="font-display text-xl font-bold">{{ ui.work.overview }}</h2>
          <p class="mt-4 text-[15px] leading-relaxed text-fg-2">{{ project.summary }}</p>

          <ul class="mt-6 space-y-3">
            <li
              v-for="h in project.highlights"
              :key="h"
              class="flex gap-3 text-[14.5px] leading-relaxed text-fg-2"
            >
              <span class="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" />
              <span>{{ h }}</span>
            </li>
          </ul>

          <p
            v-if="project.redacted"
            class="mt-6 rounded-xl border border-line bg-panel-2 px-4 py-3 text-[13px] leading-relaxed text-fg-2"
          >
            {{ project.redacted }}
          </p>
        </div>

        <aside class="space-y-4 lg:col-span-4">
          <div class="rounded-2xl border border-line bg-panel-2 p-5">
            <p class="text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand">{{ ui.work.myRole }}</p>
            <p class="mt-2 text-[14px] leading-relaxed">{{ project.role }}</p>
          </div>
          <div class="rounded-2xl border border-line bg-panel-2 p-5">
            <p class="text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand">{{ ui.work.builtWith }}</p>
            <ul class="mt-3 flex flex-wrap gap-1.5">
              <li
                v-for="s in project.stack"
                :key="s"
                class="rounded-full border border-line bg-panel px-2.5 py-0.5 text-[11px] font-semibold text-fg-2"
              >
                {{ s }}
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <h2 class="mt-14 font-display text-xl font-bold">
        {{ ui.work.screens }}
        <span class="ml-1 text-[12px] font-bold uppercase tracking-[0.14em] text-brand">
          — {{ ui.work.clickToEnlarge }}
        </span>
      </h2>
      <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <button
          v-for="(shot, i) in shots"
          :key="shot.file"
          class="group overflow-hidden rounded-xl border border-line bg-panel-2 text-left"
          @click="openShot(i)"
        >
          <img
            :src="src(shot.file, true)"
            :alt="shot.caption"
            loading="lazy"
            class="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <p class="px-3 py-2.5 text-[11.5px] leading-snug text-fg-2">{{ shot.caption }}</p>
        </button>
      </div>

      <a
        :href="`#/work/${next.slug}`"
        class="mt-14 flex items-center justify-between gap-4 rounded-2xl border border-line bg-panel-2 p-5 transition-colors hover:border-brand"
      >
        <span class="min-w-0">
          <span class="block text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand">
            {{ ui.work.next }}
          </span>
          <span class="mt-1 block truncate font-display text-lg font-bold">{{ next.name }}</span>
          <span class="block truncate text-[13px] text-fg-2">{{ next.version }}</span>
        </span>
        <svg viewBox="0 0 24 24" class="h-5 w-5 shrink-0 text-fg-2" fill="none" stroke="currentColor" stroke-width="2.2">
          <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </div>
  </article>
</template>
