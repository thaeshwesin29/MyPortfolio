<template>
  <div class="text-center relative z-10">
    <!-- Main heading -->
    <div class="mb-10 animate-fade-in">
      <p
        class="text-emerald-400 text-lg md:text-xl lg:text-2xl font-medium tracking-widest uppercase mb-8"
      >
        Welcome to my Portfolio
      </p>
      <h1 class="font-black mb-8 leading-none tracking-tight">
        <span class="text-white block text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-2"
          >Hi, I'm</span
        >
        <span class="modern-gradient-text block text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
          {{ personalInfo.name }}
        </span>
      </h1>
    </div>

    <!-- Typing effect -->
    <div class="mb-12">
      <p
        class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-slate-300 mb-6 tracking-wide"
      >
        {{ displayText }}<span class="typing-cursor">|</span>
      </p>
      <div
        class="w-32 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"
      ></div>
    </div>

    <!-- Description -->
    <p
      class="text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-400 mb-16 max-w-5xl mx-auto leading-relaxed font-light"
    >
      {{ personalInfo.description }}
    </p>

    <!-- CTA Buttons -->
    <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
      <a
        href="#projects"
        class="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl font-semibold text-base lg:text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
      >
        <span class="relative z-10 flex items-center gap-3">
          View My Work
          <svg
            class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </span>
        <div
          class="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"
        ></div>
      </a>

      <a
        href="#contact"
        class="group px-8 py-4 border-2 border-slate-300 text-slate-300 rounded-2xl font-semibold text-base lg:text-lg backdrop-blur-sm bg-white/5 hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <span class="flex items-center gap-3">
          Let's Connect
          <svg
            class="w-5 h-5 transform group-hover:rotate-12 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            ></path>
          </svg>
        </span>
      </a>
    </div>

    <!-- Tech Stack -->
    <div class="pt-20 border-t border-slate-700/50">
      <p class="text-slate-400 text-sm md:text-base mb-8 tracking-widest uppercase font-medium">
        Technologies I Work With
      </p>
      <div class="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        <div
          v-for="tech in featuredTechs"
          :key="tech.name"
          class="group flex items-center gap-3 px-6 py-3 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105"
        >
          <span class="text-2xl">{{ tech.icon }}</span>
          <span class="text-slate-300 font-medium text-base lg:text-lg">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroContent',
  props: {
    personalInfo: { type: Object, required: true },
    displayText: { type: String, required: true },
    featuredTechs: { type: Array, required: true },
  },
}
</script>
