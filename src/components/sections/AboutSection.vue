<template>
  <section
    id="about"
    class="relative min-h-screen overflow-hidden pt-24 pb-12 transition-colors duration-500
           bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
  >
    <div class="absolute inset-0 pointer-events-none z-0">
      <div class="absolute top-8 left-8 w-20 h-20 rounded-full bg-blue-400/10 dark:bg-indigo-500/10 animate-pulse-slow"></div>
      <div class="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-full animate-bounce-slow"></div>
      <div class="absolute bottom-1/4 left-1/4 w-28 h-28 rotate-12 bg-slate-300/10 dark:bg-slate-700/30 rounded-full animate-spin-slow"></div>
    </div>

    <div class="max-w-6xl mx-auto px-4 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
      <div class="flex justify-center md:justify-start w-full md:w-2/5">
        <div class="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-2xl shadow-2xl overflow-hidden border-4 border-white dark:border-gray-800">
          <img
            loading="lazy"
            draggable="false"
            src="/images/profile.jpg"
            alt="Thae Shwe Sin"
            class="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      </div>

      <div class="w-full md:w-3/5 space-y-6">
        <div class="space-y-2">
          <h2 class="modern-gradient-text text-4xl md:text-5xl font-extrabold tracking-tight">About Me</h2>
          <div class="h-1 w-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
        </div>

        <p class="text-lg md:text-xl leading-relaxed font-semibold text-gray-900 dark:text-gray-100">
          I'm <span class="text-blue-500 dark:text-blue-400">Thae Shwe Sin</span><br />
          <span class="text-indigo-500 dark:text-indigo-400 font-bold text-xl md:text-2xl">Full Stack Developer</span>
        </p>

        <div class="space-y-4 text-base md:text-lg leading-relaxed font-medium text-gray-700 dark:text-gray-300">
          <p>
            I am a passionate Full-Stack Web Developer with
            <strong class="text-gray-900 dark:text-white underline decoration-blue-500/30">over 2 years of experience</strong>
            in building scalable, user-friendly web applications. I specialize in <strong>Laravel, Vue.js, Blade, and RESTful APIs</strong>, focusing on writing clean and maintainable code.
          </p>
          <p>
            I enjoy solving real-world problems, improving my coding skills, and exploring new technologies. I am highly motivated, detail-oriented, and committed to delivering quality work that makes an impact.
          </p>
          <p>
            Currently, I am working at <strong>ITVISIONHUB Co., Ltd</strong> in Yangon, Myanmar, contributing to both frontend and backend development on multiple live projects.
          </p>
        </div>

        <div class="pt-4">
          <a
            href="https://drive.google.com/drive/my-drive"
            target="_blank"
            rel="noopener noreferrer"
            class="btn bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all duration-300 inline-flex items-center text-lg"
          >
            <span>View Resume</span>
            <i class="fas fa-download ml-3"></i>
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
@keyframes bounce-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-15px)} }
@keyframes spin-slow { from{transform:rotate(0)} to{transform:rotate(360deg)} }

.animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
.animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
.animate-spin-slow { animation: spin-slow 25s linear infinite; }

/* Button shadow and hover effects */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
</style>
