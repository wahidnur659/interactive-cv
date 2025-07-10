<script setup>
import { theme, toggleTheme, lang, toggleLanguage, T } from '../store.js';
</script>

<template>
  <header class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md sticky top-0 z-50 transition-colors duration-300">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      
      <div class="text-2xl font-bold text-gray-800 dark:text-white">
        Wahid Nurrohim
      </div>
      
      <div class="flex items-center space-x-6">
        <ul class="hidden md:flex space-x-6">
          <li><a href="#profil" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors duration-300">{{ T.profil }}</a></li>
          <li><a href="#pendidikan" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors duration-300">{{ T.pendidikan }}</a></li>
          <li><a href="#skill" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors duration-300">{{ T.skill }}</a></li>
          <li><a href="#proyek" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors duration-300">{{ T.proyek }}</a></li>
          <li><a href="#kontak" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors duration-300">{{ T.kontak }}</a></li>
        </ul>

        <div class="flex items-center space-x-4">
          <button @click="toggleTheme" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 p-2 rounded-full focus:outline-none">
            <svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          </button>
          
          <button @click="toggleLanguage" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-bold text-sm border-2 border-gray-400 dark:border-gray-500 w-10 h-10 rounded-full focus:outline-none">
            {{ lang.toUpperCase() }}
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>