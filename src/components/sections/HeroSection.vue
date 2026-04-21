<template>
  <section
    id="home"
    class="min-h-screen flex items-center relative overflow-hidden transition-colors duration-500 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-roboto"
  >
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 grid-pattern opacity-[0.03]"></div>

      <div class="blob blob-1 bg-blue-400/20 dark:bg-blue-600/10"></div>
      <div class="blob blob-2 bg-indigo-400/20 dark:bg-purple-600/10"></div>
      <div class="blob blob-3 bg-teal-400/10 dark:bg-indigo-500/10"></div>

      <div class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[450px] h-[450px] pointer-events-none hidden lg:block">
        <div class="w-full h-full rounded-full border-2 border-blue-500/10 animate-spin-slow flex items-center justify-center p-4">
           <img
            src="/images/world.jpg"
            alt="World Map"
            class="w-full h-full rounded-full object-cover shadow-2xl shadow-blue-500/20"
           />
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
      <div class="max-w-2xl">

        <div class="reveal-up" style="animation-delay: 0.2s">
          <span class="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
            Available for new projects
          </span>
        </div>

        <h1 class="reveal-up modern-gradient-text text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight" style="animation-delay: 0.4s">
          {{ personalInfo.name }}
        </h1>

        <div class="reveal-up mb-8" style="animation-delay: 0.6s">
          <div class="flex items-center gap-3">
            <div class="h-[2px] w-12 bg-blue-600"></div>
            <p class="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400">
              {{ displayText }}<span class="typing-cursor">|</span>
            </p>
          </div>
        </div>

        <p class="reveal-up text-base md:text-lg mb-10 max-w-lg leading-relaxed text-gray-500 dark:text-gray-400 font-light" style="animation-delay: 0.8s">
          {{ personalInfo.description }}
        </p>

        <div class="reveal-up flex flex-wrap gap-5" style="animation-delay: 1s">
          <a
            href="#projects"
            class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-sm transition-all duration-300 shadow-lg shadow-blue-600/20 hover:-translate-y-1 inline-flex items-center gap-2"
          >
            Explore Projects
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>

          <a
            href="#contact"
            class="px-8 py-4 border border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 rounded-lg font-bold text-sm transition-all duration-300 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md inline-flex items-center gap-2"
          >
            Get In Touch
          </a>
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
      typeIndex: 0
    }
  },
  computed: {
    fullText() {
      return this.personalInfo.title || ''
    }
  },
  mounted() {
    this.typeWriter()
  },
  methods: {
    typeWriter() {
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');

.font-roboto { font-family: 'Roboto', sans-serif; }

/* Entrance Transition (Upward Slide) */
.reveal-up {
  opacity: 0;
  transform: translateY(30px);
  animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes revealUp {
  to { opacity: 1; transform: translateY(0); }
}

/* Background Glowing Blobs */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
  animation: float 20s infinite alternate ease-in-out;
}
.blob-1 { width: 400px; height: 400px; top: -100px; left: -100px; }
.blob-2 { width: 350px; height: 350px; bottom: -50px; right: 20%; animation-delay: -5s; }
.blob-3 { width: 300px; height: 300px; top: 20%; right: 10%; animation-delay: -10s; }

@keyframes float {
  from { transform: translate(0, 0) scale(1); }
  to { transform: translate(40px, 60px) scale(1.1); }
}

.modern-gradient-text {
  background: linear-gradient(to right, #1e40af, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.grid-pattern {
  background-image: radial-gradient(circle, #3b82f6 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Slow rotation for the globe container ring */
.animate-spin-slow { animation: spin 40s linear infinite; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

.typing-cursor {
  color: #2563eb;
  animation: blink 1s infinite;
}
@keyframes blink { 50% { opacity: 0; } }
</style>
