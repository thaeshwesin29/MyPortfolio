<template>
<section
  id="projects"
  class="py-20 relative overflow-hidden transition-colors duration-500
         bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
>
    <!-- Background shapes -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 grid-pattern opacity-5"></div>
      <div class="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/10 to-indigo-400/10 animate-pulse-slow"></div>
      <div class="absolute bottom-32 right-32 w-40 h-40 rounded-full bg-gradient-conic from-indigo-500/10 via-purple-500/10 to-transparent animate-rotate-slow"></div>
      <div class="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-radial from-blue-400/5 to-transparent animate-rotate-slow"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-black mb-6 modern-gradient-text">
          Featured Projects
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
        <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
          Here are some of my recent projects that showcase my expertise in modern web development and scalable system architecture.
        </p>
      </div>

      <!-- Project Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { projects } from '@/assets/data/projects.js'

export default {
  name: 'ProjectsSection',
  components: { ProjectCard },
  data() {
    return {
      projects: projects.filter(p => p.featured)
    }
  }
}
</script>

<style scoped>
/* Gradient text like hero/education */
.modern-gradient-text {
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  line-height: 0.9;
}

/* Grid pattern background */
.grid-pattern {
  background-image: linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Animations */
@keyframes rotate-slow { from {transform: rotate(0)} to {transform: rotate(360deg)} }
@keyframes pulse-slow { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.8;transform:scale(1.05)} }
.animate-rotate-slow { animation: rotate-slow 30s linear infinite; }
.animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
</style>
