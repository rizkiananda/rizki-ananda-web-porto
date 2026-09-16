<script setup>
import { computed } from 'vue'
import SectionHead from './SectionHead.vue'
import { profile, ui } from '../data'

/* The bio paragraphs, replayed as shell output. */
const log = computed(() => {
  const bio = ui.value.about.bio
  return [
    { cmd: 'whoami', text: bio[0] },
    { cmd: 'cat mission.txt', text: bio[1] },
  ].filter((b) => b.text)
})

const spec = computed(() => {
  const s = ui.value.about.spec
  const p = profile.value
  return [
    { k: s.operator, v: p.name, tone: 'brand' },
    { k: s.role, v: p.role.toUpperCase().replace(/ /g, '_'), tone: 'brand' },
    { k: s.location, v: p.location },
    { k: ui.value.about.languages, v: p.languages.map((l) => l.name).join(' · ') },
    { k: s.status, v: s.open, tone: 'badge' },
  ]
})

const cardIcons = [
  'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7.4V12l3.2 1.9',
  'M8 18l-4-6 4-6M16 6l4 6-4 6',
  'M12 3 3 8l9 5 9-5-9-5zM3 16l9 5 9-5M3 12l9 5 9-5',
]
</script>

<template>
  <section id="about" class="slide slide--stack">
    <div class="slide-inner mx-auto w-full max-w-7xl px-4 sm:px-6">
      <SectionHead num="01" :label="ui.about.label" :title="ui.about.title" />

      <div class="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div v-reveal class="lg:col-span-5">
          <div class="rounded-3xl border border-line bg-panel-2 p-6 sm:p-7">
            <div class="relative mx-auto h-36 w-36">
              <!-- Ring drawn as a conic gradient so it needs no extra elements. -->
              <div
                class="h-full w-full rounded-full p-[3px]"
                style="
                  background: conic-gradient(
                    from 200deg,
                    var(--color-brand) 0deg,
                    var(--color-brand-2) 110deg,
                    transparent 190deg,
                    transparent 290deg,
                    var(--color-brand) 360deg
                  );
                "
              >
                <div class="h-full w-full rounded-full bg-panel-2 p-1">
                  <img
                    src="/rizki-ananda.webp"
                    :alt="ui.about.portrait"
                    width="254"
                    height="355"
                    class="h-full w-full rounded-full object-cover object-top"
                  />
                </div>
              </div>
              <span class="absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-panel-2 bg-[#28c840]" />
            </div>

            <dl class="mt-6">
              <div
                v-for="r in spec"
                :key="r.k"
                class="flex items-center justify-between gap-4 border-b border-line py-2.5 last:border-0 last:pb-0"
              >
                <dt class="shrink-0 text-[11px] font-bold uppercase tracking-[0.14em] text-fg-2">{{ r.k }}</dt>
                <dd class="text-right font-mono text-[12.5px]">
                  <span
                    v-if="r.tone === 'badge'"
                    class="rounded bg-[#28c840]/15 px-2 py-0.5 text-[11px] font-bold tracking-wide text-[#22a838]"
                  >
                    {{ r.v }}
                  </span>
                  <span v-else :class="r.tone === 'brand' ? 'font-semibold text-brand' : 'text-fg'">{{ r.v }}</span>
                </dd>
              </div>
            </dl>
          </div>

          <a
            href="/CV-Rizki-Ananda.pdf"
            target="_blank"
            rel="noopener"
            class="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-brand px-5 py-3.5 font-bold text-brand-ink transition-transform hover:-translate-y-0.5"
          >
            {{ ui.about.downloadCv }}
            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>

        <div v-reveal="100" class="space-y-3 lg:col-span-7">
          <div class="overflow-hidden rounded-2xl border border-line bg-panel">
            <p class="flex items-center gap-2 border-b border-line bg-panel-2 px-4 py-2.5 font-mono text-[12px] text-fg-2">
              <span class="font-bold text-brand">&gt;_</span>
              {{ ui.about.log }}
            </p>
            <div class="space-y-3 px-4 py-3.5 sm:px-5">
              <div v-for="b in log" :key="b.cmd">
                <p class="flex items-center gap-2 font-mono text-[12.5px]">
                  <span class="text-brand-2">→</span>
                  <span class="font-semibold text-brand">{{ b.cmd }}</span>
                </p>
                <p class="mt-1.5 border-l-2 border-line pl-4 text-[13.5px] leading-[1.62] text-fg-2" v-html="b.text" />
              </div>
            </div>
          </div>

          <div class="grid gap-3 sm:grid-cols-3">
            <div v-for="(c, i) in ui.about.cards" :key="c.label" class="rounded-2xl border border-line bg-panel-2 px-4 py-3">
              <p class="flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.14em] text-fg-2">
                <svg viewBox="0 0 24 24" class="h-4 w-4 shrink-0 text-brand" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path :d="cardIcons[i]" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {{ c.label }}
              </p>
              <p class="mt-1.5 font-display text-[1.5rem] font-bold leading-none text-brand">
                {{ c.value }}
                <span class="ml-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-fg-2">{{ c.unit }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
