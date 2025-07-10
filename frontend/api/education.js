// frontend/api/education.js

export default function handler(req, res) {
  const lang = req.query.lang || 'id';

  const data_id = [
    { id: 1, institution: 'Universitas Amikom Yogyakarta', major: 'Informatika', period: '2023 - Sekarang' },
    { id: 2, institution: 'Sekolah Menengah Kejuruan AL IMAN 1 Banjar Agung', major: 'Teknik Komputer dan Jaringan', period: '2020 - 2023' },
    { id: 3, institution: 'Madrasah Tsanawiyah AL IMAN Banjar Agung', major: '', period: '2017 - 2020' },
    { id: 4, institution: 'Sekolah Dasar Negeri 01 Ringin Sari', major: '', period: '2011 - 2017' }
  ];
  
  const data_en = [
    { id: 1, institution: 'Amikom University Yogyakarta', major: 'Informatics', period: '2023 - Now' },
    { id: 2, institution: 'Vocational School AL IMAN 1 Banjar Agung', major: 'Computer and Network Engineering', period: '2020 - 2023' },
    { id: 3, institution: 'Madrasah Tsanawiyah AL IMAN Banjar Agung', major: '', period: '2017 - 2020' },
    { id: 4, institution: 'State Elementary School 1 Ringin sari', major: '', period: '2011 - 2017' }
  ];
  
  res.setHeader('Access-Control-Allow-Origin', '*'); // Atur CORS
  res.status(200).json(lang === 'en' ? data_en : data_id);
}