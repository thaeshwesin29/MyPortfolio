import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/css/main.css'
import AOS from 'aos' // Import the AOS library
import 'aos/dist/aos.css' // Import the AOS CSS file

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: App }
  ],
  // Optional: Add scroll behavior to ensure smooth scrolling to anchored sections
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

const app = createApp(App)

// Initialize AOS after the app is created
app.use(router).mount('#app')

// This is the correct way to initialize AOS for a Vue 3 app
AOS.init({
  // Optional settings can be added here
  duration: 800,
  once: true,
})
