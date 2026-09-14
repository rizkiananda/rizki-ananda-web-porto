<script setup>
defineProps({ num: String, label: String, title: String })
</script>

<template>
  <header v-reveal class="mb-12">
    <p class="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">
      <span class="text-accent">{{ num }}</span>
      <span class="h-px w-8 bg-line" />
      {{ label }}
    </p>
    <!-- title carries a highlight span; it is a static string from content.<lang>.js -->
    <h2
      class="mt-4 max-w-3xl font-display text-[clamp(2rem,5.5vw,3.4rem)] font-extrabold leading-[1.02] tracking-[-0.025em]"
      v-html="title"
    />
  </header>
</template>
