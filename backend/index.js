// backend/index.js

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
// Impor data yang sudah terstruktur
import { data_id, data_en } from './data.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// --- API UNTUK MENGIRIM EMAIL (Tidak diubah) ---
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'wahidnur659@gmail.com', // Ganti dengan emailmu
      pass: 'bzar gegm xitl bcyz'   // Ganti dengan App Password
    }
  });
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: 'wahidnur659@gmail.com',
    subject: `Pesan Baru dari website Portofolio dari ${name}`,
    text: `Anda mendapat pesan dari: ${name} (${email})\n\nPesan:\n${message}`
  };
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Pesan berhasil terkirim!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Gagal mengirim pesan.');
  }
});

// --- API ROUTES DENGAN LOGIKA YANG BENAR ---

app.get('/api/education', (req, res) => {
  const lang = req.query.lang || 'id';
  // Kirim data PENDIDIKAN sesuai bahasa
  res.json(lang === 'en' ? data_en.education : data_id.education);
});

app.get('/api/skills', (req, res) => {
  const lang = req.query.lang || 'id';
  // Kirim data SKILL sesuai bahasa
  res.json(lang === 'en' ? data_en.skills : data_id.skills);
});

app.get('/api/projects', (req, res) => {
  const lang = req.query.lang || 'id';
  // Kirim data PROYEK sesuai bahasa
  res.json(lang === 'en' ? data_en.projects : data_id.projects);
});


// Jalankan server
app.listen(PORT, () => {
  console.log(`Backend server berjalan di http://localhost:${PORT}`);
});