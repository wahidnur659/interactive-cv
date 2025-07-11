// frontend/api/education.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const lang = req.query.lang || 'id'; // Ambil bahasa dari query parameter

  try {
    // Ambil data edukasi dari tabel 'education' berdasarkan bahasa
    const education = await prisma.education.findMany({
      where: {
        language: lang,
      },
      orderBy: { // Contoh: urutkan berdasarkan ID secara descending (terbaru di atas)
        id: 'desc',
      },
    });

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(education);
  } catch (error) {
    console.error('Error fetching education data from database:', error);
    res.status(500).json({ message: 'Gagal mengambil data edukasi.' });
  } finally {
    await prisma.$disconnect();
  }
}
