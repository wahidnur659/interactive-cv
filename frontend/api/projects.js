// frontend/api/projects.js

export default function handler(req, res) {
  const lang = req.query.lang || 'id';

  const data_id = [
    { title: 'Portofolio Pribadi', description: 'Deskripsi proyek ID...', image: '/images/Capture.png', tech: ['Vue.js', 'Tailwind CSS'], link: '#' },
    { title: 'Website Toko Sepatu', description: 'Deskripsi proyek ID...', image: '/images/lucien.jpg', tech: ['Node.js', 'Express'], link: '#' },
  ];

  const data_en = [
    { title: 'Personal Portfolio', description: 'Project description EN...', image: '/images/Capture.png', tech: ['Vue.js', 'Tailwind CSS'], link: '#' },
    { title: 'Shoe Store Website', description: 'Project description EN...', image: '/images/lucien.jpg', tech: ['Node.js', 'Express'], link: '#' },
  ];

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(lang === 'en' ? data_en : data_id);
}