<script setup>
import SectionHead from './SectionHead.vue'
import { experience, ui } from '../data'
</script>

<template>
  <section id="experience" class="border-y border-line bg-paper-2/40">
    <div class="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHead num="02" :label="ui.experience.label" :title="ui.experience.title" />

      <ol class="relative border-l border-line pl-7 sm:pl-10">
        <li
          v-for="(job, i) in experience"
          :key="job.company + job.period"
          v-reveal="i * 60"
          class="relative pb-14 last:pb-0"
        >
          <span
            class="absolute -left-[2.0625rem] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-paper-2 sm:-left-[2.8125rem]"
            :class="job.current ? 'bg-accent' : 'bg-line'"
          />

          <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
            <p class="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">{{ job.period }}</p>
            <span
              v-if="job.current"
              class="rounded-full bg-accent/12 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent"
            >
              {{ ui.experience.now }}
            </span>
          </div>

          <h3 class="mt-2.5 font-display text-2xl font-bold leading-tight sm:text-[1.7rem]">{{ job.role }}</h3>
          <p class="mt-1 text-[15px] font-semibold text-accent">{{ job.company }}</p>

          <ul class="mt-4 space-y-2">
            <li
              v-for="p in job.points"
              :key="p"
              class="flex gap-3 text-[14.5px] leading-relaxed text-ink-soft"
            >
              <span class="mt-2 h-px w-3.5 shrink-0 bg-accent/50" />
              <span>{{ p }}</span>
            </li>
          </ul>

          <ul class="mt-4 flex flex-wrap gap-1.5">
            <li
              v-for="s in job.stack"
              :key="s"
              class="rounded border border-line bg-paper px-2 py-0.5 font-mono text-[11px] text-ink-soft"
            >
              {{ s }}
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>
