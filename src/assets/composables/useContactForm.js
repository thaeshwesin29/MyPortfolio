import { ref, reactive } from 'vue'

export function useContactForm() {
  const loading = ref(false)
  const success = ref(false)
  const error = ref('')

  const form = reactive({
    name: '',
    email: '',
    message: ''
  })

  const validateForm = () => {
    if (!form.name.trim()) {
      error.value = 'Name is required'
      return false
    }
    if (!form.email.trim() || !isValidEmail(form.email)) {
      error.value = 'Valid email is required'
      return false
    }
    if (!form.message.trim()) {
      error.value = 'Message is required'
      return false
    }
    return true
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const submitForm = async () => {
    error.value = ''

    if (!validateForm()) {
      return
    }

    loading.value = true

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      success.value = true
      form.name = ''
      form.email = ''
      form.message = ''

      setTimeout(() => {
        success.value = false
      }, 3000)
    } catch (err) {
      error.value = 'Failed to send message. Please try again.'
    } finally {
      loading.value = false
    }
  }

  return {
    form,
    loading,
    success,
    error,
    submitForm
  }
}
