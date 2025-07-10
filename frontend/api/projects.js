// frontend/api/projects.js

export default function handler(req, res) {
  const lang = req.query.lang || 'id';

  const data_id = [
    { 
      title: 'Portofolio Pribadi', 
      description: 'Membangun portofolio pribadi dari awal menggunakan Vue 3, Vite, dan Tailwind CSS.',
      image: '/images/Capture.png', // Ganti dengan path gambarmu
      tech: ['Vue.js', 'Tailwind CSS', 'express'],
      link: '#'
    },
    { 
      title: 'Website Toko Sepatu', 
      description: 'Proyek tugas akhir mata kuliah Pemrograman Web, membuat toko online dengan fitur keranjang belanja dan checkout.',
      image: '/images/lucien.jpg', // Ganti dengan path gambarmu
      tech: ['Vue.js', 'Mysql', 'Laravel', 'PHP', 'Node.js'],
      link: '#'
    },
    { 
      title: 'Aplikasi buku elektronik Cendikia', 
      description: 'Proyek Unit Kegiatan Mahasiswa Amikom Computer Club, membuat tempat membaca berupa E-book dengan fitur chat global dan membership.',
      image: '/images/cendikia.jpg', // Ganti dengan path gambarmu
      tech: ['Flutter', 'Firebase'],
      link: 'https://github.com/wahidnur659/cendikia.git'
    }
  ];

  const data_en = [
    { 
      title: 'Personal Portfolio', 
      description: 'Building a personal portfolio from scratch using Vue 3, Vite, and Tailwind CSS.',
      image: '/images/Capture.png',
      tech: ['Vue.js', 'Tailwind CSS', 'express'],
      link: '#'
    },
    { 
      title: 'Shoe Store Website', 
      description: 'Final project for Web Programming course, creating an online store with shopping cart and checkout features.',
      image: '/images/lucien.jpg',
      tech: ['Vue.js', 'Mysql', 'Laravel', 'PHP', 'Node.js'],
      link: '#'
    },
    { 
      title: 'Cendikia E-Book Application', 
      description: 'The Amikom Computer Club Student Activity Unit Project creates a reading place in the form of an e-book with global chat and membership features.',
      image: '/images/cendikia.jpg',
      tech: ['Flutter', 'Firebase'],
      link: 'https://github.com/wahidnur659/cendikia.git'
    }
  ];

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(lang === 'en' ? data_en : data_id);
}