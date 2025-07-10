// frontend/api/skills.js

export default function handler(req, res) {
  //const lang = req.query.lang || 'id';

  // Data untuk kedua bahasa sama, jadi kita definisikan sekali saja
  const skillsData = [
    { name: 'JavaScript', percentage: 53 },
    { name: 'Vue.js', percentage: 67 },
    { name: 'Node.js', percentage: 55 },
    // ...tambahkan data skill lainnya
  ];

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(skillsData);
}