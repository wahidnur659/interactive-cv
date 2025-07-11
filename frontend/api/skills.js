// frontend/api/skills.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    // Ambil semua data skill dari tabel 'skill'
    const skills = await prisma.skill.findMany({
      // Anda bisa menambahkan 'orderBy', dll. jika diperlukan
    });

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(skills);
  } catch (error) {
    console.error('Error fetching skills from database:', error);
    res.status(500).json({ message: 'Gagal mengambil data skill.' });
  } finally {
    await prisma.$disconnect();
  }
}
