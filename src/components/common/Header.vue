<template>
  <nav class="fixed top-0 w-full z-50 glass-effect bg-white/70 dark:bg-gray-900/70">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          MyPortfolio
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8">
          <a href="#home" class="nav-link">Home</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#education" class="nav-link">Education</a>
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>

        <!-- Actions -->
        <div class="flex items-center space-x-4">
          <!-- Dark Mode Toggle -->
          <button @click="toggleDark" class="text-xl focus:outline-none">
            <span v-if="darkMode" class="text-yellow-400">🌞</span>
            <span v-else class="text-slate-800">🌙</span>
          </button>

          <!-- Mobile Menu -->
          <button @click="toggleMobile" class="md:hidden text-slate-900 dark:text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-show="mobileMenuOpen" class="md:hidden py-4 space-y-2">
        <a href="#home" class="nav-link block">Home</a>
        <a href="#about" class="nav-link block">About</a>
        <a href="#skills" class="nav-link block">Skills</a>
        <a href="#education" class="nav-link block">Education</a>
        <a href="#projects" class="nav-link block">Projects</a>
        <a href="#contact" class="nav-link block">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      mobileMenuOpen: false,
      darkMode: false,
    };
  },
  mounted() {
    // Load preference
    this.darkMode = localStorage.getItem("theme") === "dark";
    document.documentElement.classList.toggle("dark", this.darkMode);
  },
  methods: {
    toggleMobile() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    toggleDark() {
      this.darkMode = !this.darkMode;
      document.documentElement.classList.toggle("dark", this.darkMode);
      localStorage.setItem("theme", this.darkMode ? "dark" : "light");
    },
  },
};
</script>

<style scoped>
/* Reusable nav link styles */
.nav-link {
  @apply text-slate-900 dark:text-slate-200 hover:text-blue-400 transition-colors;
}
</style>
