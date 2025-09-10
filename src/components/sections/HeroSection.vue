<template>
  <section
    id="home"
    class="min-h-screen flex items-center relative overflow-hidden transition-colors duration-500
           bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
  >
    <!-- Background shapes & globe -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 grid-pattern opacity-5"></div>

      <div class="absolute top-20 left-20 w-32 h-32 rotate-45 animate-pulse-slow bg-blue-400/10 dark:bg-indigo-500/10 rounded-full"></div>
      <div class="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-full animate-bounce-slow"></div>
      <div class="absolute bottom-32 left-32 w-16 h-16 rotate-12 animate-spin-slow bg-slate-300/10 dark:bg-slate-700/30"></div>

      <!-- Large floating elements -->
      <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-conic from-blue-400/5 via-indigo-400/5 to-slate-900/5 dark:from-indigo-700/10 dark:via-purple-700/10 dark:to-black/10 animate-rotate-slow"></div>
      <div class="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-radial from-indigo-400/10 to-transparent dark:from-purple-700/20 animate-pulse-slow"></div>

      <!-- Animated Globe -->
      <div class="absolute top-1/4 left-2/3 w-80 h-80 md:w-96 md:h-96 sm:w-64 sm:h-64 rounded-full overflow-hidden animate-rotate-world shadow-xl">
        <img src="/images/world.jpg" alt="World Globe" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Dark overlay for text readability -->
    <div class="absolute inset-0 bg-black/20 dark:bg-black/40 pointer-events-none"></div>

    <!-- Main content -->
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-10 py-10">
        <!-- Left: Photo -->
        <div class="w-full lg:w-1/3 flex justify-center lg:justify-start -translate-x-8">
          <div class="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl">
            <img
              :src="personalInfo.photo || '/images/profile.jpg'"
              :alt="personalInfo.name"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Right: Text -->
        <div class="w-full lg:w-2/3 text-center lg:text-left -translate-x-4">
          <h1 class="font-black mb-6 leading-tight tracking-tight drop-shadow-lg">
            <span class="block text-2xl md:text-3xl lg:text-4xl mb-2">Hi, I'm</span>
            <span class="modern-gradient-text block text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {{ personalInfo.name }}
            </span>
          </h1>

          <!-- Typing effect -->
          <div class="mb-6">
            <p class="text-lg md:text-xl lg:text-2xl font-light drop-shadow-md mb-4 tracking-wide">
              {{ displayText }}<span class="typing-cursor">|</span>
            </p>
            <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto lg:mx-0 rounded-full"></div>
          </div>

          <!-- Description -->
          <p class="text-base md:text-lg lg:text-xl mb-8 max-w-3xl leading-relaxed font-light drop-shadow-md">
            {{ personalInfo.description }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
            <a
              href="#projects"
              class="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl font-semibold text-base lg:text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span class="relative z-10 flex items-center gap-3">
                View My Work
                <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <a
              href="#contact"
              class="group px-8 py-4 border-2 border-slate-300 text-slate-300 rounded-2xl font-semibold text-base lg:text-lg backdrop-blur-sm bg-white/5 hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-slate-600 dark:text-slate-200 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="flex items-center gap-3">
                Get In Touch
                <svg class="w-5 h-5 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { personalInfo } from '@/assets/data/personal-info.js'

export default {
  name: 'HeroSection',
  data() {
    return {
      personalInfo,
      displayText: '',
      fullText: personalInfo.title || '',
      typeIndex: 0
    }
  },
  mounted() {
    this.typeWriter()
  },
  methods: {
    typeWriter() {
      if (!this.fullText) return
      if (this.typeIndex < this.fullText.length) {
        this.displayText += this.fullText.charAt(this.typeIndex)
        this.typeIndex++
        setTimeout(() => this.typeWriter(), 100)
      }
    }
  }
}
</script>

<style scoped>
/* Gradient text */
.modern-gradient-text {
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  line-height: 0.9;
}

/* Grid overlay */
.grid-pattern {
  background-image: linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Animations */
@keyframes rotate-world { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
.animate-rotate-world { animation: rotate-world 20s linear infinite; }
@keyframes pulse-slow { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.8;transform:scale(1.05)} }
@keyframes bounce-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
@keyframes spin-slow { from{transform:rotate(0)} to{transform:rotate(360deg)} }
@keyframes rotate-slow { from{transform:rotate(0)} to{transform:rotate(360deg)} }
.typing-cursor { color: #3b82f6; animation: blink 1.2s infinite; }
@keyframes blink { 0%,50%{opacity:1} 51%,100%{opacity:0} }
.animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
.animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
.animate-spin-slow { animation: spin-slow 20s linear infinite; }
.animate-rotate-slow { animation: rotate-slow 40s linear infinite; }
</style>
