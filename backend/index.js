// backend/index.js

import express from 'express';
import cors from 'cors';

// Import data dari file data.js
import { educationHistory, skills, projects } from './data.js';

const app = express();
const PORT = 3000;

// Gunakan middleware
app.use(cors());
app.use(express.json());

// Buat API Routes
app.get('/api/education', (req, res) => {
  res.json(educationHistory);
});

app.get('/api/skills', (req, res) => {
  res.json(skills);
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Backend server berjalan di http://localhost:${PORT}`);
});