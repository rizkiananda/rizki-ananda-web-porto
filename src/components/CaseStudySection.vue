<script setup>
import { cashiermediaOverview, ui } from '../data'
</script>

<template>
  <section id="case-study" class="slide slide--stack">
    <div class="slide-inner mx-auto w-full max-w-7xl px-4 sm:px-6">
      <div class="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div v-reveal class="lg:col-span-5">
          <p class="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel-2 px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.14em] text-fg-2">
            <span class="text-brand">04</span>
            {{ ui.lightbox.caseStudyLabel }}
          </p>

          <h2 class="mt-4 font-display text-[clamp(1.75rem,4vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.025em]">
            {{ cashiermediaOverview.title }}
          </h2>

          <div class="mt-5 space-y-3.5">
            <p v-for="p in cashiermediaOverview.body" :key="p" class="text-[14.5px] leading-relaxed text-fg-2">
              {{ p }}
            </p>
          </div>

          <p class="mt-5 rounded-2xl border-l-2 border-brand bg-panel-2 px-4 py-3 text-[13.5px] leading-relaxed">
            {{ ui.work.sameSystem }}
          </p>
        </div>

        <div v-reveal="100" class="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          <div
            v-for="g in cashiermediaOverview.moduleGroups"
            :key="g.label"
            class="rounded-2xl border border-line bg-panel-2 p-5"
          >
            <p class="text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand">{{ g.label }}</p>
            <ul class="mt-3 space-y-1">
              <li v-for="m in g.items" :key="m" class="flex gap-2 text-[13px] text-fg-2">
                <span class="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-brand/70" />
                {{ m }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
