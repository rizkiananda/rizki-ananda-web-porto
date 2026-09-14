<script setup>
import { onBeforeUnmount, ref, watch } from 'vue'
import { ui } from '../data'

const shots = ref([])
const index = ref(0)
const isOpen = ref(false)

const open = (list, i = 0) => {
  shots.value = list
  index.value = i
  isOpen.value = true
}
const close = () => (isOpen.value = false)
const step = (d) => (index.value = (index.value + d + shots.value.length) % shots.value.length)

const onKey = (e) => {
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowRight') step(1)
  else if (e.key === 'ArrowLeft') step(-1)
}

watch(isOpen, (v) => {
  document.body.style.overflow = v ? 'hidden' : ''
  v ? window.addEventListener('keydown', onKey) : window.removeEventListener('keydown', onKey)
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKey)
})

defineExpose({ open })
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex flex-col bg-ink/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      @click.self="close"
    >
      <button
        class="absolute right-3 top-3 z-20 inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-[13px] font-semibold text-ink shadow-lg transition-colors hover:bg-accent hover:text-paper sm:right-6 sm:top-5"
        :aria-label="ui.lightbox.close"
        @click="close"
      >
        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
        </svg>
        {{ ui.lightbox.close }}
        <span class="ml-0.5 rounded border border-ink/20 px-1.5 py-px font-mono text-[10px] font-normal">Esc</span>
      </button>

      <div class="shrink-0 px-5 py-4 pr-32 text-paper sm:px-8 sm:pr-40">
        <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60">
          {{ String(index + 1).padStart(2, '0') }} / {{ String(shots.length).padStart(2, '0') }}
        </p>
      </div>

      <div class="relative flex min-h-0 flex-1 items-center px-3 sm:px-6" @click.self="close">
        <button
          class="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-paper/20 bg-ink/60 text-paper backdrop-blur-sm transition-colors hover:bg-paper hover:text-ink sm:left-4"
          :aria-label="ui.lightbox.previous"
          @click="step(-1)"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 5l-7 7 7 7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <div class="flex min-h-0 min-w-0 flex-1 items-center justify-center">
          <img
            :key="shots[index].src"
            :src="shots[index].src"
            :alt="shots[index].caption"
            class="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
          />
        </div>

        <button
          class="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-paper/20 bg-ink/60 text-paper backdrop-blur-sm transition-colors hover:bg-paper hover:text-ink sm:right-4"
          :aria-label="ui.lightbox.next"
          @click="step(1)"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      <p class="px-6 py-5 text-center text-[13.5px] text-paper/75">{{ shots[index].caption }}</p>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.22s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
