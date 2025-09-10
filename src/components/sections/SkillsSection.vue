<template>
<section
  id="skills"
  class="py-20 relative overflow-hidden transition-colors duration-500
         bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  <!-- Background overlay like Hero section -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 grid-pattern opacity-10"></div>

      <!-- Small floating shapes -->
      <div class="absolute top-20 left-20 w-32 h-32 rotate-45 animate-pulse-slow bg-gray-300/20 dark:bg-gray-700/20 rounded-full"></div>
      <div class="absolute bottom-32 right-32 w-40 h-40 bg-gradient-to-br from-gray-300/20 to-gray-400/20 dark:from-gray-700/30 dark:to-gray-800/30 rounded-full animate-bounce-slow"></div>

      <!-- Large soft shapes -->
      <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-conic from-gray-300/10 via-gray-400/10 to-gray-900/10 dark:from-gray-700/20 dark:via-gray-800/20 dark:to-black/20 animate-rotate-slow rounded-full"></div>
      <div class="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-radial from-gray-400/20 to-transparent dark:from-gray-800/30 animate-pulse-slow rounded-full"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-black mb-6 modern-gradient-text">
          <i class="fas fa-laptop-code text-gray-400 mr-3"></i>
          Skills & Technologies
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-500 mx-auto mb-6 rounded-full"></div>
        <p class="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light text-gray-700 dark:text-gray-300">
          A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        <div
          v-for="skill in skills.backend.concat(skills.frontend)"
          :key="skill.name"
          class="flex flex-col items-center justify-center p-6 rounded-xl shadow-lg border border-gray-300/20 dark:border-gray-600/50 bg-gray-100/70 dark:bg-white/10 hover:scale-105 transition-transform duration-300 group cursor-pointer"
        >
          <img :src="skill.icon" :alt="skill.name + ' icon'" class="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
          <span class="font-semibold text-lg text-gray-900 dark:text-gray-100">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skills: {
        backend: [
          { name: 'PHP', icon: '/images/icons/php.svg' },
          { name: 'Laravel', icon: '/images/icons/laravel.png' },
          { name: 'MySQL', icon: '/images/icons/mysql.svg' },
          { name: 'PostgreSQL', icon: '/images/icons/postgresql.svg' },
          { name: 'MongoDB', icon: '/images/icons/mongo.png' },
          { name: 'Redis', icon: '/images/icons/redis.png' },
          { name: 'GraphQL', icon: '/images/icons/graphql.png' },
          { name: 'RabbitMQ', icon: '/images/icons/rabbit.png' },
          { name: 'Docker', icon: '/images/icons/docker.svg' },
          { name: 'GitHub', icon: '/images/icons/github.svg' },
          { name: 'Postman', icon: '/images/icons/getpostman.svg' },
          { name: 'Figma', icon: '/images/icons/figma.svg' },
        ],
        frontend: [
          { name: 'VueJS', icon: '/images/icons/vue.png' },
          { name: 'JavaScript', icon: '/images/icons/javascript.svg' },
          { name: 'TypeScript', icon: '/images/icons/typescript.svg' },
          { name: 'HTML5', icon: '/images/icons/html5.svg' },
          { name: 'CSS3', icon: '/images/icons/css3.svg' },
          { name: 'TailwindCSS', icon: '/images/icons/tailwind-thumb.jpg' },
        ]
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
@keyframes pulse-slow { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.8;transform:scale(1.05)} }
@keyframes bounce-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
@keyframes rotate-slow { from{transform:rotate(0)} to{transform:rotate(360deg)} }
.animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
.animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
.animate-rotate-slow { animation: rotate-slow 40s linear infinite; }
</style>
