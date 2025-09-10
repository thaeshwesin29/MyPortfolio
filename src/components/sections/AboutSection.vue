<template>
  <section
    id="about"
    class="relative h-screen overflow-hidden pt-20 transition-colors duration-500
           bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
  >
    <!-- Background floating shapes -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <div class="absolute top-8 left-8 w-20 h-20 rounded-full bg-blue-400/10 dark:bg-indigo-500/10 animate-pulse-slow"></div>
      <div class="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-full animate-bounce-slow"></div>
      <div class="absolute bottom-1/4 left-1/4 w-28 h-28 rotate-12 bg-slate-300/10 dark:bg-slate-700/30 rounded-full animate-spin-slow"></div>
    </div>

    <div class="max-w-5xl mx-auto px-4 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-10">
      <!-- Left: Profile Image -->
      <div class="flex justify-center md:justify-start w-full md:w-1/3">
        <div class="relative w-48 h-48 md:w-56 md:h-56 rounded-md shadow-lg overflow-hidden">
          <img
            loading="lazy"
            draggable="false"
            src="/images/profile.jpg"
            alt="Thae Shwe Sin"
            class="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      <!-- Right: Text Section -->
      <div class="w-full md:w-2/3 space-y-4">
        <!-- About Page Title -->
        <h2 class="modern-gradient-text text-3xl md:text-4xl mb-2 font-extrabold">About Me</h2>
        <p class="text-base md:text-lg leading-relaxed font-semibold text-gray-900 dark:text-gray-100">
          I'm <strong>Thae Shwe Sin</strong><br />
          <span class="text-indigo-400 font-bold text-lg md:text-xl">Full Stack Developer</span>
        </p>
        <p class="text-sm md:text-base leading-relaxed font-medium text-gray-700 dark:text-gray-300">
          I am a passionate Full-Stack Web Developer with
          <strong>over 2 years of experience</strong> in building scalable, user-friendly web applications. I specialize in <strong>Laravel, Vue.js, Blade, and RESTful APIs</strong>, focusing on writing clean and maintainable code.
        </p>
        <p class="text-sm md:text-base leading-relaxed font-medium text-gray-700 dark:text-gray-300">
          I enjoy solving real-world problems, improving my coding skills, and exploring new technologies. I am highly motivated, detail-oriented, and committed to delivering quality work that makes an impact.
        </p>
        <p class="text-sm md:text-base leading-relaxed font-medium text-gray-700 dark:text-gray-300">
          Currently, I am working at <strong>ITVISIONHUB Co., Ltd</strong> in Yangon, Myanmar, contributing to both frontend and backend development on multiple live projects.
        </p>
        <div>
          <a
            href="https://drive.google.com/drive/my-drive"
            target="_blank"
            rel="noopener noreferrer"
            class="btn bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center text-base md:text-lg"
          >
            <span>Resume</span>
            <i class="fas fa-chevron-right ml-3"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped>
/* Gradient text for titles */
.modern-gradient-text {
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
}

/* Animations */
@keyframes pulse-slow { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.8;transform:scale(1.05)} }
@keyframes bounce-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
@keyframes spin-slow { from{transform:rotate(0)} to{transform:rotate(360deg)} }

.animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
.animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
.animate-spin-slow { animation: spin-slow 20s linear infinite; }

/* Button */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
</style>
