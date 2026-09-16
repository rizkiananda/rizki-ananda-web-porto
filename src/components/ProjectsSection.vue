<script setup>
import { ref } from 'vue'
import SectionHead from './SectionHead.vue'
import ProjectDetail from './ProjectDetail.vue'
import { featured, otherWork, icons, tones, ui } from '../data'

const rail = ref(null)
const detail = ref(null)

const scrollBy = (dir) => {
  const el = rail.value
  if (!el) return
  /* One card plus its gap — the first child is always a card. */
  const step = (el.firstElementChild?.clientWidth ?? 320) + 20
  el.scrollBy({ left: dir * step, behavior: 'smooth' })
}

const thumb = (p) => `/showcase/${p.slug}/${p.shots[0].file}-thumb.webp`
</script>

<template>
  <section id="work" class="slide slide--stack">
    <div class="slide-inner mx-auto w-full max-w-7xl px-4 sm:px-6">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <SectionHead num="05" :label="ui.work.label" :title="ui.work.title" />

        <div class="mb-8 flex items-center gap-2">
          <span class="hidden text-[12px] text-fg-2 sm:inline">{{ ui.work.dragHint }}</span>
          <button
            class="grid h-10 w-10 place-items-center rounded-full border border-line text-fg-2 transition-colors hover:border-brand hover:text-brand"
            :aria-label="ui.work.prev"
            @click="scrollBy(-1)"
          >
            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 5l-7 7 7 7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button
            class="grid h-10 w-10 place-items-center rounded-full border border-line text-fg-2 transition-colors hover:border-brand hover:text-brand"
            :aria-label="ui.work.next"
            @click="scrollBy(1)"
          >
            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div ref="rail" v-reveal class="rail -mx-4 shrink-0 px-4 sm:-mx-6 sm:px-6">
        <!-- Featured: real screenshots, opens the detail panel -->
        <article
          v-for="p in featured"
          :key="p.slug"
          class="group flex w-[17rem] flex-col overflow-hidden rounded-2xl border border-line bg-panel-2 sm:w-[22rem]"
        >
          <button class="relative block aspect-[16/10] w-full shrink-0 overflow-hidden text-left" @click="detail.open(p)">
            <img
              :src="thumb(p)"
              :alt="p.name"
              loading="lazy"
              class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <span class="absolute left-3 top-3 rounded-full bg-brand px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.1em] text-brand-ink">
              {{ ui.work.featuredTag }}
            </span>
          </button>

          <div class="flex flex-1 flex-col p-5">
            <div class="flex items-baseline justify-between gap-3">
              <h3 class="font-display text-lg font-bold leading-tight">{{ p.name }}</h3>
              <span class="shrink-0 text-[11.5px] font-bold text-fg-2">{{ p.year }}</span>
            </div>
            <p class="mt-1 text-[12.5px] font-semibold text-brand">{{ p.version }}</p>
            <p class="mt-3 line-clamp-4 text-[13px] leading-relaxed text-fg-2">{{ p.summary }}</p>

            <div class="mt-auto flex items-center gap-2 pt-4">
              <button
                class="inline-flex items-center gap-1.5 rounded-full bg-brand px-3.5 py-2 text-[12.5px] font-bold text-brand-ink"
                @click="detail.open(p)"
              >
                {{ ui.work.viewDetail }}
                <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2.4">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <a
                v-if="p.link"
                :href="p.link"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-2 text-[12.5px] font-bold text-fg-2 transition-colors hover:border-brand hover:text-brand"
              >
                {{ ui.work.liveTag }}
              </a>
              <span
                v-else
                class="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-2 text-[12.5px] font-bold text-fg-2"
              >
                {{ ui.work.internalTag }}
              </span>
            </div>
          </div>
        </article>

        <!-- Everything else: generated thumbnails, no gallery -->
        <article
          v-for="(w, i) in otherWork"
          :key="w.name"
          class="group flex w-[17rem] flex-col overflow-hidden rounded-2xl border border-line bg-panel-2 sm:w-[22rem]"
        >
          <div
            class="relative aspect-[16/10] shrink-0 overflow-hidden"
            :style="`background: linear-gradient(135deg, ${tones[w.tone][0]} 0%, ${tones[w.tone][1]} 100%)`"
          >
            <svg class="absolute inset-0 h-full w-full opacity-30" aria-hidden="true">
              <defs>
                <pattern :id="`dots-${i}`" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="white" fill-opacity="0.35" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" :fill="`url(#dots-${i})`" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              class="absolute -bottom-4 -right-3 h-32 w-32 text-white/25 transition-transform duration-500 group-hover:scale-105"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path :d="icons[w.icon]" />
            </svg>
            <span class="absolute left-3 top-3 rounded-full bg-black/35 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm">
              {{ w.year }}
            </span>
          </div>

          <div class="flex flex-1 flex-col p-5">
            <h3 class="font-display text-lg font-bold leading-tight">{{ w.name }}</h3>
            <p class="mt-1 text-[12.5px] font-semibold text-brand">{{ w.org }}</p>
            <p class="mt-3 line-clamp-4 text-[13px] leading-relaxed text-fg-2">{{ w.desc }}</p>
            <ul class="mt-auto flex flex-wrap gap-1.5 pt-4">
              <li
                v-for="s in w.stack"
                :key="s"
                class="rounded-full border border-line bg-panel px-2.5 py-0.5 text-[11px] font-semibold text-fg-2"
              >
                {{ s }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>

    <ProjectDetail ref="detail" />
  </section>
</template>
