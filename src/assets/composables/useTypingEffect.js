import { ref, onMounted } from 'vue'

export function useTypingEffect(text, speed = 100) {
  const displayText = ref('')
  const isComplete = ref(false)

  onMounted(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        displayText.value += text.charAt(index)
        index++
      } else {
        clearInterval(timer)
        isComplete.value = true
      }
    }, speed)
  })

  return { displayText, isComplete }
}
