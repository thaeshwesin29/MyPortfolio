<template>
  <div class="absolute inset-0">
    <!-- Grid pattern -->
    <div class="absolute inset-0 grid-pattern opacity-5"></div>

    <!-- Floating geometric shapes -->
    <div class="absolute top-20 left-20 w-32 h-32 border border-emerald-400/20 rounded-lg rotate-45 animate-pulse-slow"></div>
    <div class="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full animate-bounce-slow"></div>
    <div class="absolute bottom-32 left-32 w-16 h-16 border-2 border-cyan-400/30 rotate-12 animate-spin-slow"></div>

    <!-- Large floating elements -->
    <div class="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-conic from-emerald-400/5 via-cyan-400/5 to-slate-400/5 animate-rotate-slow"></div>
    <div class="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-radial from-cyan-400/10 to-transparent animate-pulse-slow"></div>
  </div>
</template>

<script>
export default {
  name: 'HeroBackground'
}
</script>
