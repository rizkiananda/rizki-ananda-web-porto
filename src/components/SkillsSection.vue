<script setup>
import SectionHead from './SectionHead.vue'
import { profile, skillGroups, ui } from '../data'
</script>

<template>
  <section id="skills" class="slide slide--stack">
    <div class="slide-inner mx-auto w-full max-w-7xl px-4 sm:px-6">
      <SectionHead num="02" :label="ui.skills.label" :title="ui.skills.title" />

      <div class="grid gap-4 sm:grid-cols-2">
        <div
          v-for="(g, i) in skillGroups"
          :key="g.title"
          v-reveal="i * 70"
          class="group rounded-2xl border border-line bg-panel-2 p-5 transition-colors hover:border-brand/50"
        >
          <div class="flex items-baseline justify-between gap-3">
            <h3 class="font-display text-lg font-bold">{{ g.title }}</h3>
            <span class="text-[11.5px] font-bold text-brand">{{ String(i + 1).padStart(2, '0') }}</span>
          </div>
          <p class="mt-1 text-[12.5px] text-fg-2">{{ g.note }}</p>
          <ul class="mt-4 flex flex-wrap gap-1.5">
            <li
              v-for="item in g.items"
              :key="item"
              class="rounded-full border border-line bg-panel px-2.5 py-1 text-[11.5px] font-semibold text-fg-2"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <div v-reveal="120" class="mt-4 rounded-2xl border border-line bg-panel-2 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
        <div>
          <p class="text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand">
            {{ ui.about.education }}
          </p>
          <p class="mt-2 font-display text-lg font-bold">{{ profile.education.degree }}</p>
          <p class="mt-0.5 text-[13.5px] text-fg-2">{{ profile.education.school }}</p>
        </div>
        <p class="mt-3 shrink-0 text-[13px] font-semibold text-fg-2 sm:mt-0 sm:text-right">
          {{ profile.education.period }}
        </p>
      </div>
    </div>
  </section>
</template>
