<script setup>
defineProps({ num: String, label: String, title: String })
</script>

<template>
  <header v-reveal class="mb-8">
    <p class="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel-2 px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.14em] text-fg-2">
      <span class="text-brand">{{ num }}</span>
      {{ label }}
    </p>
    <!-- title carries a highlight span; it is a static string from content.<lang>.js -->
    <h2
      class="mt-4 max-w-3xl font-display text-[clamp(1.75rem,4vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.025em]"
      v-html="title"
    />
  </header>
</template>
