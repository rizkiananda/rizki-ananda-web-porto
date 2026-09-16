<script setup>
import SectionHead from './SectionHead.vue'
import { experience, ui } from '../data'
</script>

<template>
  <section id="experience" class="slide slide--stack">
    <div class="slide-inner mx-auto w-full max-w-7xl px-4 sm:px-6">
      <SectionHead num="03" :label="ui.experience.label" :title="ui.experience.title" />

      <ol class="relative border-l border-line pl-6 sm:pl-8">
        <li
          v-for="(job, i) in experience"
          :key="job.company + job.period"
          v-reveal="i * 60"
          class="relative pb-5 last:pb-0"
        >
          <span
            class="absolute -left-[1.8125rem] top-6 h-2.5 w-2.5 rounded-full ring-4 ring-panel sm:-left-[2.3125rem]"
            :class="job.current ? 'bg-brand' : 'bg-line'"
          />

          <div class="rounded-2xl border border-line bg-panel-2 p-5">
            <div class="flex flex-wrap items-center gap-2.5">
              <p class="text-[12px] font-bold text-fg-2">{{ job.period }}</p>
              <span
                v-if="job.current"
                class="rounded-full bg-brand px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.1em] text-brand-ink"
              >
                {{ ui.experience.now }}
              </span>
            </div>

            <h3 class="mt-2 font-display text-lg font-bold leading-tight sm:text-xl">{{ job.role }}</h3>
            <p class="mt-0.5 text-[14px] font-semibold text-brand">{{ job.company }}</p>

            <ul class="mt-3 space-y-1.5">
              <li v-for="p in job.points" :key="p" class="flex gap-2.5 text-[13.5px] leading-relaxed text-fg-2">
                <span class="mt-2 h-px w-3 shrink-0 bg-brand/60" />
                <span>{{ p }}</span>
              </li>
            </ul>

            <ul class="mt-3 flex flex-wrap gap-1.5">
              <li
                v-for="s in job.stack"
                :key="s"
                class="rounded-full border border-line bg-panel px-2.5 py-0.5 text-[11px] font-semibold text-fg-2"
              >
                {{ s }}
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
