<template>
  <div
    class="p-6 rounded-2xl shadow-lg border border-gray-300/20 dark:border-gray-700/50
           bg-gray-100 dark:bg-gray-800 hover:scale-105 transition-transform duration-300 cursor-pointer"
  >
    <!-- Project Image/Icon -->
    <div class="h-48 rounded-xl mb-4 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
      <div class="text-5xl">{{ project.icon }}</div>
    </div>

    <!-- Project Info -->
    <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{{ project.title }}</h3>
    <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm">{{ project.description }}</p>

    <!-- Technologies -->
    <div class="flex flex-wrap gap-2 mb-4">
      <span
        v-for="tech in project.technologies"
        :key="tech"
        class="px-3 py-1 text-xs font-medium rounded-full bg-gray-300/50 dark:bg-gray-700/30 text-gray-800 dark:text-gray-200"
      >
        {{ tech }}
      </span>
    </div>

    <!-- Links -->
    <div class="flex gap-4">
      <a :href="project.liveUrl" target="_blank" class="px-4 py-2 bg-gray-700 dark:bg-gray-600 hover:bg-gray-800 dark:hover:bg-gray-500 rounded-lg text-white transition-colors">
        Live Demo
      </a>
      <a :href="project.githubUrl" target="_blank" class="px-4 py-2 border border-gray-400 dark:border-gray-500 hover:border-gray-300 dark:hover:border-gray-400 rounded-lg text-gray-900 dark:text-gray-100 transition-colors">
        GitHub
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: { type: Object, required: true }
  }
}
</script>

<style scoped>
.shadow-lg {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}
</style>
