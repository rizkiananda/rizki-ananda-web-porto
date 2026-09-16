<script setup>
import { computed, inject, onBeforeUnmount, ref, watch } from 'vue'
import { ui } from '../data'

const openLightbox = inject('openLightbox')

const project = ref(null)
const isOpen = ref(false)

const open = (p) => {
  project.value = p
  isOpen.value = true
}
const close = () => (isOpen.value = false)

const src = (file, thumb = false) =>
  `/showcase/${project.value.slug}/${file}${thumb ? '-thumb' : ''}.webp`

const shots = computed(() => project.value?.shots ?? [])

const openShot = (i) =>
  openLightbox(
    shots.value.map((s) => ({ ...s, src: src(s.file) })),
    i,
  )

const onKey = (e) => e.key === 'Escape' && close()

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
  <!-- Teleported: the parent slide has its own stacking context, which would trap this under the nav. -->
  <Teleport to="body">
    <Transition name="sheet">
    <div
      v-if="isOpen && project"
      class="fixed inset-0 z-[45] flex justify-end bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      @click.self="close"
    >
      <div class="sheet-panel flex h-full w-full max-w-3xl flex-col border-l border-line bg-panel">
        <div class="flex shrink-0 items-start justify-between gap-4 border-b border-line px-5 py-4 sm:px-7">
          <div class="min-w-0">
            <p class="text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand">
              {{ project.index }} · {{ project.year }}
            </p>
            <h2 class="mt-1 truncate font-display text-xl font-bold sm:text-2xl">{{ project.name }}</h2>
            <p class="mt-0.5 text-[13px] font-semibold text-fg-2">{{ project.version }}</p>
          </div>
          <button
            class="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-fg transition-colors hover:bg-brand hover:text-brand-ink"
            :aria-label="ui.lightbox.close"
            @click="close"
          >
            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
            </svg>
          </button>
        </div>

        <div class="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-7">
          <button
            class="group relative block aspect-[21/10] w-full overflow-hidden rounded-2xl border border-line bg-panel-2"
            @click="openShot(0)"
          >
            <img
              :src="src(shots[0].file)"
              :alt="shots[0].caption"
              loading="lazy"
              class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </button>

          <p class="mt-6 text-[15px] leading-relaxed text-fg-2">{{ project.summary }}</p>

          <ul class="mt-5 space-y-2.5">
            <li v-for="h in project.highlights" :key="h" class="flex gap-3 text-[14px] leading-relaxed text-fg-2">
              <span class="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" />
              <span>{{ h }}</span>
            </li>
          </ul>

          <p
            v-if="project.redacted"
            class="mt-5 rounded-xl border border-line bg-panel-2 px-4 py-3 text-[12.5px] leading-relaxed text-fg-2"
          >
            {{ project.redacted }}
          </p>

          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl border border-line bg-panel-2 p-5">
              <p class="text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand">{{ ui.work.myRole }}</p>
              <p class="mt-2 text-[14px] leading-relaxed">{{ project.role }}</p>
            </div>
            <div class="rounded-2xl border border-line bg-panel-2 p-5">
              <p class="text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand">{{ ui.work.builtWith }}</p>
              <ul class="mt-3 flex flex-wrap gap-1.5">
                <li
                  v-for="s in project.stack"
                  :key="s"
                  class="rounded-full border border-line bg-panel px-2.5 py-0.5 text-[11px] font-semibold text-fg-2"
                >
                  {{ s }}
                </li>
              </ul>
            </div>
          </div>

          <p class="mt-7 text-[11.5px] font-bold uppercase tracking-[0.14em] text-fg-2">
            {{ ui.work.screens }} <span class="text-brand">— {{ ui.work.clickToEnlarge }}</span>
          </p>
          <div class="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <button
              v-for="(shot, i) in shots"
              :key="shot.file"
              class="group relative overflow-hidden rounded-xl border border-line bg-panel-2"
              @click="openShot(i)"
            >
              <img
                :src="src(shot.file, true)"
                :alt="shot.caption"
                loading="lazy"
                class="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span
                class="pointer-events-none absolute inset-0 flex items-end bg-black/65 px-3 pb-3 text-[11px] leading-snug text-white opacity-0 transition-opacity group-hover:opacity-100"
              >
                {{ shot.caption }}
              </span>
            </button>
          </div>
        </div>

        <div v-if="project.link" class="shrink-0 border-t border-line px-5 py-4 sm:px-7">
          <a
            :href="project.link"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-brand-ink"
          >
            {{ project.linkLabel }}
            <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2.4">
              <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.sheet-enter-active,
.sheet-leave-active {
  transition: opacity 0.25s ease;
}
.sheet-enter-active .sheet-panel,
.sheet-leave-active .sheet-panel {
  transition: transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.sheet-enter-from,
.sheet-leave-to {
  opacity: 0;
}
.sheet-enter-from .sheet-panel,
.sheet-leave-to .sheet-panel {
  transform: translateX(100%);
}
</style>
