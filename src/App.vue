<script setup>
import { ref, provide } from 'vue'
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import CaseStudySection from './components/CaseStudySection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import ImageLightbox from './components/ImageLightbox.vue'

const lightbox = ref(null)

/** Project galleries open the lightbox through this. */
provide('openLightbox', (shots, index) => lightbox.value.open(shots, index))
</script>

<template>
  <SiteNav />
  <main>
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
