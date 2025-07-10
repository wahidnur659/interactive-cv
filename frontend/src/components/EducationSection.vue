<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
import { T, lang } from '../store.js'; // <-- Impor T

const educationHistory = ref([]);

async function fetchEducation() {
  try {
    // Tambahkan query parameter ?lang=... ke URL API
    const response = await axios.get(`http://localhost:3000/api/education?lang=${lang.value}`);
    educationHistory.value = response.data;
  } catch (error) {
    console.error(error);
  }
}

// Gunakan watch untuk mengawasi perubahan 'lang'
watch(lang, fetchEducation, { immediate: true });
// { immediate: true } akan menjalankan fetchProjects() saat pertama kali komponen dimuat
</script>

<template>
  <section id="pendidikan" class="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <SectionTitle :title="T.title_education" />
      <div class="relative">
        <div class="absolute h-full border-r-2 border-gray-300 dark:border-gray-600" style="left: 50%;"></div>
        
        <div v-for="(edu, index) in educationHistory" :key="edu.id" class="mb-8 flex justify-between items-center w-full">
          <div v-if="index % 2 === 0" class="w-full flex">
            <div class="w-1/2 pr-8 text-right">
              <p class="font-semibold text-blue-600 dark:text-blue-400">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100">{{ edu.institution }}</h3>
              <p class="text-gray-600 dark:text-gray-400">{{ edu.major }}</p>
            </div>
            <div class="w-1/2 flex justify-start">
              <div class="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full z-10"></div>
            </div>
          </div>
          <div v-else class="w-full flex">
            <div class="w-1/2 flex justify-end">
              <div class="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full z-10"></div>
            </div>
            <div class="w-1/2 pl-8 text-left">
              <p class="font-semibold text-blue-600 dark:text-blue-400">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100">{{ edu.institution }}</h3>
              <p class="text-gray-600 dark:text-gray-400">{{ edu.major }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>