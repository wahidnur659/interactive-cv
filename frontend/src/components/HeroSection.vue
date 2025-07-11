<script setup>
import { ref, onMounted, watch, computed } from 'vue';
// Impor T (translations) dan lang (bahasa) dari store
import { T, lang } from '../store.js';

// --- DI SINI TEMPAT MENGATUR KECEPATAN ---
// Kecepatan untuk "Halo, Saya Wahid Nurrohim."
const greetingTypingSpeed = 100; // Angka lebih besar = lebih lambat

// Kecepatan untuk "Web Developer" yang berulang
const roleTypingSpeed = 100;
const roleErasingSpeed = 100;
const delayBeforeErase = 5000; 

// --- State untuk setiap bagian teks ---
const typedGreeting = ref('');
const typedName = ref('');
const typedRole = ref(''); // State baru untuk role
const showNameCursor = ref(false); // Kursor untuk nama
const showRoleCursor = ref(false); // Kursor untuk role

// Teks sumber diambil dari 'store'
const fullGreeting = computed(() => T.value.hero_greeting + ' ');
const fullName = 'Wahid Nurrohim.';
const fullRole = computed(() => T.value.hero_role);

// --- FUNGSI-FUNGSI ANIMASI ---

// 1. Mengetik "Halo, Saya"
function typeGreeting() {
  let i = 0;
  function type() {
    if (i < fullGreeting.value.length) {
      typedGreeting.value += fullGreeting.value.charAt(i);
      i++;
      setTimeout(type, greetingTypingSpeed);
    } else {
      showNameCursor.value = true;
      typeName(); // Lanjut ke nama
    }
  }
  type();
}

// 2. Mengetik "Wahid Nurrohim."
function typeName() {
  let i = 0;
  function type() {
    if (i < fullName.length) {
      typedName.value += fullName.charAt(i);
      i++;
      setTimeout(type, greetingTypingSpeed);
    } else {
      showNameCursor.value = false; // Sembunyikan kursor nama
      showRoleCursor.value = true; // Tampilkan kursor role
      setTimeout(typeRole, 500); // Jeda sebelum mengetik role
    }
  }
  type();
}

// 3. Mengetik dan menghapus "Web Developer" (looping)
let roleCharIndex = 0;
let isErasingRole = false;
function typeRole() {
  // Pastikan kursor role selalu terlihat selama animasi ini
  showRoleCursor.value = true;

  if (isErasingRole) {
    // Fase Menghapus
    if (typedRole.value.length > 0) {
      typedRole.value = fullRole.value.substring(0, typedRole.value.length - 1);
      setTimeout(typeRole, roleErasingSpeed);
    } else {
      isErasingRole = false;
      roleCharIndex = 0;
      setTimeout(typeRole, roleTypingSpeed);
    }
  } else {
    // Fase Mengetik
    if (roleCharIndex < fullRole.value.length) {
      typedRole.value += fullRole.value.charAt(roleCharIndex);
      roleCharIndex++;
      setTimeout(typeRole, roleTypingSpeed);
    } else {
      isErasingRole = true;
      setTimeout(typeRole, delayBeforeErase);
    }
  }
}

// Fungsi utama untuk mereset dan memulai seluruh animasi
function startAnimation() {
  typedGreeting.value = '';
  typedName.value = '';
  typedRole.value = '';
  showNameCursor.value = false;
  showRoleCursor.value = false;
  roleCharIndex = 0;
  isErasingRole = false;

  // Hapus timeout yang mungkin berjalan untuk mencegah tumpang tindih
  // (Penyederhanaan, untuk kasus kompleks butuh clear timeout yang lebih canggih)
  setTimeout(typeGreeting, 500); // Mulai dari awal
}

// Awasi perubahan bahasa, lalu mulai ulang animasi
watch(lang, startAnimation);

// Mulai animasi pertama kali saat komponen dimuat
onMounted(startAnimation);

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
      
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-1">
        {{ typedGreeting }}<span class="text-orange-500">{{ typedName }}</span><span v-if="showNameCursor" class="blinking-cursor">|</span>
      </h1>
      
      <h2 class="text-2xl font-medium text-gray-600 dark:text-gray-400 mb-6 h-8">
        {{ typedRole }}<span v-if="showRoleCursor" class="blinking-cursor">|</span>
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

<style>
.blinking-cursor {
  font-weight: 500;
  color: #fb923c; /* Warna oranye */
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from, to {
    color: transparent;
  }
  50% {
    color: #fb923c; /* Warna oranye */
  }
}
</style>