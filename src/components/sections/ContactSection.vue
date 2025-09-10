<template>
  <section
    id="contact"
    class="py-20 relative overflow-hidden transition-colors duration-500
           bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
  >
    <!-- Background Shapes & Grid -->
    <div class="absolute inset-0 grid-pattern opacity-5"></div>

    <div
      class="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-gray-300/20 to-gray-400/20 dark:from-gray-600/20 dark:to-gray-700/20 rounded-full animate-pulse-slow"
    ></div>

    <div
      class="absolute bottom-32 right-32 w-40 h-40 bg-gradient-conic from-gray-300/20 via-gray-400/20 to-transparent dark:from-gray-600/20 dark:via-gray-700/20 animate-rotate-slow"
    ></div>

    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-black mb-6 modern-gradient-text">
          Let's Work Together
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-400 mx-auto mb-6 rounded-full"
        ></div>
        <p
          class="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Ready to bring your next project to life? Let's discuss how we can create something
          amazing together.
        </p>
      </div>

      <!-- Contact Grid -->
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-6">
          <div
            class="gradient-glass-effect p-8 rounded-2xl border border-gray-300/20 dark:border-gray-700/30 hover:border-gray-300/40 dark:hover:border-gray-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-gray-300/10 dark:hover:shadow-gray-700/10"
          >
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Get In Touch</h3>
            <div class="space-y-6">
              <ContactItem
                title="Email"
                value="thaeshwesin2000@email.com"
                iconColor="from-blue-500 to-blue-600"
              />
              <ContactItem
                title="LinkedIn"
                value="https://www.linkedin.com/in/thae-shwe-sin-2a6a90368/"
                iconColor="from-blue-600 to-indigo-600"
              />
              <ContactItem
                title="GitHub"
                value="https://github.com/thaeshwesin29"
                iconColor="from-gray-700 to-gray-800"
              />
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div
          class="gradient-glass-effect p-8 rounded-2xl border border-gray-300/20 dark:border-gray-700/30 hover:border-gray-300/40 dark:hover:border-gray-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-gray-300/10 dark:hover:shadow-gray-700/10"
        >
          <ContactForm class="text-gray-900 dark:text-gray-100" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from '@/components/ui/ContactForm.vue'
import ContactItem from '@/components/ui/ContactItem.vue'

export default {
  name: 'ContactSection',
  components: { ContactForm, ContactItem },
}
</script>

<style scoped>
/* Gradient text with better contrast */
.modern-gradient-text {
  background: linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
  line-height: 0.9;
}

/* Dark mode gradient text */
.dark .modern-gradient-text {
  background: linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Grid overlay with better contrast for both modes */
.grid-pattern {
  background-image: linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px);
  background-size: 50px 50px;
}

.dark .grid-pattern {
  background-image: linear-gradient(rgba(71, 85, 105, 0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(71, 85, 105, 0.15) 1px, transparent 1px);
}

/* Glass effect for cards with improved contrast */
.gradient-glass-effect {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(240, 240, 240, 0.05) 100%);
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
}

.gradient-glass-effect:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(240, 240, 240, 0.1) 100%);
}

.dark .gradient-glass-effect {
  background: linear-gradient(135deg, rgba(55, 65, 81, 0.15) 0%, rgba(31, 41, 55, 0.1) 100%);
}

.dark .gradient-glass-effect:hover {
  background: linear-gradient(135deg, rgba(55, 65, 81, 0.25) 0%, rgba(31, 41, 55, 0.15) 100%);
}

/* Animations */
@keyframes rotate-slow {
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.animate-rotate-slow {
  animation: rotate-slow 30s linear infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}
</style>
