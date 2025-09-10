import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const isVisible = ref(false)
  const elementRef = ref(null)

  onMounted(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.value = entry.isIntersecting
      },
      {
        threshold: 0.1
      }
    )

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }

    onUnmounted(() => {
      observer.disconnect()
    })
  })

  return { isVisible, elementRef }
}
