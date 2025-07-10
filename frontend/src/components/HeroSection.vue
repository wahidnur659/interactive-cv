<script setup>
// Impor T (translations) dari store
import { T } from '../store.js'; 
</script>

<template>
  <section id="profil" 
    class="bg-teal-50 dark:bg-gray-900 transition-colors duration-300 container mx-auto px-6 flex flex-col md:flex-row items-center min-h-screen"
  >
    <div class="md:w-1/2 w-full self-stretch mb-10 md:mb-0 animate-slidein-left">
      <img src="/images/pp.jpg" alt="Foto Profil" class="w-full h-full object-cover">
    </div>

    <div class="md:w-1/2 md:pl-16 animate-slide-in-right">
      <p class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
        {{ T.hero_kicker }}
      </p>      
      <h1 class="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-1">
        {{ T.hero_greeting }} <span class="text-orange-500">{{ 'Wahid Nurrohim.' }}</span>
      </h1>
      <h2 class="text-2xl font-medium text-gray-600 dark:text-gray-400 mb-6">
        {{ T.hero_role }}
      </h2>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        {{ T.hero_description }}
      </p>
      <a href="#kontak" class="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        {{ T.hero_button }}
      </a>
    </div>
  </section>
</template>