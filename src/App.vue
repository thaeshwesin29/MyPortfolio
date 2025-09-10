<template>
  <div id="app">
    <!-- Navigation -->
    <Header />

    <!-- Main Content -->
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Floating Scroll to Top -->
    <ScrollToTop />
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import ScrollToTop from '@/components/common/ScrollToTop.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    ScrollToTop,
    HeroSection,
    AboutSection,
    SkillsSection,
    EducationSection,
    ProjectsSection,
    ContactSection
  }
}
</script>

<style>
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}
</style>
