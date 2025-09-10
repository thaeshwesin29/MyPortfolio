<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Send Message</h3>

    <!-- Name Field -->
    <div>
      <label for="name" class="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Name *</label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        required
        placeholder="Your full name"
        class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
      />
    </div>

    <!-- Email Field -->
    <div>
      <label for="email" class="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Email *</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        required
        placeholder="your.email@example.com"
        class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
      />
    </div>

    <!-- Subject Field -->
    <div>
      <label for="subject" class="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Subject</label>
      <input
        id="subject"
        v-model="form.subject"
        type="text"
        placeholder="Project inquiry"
        class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
      />
    </div>

    <!-- Message Field -->
    <div>
      <label for="message" class="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Message *</label>
      <textarea
        id="message"
        v-model="form.message"
        required
        rows="5"
        placeholder="Tell me about your project..."
        class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-vertical"
      ></textarea>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      :disabled="isSubmitting"
      class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
    >
      <span v-if="!isSubmitting">Send Message</span>
      <span v-else>Sending...</span>
    </button>

    <!-- Success Message -->
    <div v-if="showSuccess" class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
      <p class="text-sm text-green-700 dark:text-green-300 font-medium">
        Thank you! Your message has been sent successfully.
      </p>
    </div>
  </form>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'ContactForm',
  data() {
    return {
      isSubmitting: false,
      showSuccess: false,
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true;

      try {
        const serviceID = 'service_6rvwhbd';   // EmailJS service ID
        const templateID = 'template_ggm1agb'; // EmailJS template ID
        const publicKey = 'iTSYw4Q2lYAllNs5f'; // EmailJS public key

        // Send email with all required variables
        await emailjs.send(serviceID, templateID, {
          name: this.form.name,
          email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
          time: new Date().toLocaleString()
        }, publicKey);

        this.showSuccess = true;

        // Reset form
        this.form = { name: '', email: '', subject: '', message: '' };

        setTimeout(() => this.showSuccess = false, 5000);

      } catch (error) {
        console.error('EmailJS error:', error);
        alert('Failed to send message. Please try again.');
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>
