<script setup>
import SectionHead from './SectionHead.vue'
import ProjectFeature from './ProjectFeature.vue'
import { featured, otherWork, cashiermediaOverview, icons, tones, ui } from '../data'
</script>

<template>
  <section id="work" class="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
    <SectionHead num="03" :label="ui.work.label" :title="ui.work.title" />

    <!-- CashierMedia context panel -->
    <div v-reveal class="mb-16 overflow-hidden rounded-3xl bg-ink text-paper">
      <div class="grid gap-10 p-8 sm:p-12 md:grid-cols-12 md:gap-x-12">
        <div class="md:col-span-6">
          <p class="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-soft">{{ ui.work.caseStudy }}</p>
          <h3 class="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            {{ cashiermediaOverview.title }}
          </h3>
          <div class="mt-5 space-y-4">
            <p
              v-for="p in cashiermediaOverview.body"
              :key="p"
              class="text-[15px] leading-relaxed text-paper/70"
            >
              {{ p }}
            </p>
          </div>
          <p class="mt-6 border-l-2 border-accent pl-4 text-[14px] leading-relaxed text-paper/85">
            {{ ui.work.sameSystem }}
          </p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 md:col-span-6">
          <div v-for="g in cashiermediaOverview.moduleGroups" :key="g.label">
            <p class="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-soft">{{ g.label }}</p>
            <ul class="mt-3 space-y-1.5">
              <li v-for="m in g.items" :key="m" class="text-[13.5px] text-paper/65">{{ m }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-24">
      <ProjectFeature v-for="p in featured" :key="p.slug" :project="p" />
    </div>

    <!-- Other work -->
    <div class="mt-28">
      <div v-reveal class="flex items-end justify-between gap-6 border-t border-line pt-10">
        <div>
          <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
            <span class="text-accent">04</span>
            <span class="mx-2 text-line">—</span>{{ ui.work.alsoBuilt }}
          </p>
          <h3 class="mt-3 font-display text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold leading-tight tracking-[-0.02em]">
            {{ ui.work.alsoBuiltTitle }}
          </h3>
        </div>
      </div>

      <div class="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(w, i) in otherWork"
          :key="w.name"
          v-reveal="(i % 3) * 70"
          class="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-colors hover:border-ink/25"
        >
          <!-- generated thumbnail -->
          <div
            class="relative h-32 overflow-hidden"
            :style="`background: linear-gradient(135deg, ${tones[w.tone][0]} 0%, ${tones[w.tone][1]} 100%)`"
          >
            <svg class="absolute inset-0 h-full w-full opacity-[0.18]" aria-hidden="true">
              <defs>
                <pattern :id="`dots-${i}`" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.1" fill="#fff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" :fill="`url(#dots-${i})`" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              class="absolute -bottom-3 -right-2 h-28 w-28 text-white/25 transition-transform duration-500 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path :d="icons[w.icon]" />
            </svg>
            <span class="absolute left-5 top-5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/80">
              {{ w.year }}
            </span>
          </div>

          <div class="flex flex-1 flex-col p-6">
            <h4 class="font-display text-lg font-bold leading-snug">{{ w.name }}</h4>
            <p class="mt-1 text-[12.5px] font-medium text-accent">{{ w.org }}</p>
            <p class="mt-3 flex-1 text-[13.5px] leading-relaxed text-ink-soft">{{ w.desc }}</p>
            <ul class="mt-5 flex flex-wrap gap-1.5">
              <li
                v-for="s in w.stack"
                :key="s"
                class="rounded border border-line px-2 py-0.5 font-mono text-[10.5px] text-ink-soft"
              >
                {{ s }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
