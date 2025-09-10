<template>
  <div
    class="group relative p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl text-center border border-emerald-400/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 cursor-pointer"
  >
    <!-- Gradient overlay on hover -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
    ></div>

    <!-- Content -->
    <div class="relative z-10">
      <div class="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
        {{ skill.icon }}
      </div>
      <div class="text-sm font-semibold text-white mb-1">{{ skill.name }}</div>
      <div class="text-xs text-slate-300">{{ skill.level }}%</div>

      <!-- Progress bar -->
      <div class="mt-2 w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
        <div
          class="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transition-all duration-500 ease-out transform group-hover:scale-x-105"
          :style="{ width: skill.level + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillBadge',
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
}
</style>
