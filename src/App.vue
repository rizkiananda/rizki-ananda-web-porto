<script setup>
import { ref, provide } from 'vue'
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import ImageLightbox from './components/ImageLightbox.vue'

const lightbox = ref(null)

/** Featured project galleries open the lightbox through this. */
provide('openLightbox', (shots, index) => lightbox.value.open(shots, index))
</script>

<template>
  <SiteNav />
  <main>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
  </main>
  <ImageLightbox ref="lightbox" />
</template>
