<script setup>
import { computed } from 'vue'
import { profile, ui } from '../data'

const links = computed(() => {
  const p = profile.value
  const l = ui.value.contact.links
  return [
    { label: l.email, value: p.email, href: `mailto:${p.email}` },
    { label: l.phone, value: p.phone, href: `tel:${p.phone.replace(/\D/g, '')}` },
    { label: l.github, value: 'github.com/rizkiananda', href: p.github },
    { label: l.linkedin, value: 'Rizki Ananda Utama', href: p.linkedin },
  ]
})
</script>

<template>
  <section id="contact" class="grid-paper scroll-mt-24 border-t border-line bg-paper-2/40">
    <div class="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <p v-reveal class="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">
        <span class="text-accent">05</span>
        <span class="h-px w-8 bg-line" />
        {{ ui.contact.label }}
      </p>

      <h2
        v-reveal="60"
        class="mt-5 max-w-4xl font-display text-[clamp(2.2rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]"
        v-html="ui.contact.title"
      />

      <p v-reveal="120" class="mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink-soft">
        {{ ui.contact.body }}
      </p>

      <a
        v-reveal="160"
        :href="`mailto:${profile.email}`"
        class="group mt-9 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-semibold text-paper transition-colors hover:bg-accent"
      >
        {{ profile.email }}
        <svg viewBox="0 0 24 24" class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.2">
          <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>

      <dl v-reveal class="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        <a
          v-for="l in links"
          :key="l.label"
          :href="l.href"
          target="_blank"
          rel="noopener"
          class="group bg-paper px-5 py-6 transition-colors hover:bg-ink hover:text-paper"
        >
          <dt class="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-soft group-hover:text-paper/60">
            {{ l.label }}
          </dt>
          <dd class="mt-2 break-words text-[14px] font-semibold">{{ l.value }}</dd>
        </a>
      </dl>
    </div>

    <footer class="border-t border-line">
      <div
        class="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-7 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-8"
      >
        <p>© {{ new Date().getFullYear() }} Rizki Ananda</p>
        <p>{{ ui.contact.builtWith }}</p>
      </div>
    </footer>
  </section>
</template>
