<script setup>
import { ref, provide, computed, nextTick, watch } from 'vue'
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import CaseStudySection from './components/CaseStudySection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import ImageLightbox from './components/ImageLightbox.vue'
import ProjectPage from './components/ProjectPage.vue'
import { featured } from './data'
import { projectSlug } from './router'

const lightbox = ref(null)

/** Project galleries open the lightbox through this. */
provide('openLightbox', (shots, index) => lightbox.value.open(shots, index))

const project = computed(() => featured.value.find((p) => p.slug === projectSlug.value) ?? null)

/* The browser cannot scroll to an anchor that is not mounted yet: leaving a
   project page re-creates the sections, so the jump waits for the render. */
watch(project, async (p) => {
  await nextTick()
  if (p) return window.scrollTo(0, 0)
  const el = location.hash.startsWith('#/') ? null : document.querySelector(location.hash || '#top')
  el ? el.scrollIntoView() : window.scrollTo(0, 0)
})
</script>

<template>
  <SiteNav />
  <ProjectPage v-if="project" :key="project.slug" :project="project" />
  <main v-else>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <CaseStudySection />
    <ProjectsSection />
    <ContactSection />
  </main>
  <ImageLightbox ref="lightbox" />
</template>
