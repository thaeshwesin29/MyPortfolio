<template>
  <div>
    <!-- Floating buttons container -->
    <div class="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">

      <!-- Scroll to Top -->
      <button
        v-show="isVisible"
        @click="scrollToTop"
        class="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-transform transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <i class="fas fa-arrow-up"></i>
      </button>

      <!-- Download CV -->
      <a
        href="/files/Thae-Shwe-Sin-CV.pdf"
        download
        class="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg transition-transform transform hover:scale-110"
        aria-label="Download CV"
      >
        <i class="fas fa-download"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollToTop',
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    toggleVisibility() {
      this.isVisible = window.scrollY > 300
    },
  },
  mounted() {
    window.addEventListener('scroll', this.toggleVisibility)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.toggleVisibility)
  },
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
</style>
