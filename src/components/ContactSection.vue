<script setup>
import { computed } from 'vue'
import { profile, ui } from '../data'

const paths = {
  mail: 'M3 6h18v12H3zM3 7l9 6 9-6',
  phone: 'M6 3h3l2 5-2.5 1.5a12 12 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4 5.2 2 2 0 0 1 6 3z',
  code: 'M8 18l-4-6 4-6M16 6l4 6-4 6M13 4l-2 16',
  user: 'M4 20v-1a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v1M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8z',
}

const links = computed(() => {
  const p = profile.value
  const l = ui.value.contact.links
  return [
    { label: l.email, value: p.email, href: `mailto:${p.email}`, icon: 'mail' },
    { label: l.phone, value: p.phone, href: `tel:${p.phone.replace(/\D/g, '')}`, icon: 'phone' },
    { label: l.github, value: 'github.com/rizkiananda', href: p.github, icon: 'code' },
    { label: l.linkedin, value: 'Rizki Ananda Utama', href: p.linkedin, icon: 'user' },
  ]
})
</script>

<template>
  <section id="contact" class="slide slide--stack overflow-hidden">
    <div
      class="pointer-events-none absolute -bottom-40 left-1/4 h-[32rem] w-[32rem] rounded-full opacity-25 blur-3xl"
      style="background: radial-gradient(circle, var(--color-brand) 0%, transparent 65%)"
    />

    <div class="slide-inner relative mx-auto w-full max-w-7xl px-4 sm:px-6">
      <div>
      <p v-reveal class="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel-2 px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.14em] text-fg-2">
        <span class="text-brand">06</span>
        {{ ui.contact.label }}
      </p>

      <h2
        v-reveal="60"
        class="mt-5 max-w-4xl font-display text-[clamp(2rem,5.5vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.03em]"
        v-html="ui.contact.title"
      />

      <p v-reveal="120" class="mt-5 max-w-xl text-[15px] leading-relaxed text-fg-2">{{ ui.contact.body }}</p>

      <a
        v-reveal="150"
        :href="`mailto:${profile.email}`"
        class="group mt-7 inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3.5 font-bold text-brand-ink transition-transform hover:-translate-y-0.5"
      >
        {{ profile.email }}
        <svg viewBox="0 0 24 24" class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.4">
          <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>

      <dl v-reveal="180" class="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <a
          v-for="l in links"
          :key="l.label"
          :href="l.href"
          target="_blank"
          rel="noopener"
          class="group rounded-2xl border border-line bg-panel-2 p-5 transition-colors hover:border-brand"
        >
          <span class="grid h-9 w-9 place-items-center rounded-full bg-brand/15 text-brand">
            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8">
              <path :d="paths[l.icon]" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <dt class="mt-3 text-[11.5px] font-bold uppercase tracking-[0.14em] text-fg-2">{{ l.label }}</dt>
          <dd class="mt-1 break-words text-[14px] font-semibold group-hover:text-brand">{{ l.value }}</dd>
        </a>
      </dl>

      <footer class="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-[12px] text-fg-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ new Date().getFullYear() }} {{ profile.name }}</p>
        <p>{{ ui.contact.builtWith }}</p>
      </footer>
      </div>
    </div>
  </section>
</template>
