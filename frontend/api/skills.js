// frontend/api/skills.js

export default function handler(req, res) {
  //const lang = req.query.lang || 'id';

  // Data untuk kedua bahasa sama, jadi kita definisikan sekali saja
  const skillsData = [
    { name: 'JavaScript', percentage: 53 },
    { name: "Vue.js", percentage: 67 },
    { name: 'Node.js', percentage: 55 },
    { name: 'HTML & CSS', percentage: 80 },
    { name: 'TailwindCSS', percentage: 75 },
    { name: 'Git & GitHub', percentage: 85 },
    { name: 'Figma', percentage: 78 },
    { name: 'MySQL', percentage: 63 },
    { name: 'Flutter', percentage: 35 },
    { name: 'Firebase', percentage: 30 }
  ];

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(skillsData);
}