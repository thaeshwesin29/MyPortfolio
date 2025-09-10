<template>
  <footer class="bg-gradient-to-r from-gray-100 via-gray-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900
                 text-gray-700 dark:text-slate-300 py-16 transition-colors duration-500">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Main footer content -->
      <div class="grid md:grid-cols-3 gap-12 mb-12">
        <!-- Portfolio Section -->
        <div>
          <h3 class="text-2xl font-bold mb-6 text-blue-600 dark:text-indigo-400">Thae Shwe Sin's Portfolio</h3>
          <p class="text-gray-600 dark:text-slate-400 mb-4 leading-relaxed">
            Thank you for visiting my portfolio. Let's connect and create impactful digital
            experiences together.
          </p>
          <div class="bg-blue-50/80 dark:bg-white/5 backdrop-blur-sm p-4 rounded-lg
                      border border-blue-200/50 dark:border-white/10 mb-8">
            <p class="text-blue-700 dark:text-indigo-300 font-medium flex items-center gap-2">
              <span class="text-xl">🚀</span>
              Keep Rising. Let's connect over live chat!
            </p>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="mt-10 md:mt-0">
          <h3 class="text-2xl font-bold mb-6 text-blue-600 dark:text-indigo-400">Quick Links</h3>
          <ul class="space-y-3">
            <li
              v-for="link in ['home', 'about', 'skills', 'education', 'projects', 'contact']"
              :key="link"
            >
              <a
                :href="`#${link}`"
                class="flex items-center gap-3 text-gray-700 dark:text-slate-300
                       hover:text-blue-600 dark:hover:text-white transition-colors duration-300 group"
              >
                <span
                  class="w-2 h-2 bg-blue-500 dark:bg-indigo-500 rounded-full
                         group-hover:bg-blue-600 dark:group-hover:bg-white transition-colors"
                ></span>
                {{ link.charAt(0).toUpperCase() + link.slice(1) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-2xl font-bold mb-6 text-blue-600 dark:text-indigo-400">Contact Info</h3>
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-blue-600 dark:bg-indigo-700 rounded-lg flex items-center justify-center">
                <i class="fas fa-phone text-white text-sm"></i>
              </div>
              <a href="tel:09684426329"
                 class="text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors">
                09684426329
              </a>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-blue-600 dark:bg-indigo-700 rounded-lg flex items-center justify-center">
                <i class="fas fa-envelope text-white text-sm"></i>
              </div>
              <a
                href="mailto:thaeshwesin2000@gmail.com"
                class="text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                thaeshwesin2000@gmail.com
              </a>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-blue-600 dark:bg-indigo-700 rounded-lg flex items-center justify-center">
                <i class="fas fa-map-marker-alt text-white text-sm"></i>
              </div>
              <span class="text-gray-700 dark:text-slate-300">Yangon, Myanmar</span>
            </div>
          </div>

          <!-- Social Media -->
          <div class="mt-6 flex space-x-4">
            <a
              href="https://www.linkedin.com/in/thae-shwe-sin-2a6a90368/"
              class="w-10 h-10 bg-gray-200/50 dark:bg-white/10
                     hover:bg-blue-500 dark:hover:bg-indigo-500
                     rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <i class="fab fa-linkedin text-gray-600 dark:text-white hover:text-white"></i>
            </a>
            <a
              href="https://github.com/thaeshwesin29"
              class="w-10 h-10 bg-gray-200/50 dark:bg-white/10
                     hover:bg-blue-500 dark:hover:bg-indigo-500
                     rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <i class="fab fa-github text-gray-600 dark:text-white hover:text-white"></i>
            </a>
            <a
              href="mailto:thaeshwesin2000@gmail.com"
              class="w-10 h-10 bg-gray-200/50 dark:bg-white/10
                     hover:bg-blue-500 dark:hover:bg-indigo-500
                     rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <i class="fas fa-envelope text-gray-600 dark:text-white hover:text-white"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom section -->
      <div class="border-t border-gray-300/30 dark:border-white/10 pt-8 text-center">
        <p class="text-gray-600 dark:text-slate-400">
          Designed With <span class="text-red-500 dark:text-red-400">❤️</span> By
          <span class="font-semibold text-gray-900 dark:text-white">Thae Shwe Sin</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

/* Enhanced hover effects */
.group:hover .fas,
.group:hover .fab {
  transform: scale(1.1);
  transition: transform 0.2s ease;
}

/* Smooth transitions for all interactive elements */
a, .group {
  transition: all 0.3s ease;
}
</style>
