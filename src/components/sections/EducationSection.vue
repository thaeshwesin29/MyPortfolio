<template>
  <section
    id="education"
    class="py-20 relative overflow-hidden transition-colors duration-500
           bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
  >
    <!-- Background overlay -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 grid-pattern opacity-5"></div>
      <div class="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full animate-pulse-slow"></div>
      <div class="absolute bottom-32 right-32 w-40 h-40 bg-gradient-conic from-indigo-500/10 via-purple-500/10 to-transparent animate-rotate-slow"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold modern-gradient-text mb-3">
          Education
        </h2>
        <p class="text-base md:text-lg text-gray-700 dark:text-slate-300 max-w-2xl mx-auto">
          My academic journey and achievements.
        </p>
      </div>

      <!-- Education Timeline -->
      <div class="relative">
        <!-- Vertical Line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 h-full"></div>

        <!-- Education Items -->
        <div class="space-y-16">
          <div
            v-for="(edu, index) in educationList"
            :key="index"
            class="relative flex flex-col md:flex-row items-center"
          >
            <!-- Timeline Dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 border-4 border-gray-50 dark:border-gray-900 shadow-lg z-10"></div>

            <!-- Content Card -->
            <div
              :class="[
                'mt-6 md:mt-0 md:w-1/2 p-8 rounded-2xl shadow-2xl backdrop-blur-sm bg-white/30 dark:bg-white/10 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:scale-105 transition-transform duration-300',
                index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
              ]"
            >
              <h3 class="text-xl font-semibold mb-2 modern-gradient-text">{{ edu.degree }}</h3>
              <p class="text-sm text-gray-700 dark:text-slate-400 mb-2">{{ edu.institution }}</p>
              <p class="text-gray-800 dark:text-gray-300 font-medium">{{ edu.period }}</p>
              <p class="mt-3 leading-relaxed">{{ edu.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EducationSection",
  data() {
    return {
      educationList: [
        {
          degree: "Bachelor of Computer Science",
          institution: "University of Yangon",
          period: "2018 - 2022",
          description: "Focused on software engineering, web development, and algorithms."
        },
        {
          degree: "High School Diploma",
          institution: "Yangon International School",
          period: "2016 - 2018",
          description: "Studied advanced mathematics, physics, and computer basics."
        }
      ]
    };
  }
};
</script>

<style scoped>
.modern-gradient-text {
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Grid overlay */
.grid-pattern {
  background-image: linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Animations */
@keyframes rotate-slow { from{transform:rotate(0)} to{transform:rotate(360deg)} }
@keyframes pulse-slow { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.8;transform:scale(1.05)} }
.animate-rotate-slow { animation: rotate-slow 30s linear infinite; }
.animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
</style>
