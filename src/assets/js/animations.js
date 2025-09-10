// Animation utilities
export const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
};

export const initScrollAnimations = () => {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelectorAll('.parallax');

    parallax.forEach(element => {
      const speed = element.dataset.speed;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
};

// ==================== src/composables/useTypingEffect.js ====================
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
