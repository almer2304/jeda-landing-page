# Jeda Landing Page & Web Portal 🌐
> **Situs Showcase & Portal Unduhan Resmi Aplikasi Jeda (MindfulLock).**  
> Didesain dengan estetika modern, tenang, dan interaktif untuk memperkenalkan filosofi digital mindfulness, kalkulator waktu hemat, simulasi interaktif, serta portal unduhan APK rilis Android.

[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Lucide Icons](https://img.shields.io/badge/Icons-Lucide_React-F56565)](https://lucide.dev)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel_Ready-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-blue)](#lisensi)

---

## 🌟 Fitur & Komponen Web

1. **Hero Section & Direct Download**:
   * Headline menarik yang mencerminkan ketenangan digital.
   * Tombol unduh instan yang langsung mengunduh file rilis `jeda.apk`.
   * Indikator kompatibilitas perangkat Android dan ukuran file.
2. **Interactive Simulator**:
   * Menyimulasikan sensasi *mindful friction* sebelum membuka aplikasi media sosial langsung di browser.
3. **Time Calculator**:
   * Kalkulator interaktif yang menghitung estimasi ratusan jam hidup yang dapat diselamatkan setiap tahun dari kecanduan layar.
4. **Perbandingan Filosofi (Comparison Matrix)**:
   * Menjelaskan kontras tajam antara aplikasi pengunci biasa (*punitive blockers*) dengan pendekatan empati Jeda.
5. **Mode Penguncian Mendalam (Lock Modes Showcase)**:
   * Edukasi visual mengenai mode Jadwal, Batas Kuota Harian, dan Fokus Instan.
6. **Panduan Instalasi APK (ApkGuide)**:
   * Tutorial ramah langkah-demi-langkah bagi pengguna baru untuk mengaktifkan izin instalasi dari sumber tidak dikenal di Android.
7. **FAQ Interaktif**:
   * Jawaban atas pertanyaan umum tentang privasi data, izin sistem, dan status offline-first.

---

## 📁 Struktur Proyek

```
D:/jeda-landing-page/
├── web/                             # Aplikasi React + Vite
│   ├── public/                      # Static Assets
│   │   └── jeda.apk                 # File Rilis Android Siap Download
│   ├── src/
│   │   ├── components/              # Komponen Modular UI
│   │   │   ├── Navbar.jsx           # Navigasi responsif (Desktop & Mobile Burger)
│   │   │   ├── Hero.jsx             # Hero showcase & call-to-action unduh
│   │   │   ├── PhilosophySection.jsx# Narasi filosofi kesadaran digital
│   │   │   ├── Features.jsx         # Fitur utama Jeda
│   │   │   ├── LockModesSection.jsx # Penjelasan varian penguncian
│   │   │   ├── InteractiveSimulator.jsx # Demo interaktif layar jeda
│   │   │   ├── ComparisonMatrix.jsx # Matriks komparasi Jeda vs Blocker lain
│   │   │   ├── TimeCalculator.jsx   # Kalkulator waktu hemat tahunan
│   │   │   ├── ApkGuide.jsx         # Panduan instalasi APK Android
│   │   │   ├── Faq.jsx              # Akordeon pertanyaan umum
│   │   │   └── Footer.jsx           # Footer & tautan komunitas
│   │   ├── App.jsx                  # Main Layout & Section Assembler
│   │   ├── main.jsx                 # React DOM Root
│   │   └── index.css                # Konfigurasi Tailwind CSS v4
│   ├── package.json                 # Dependensi Frontend
│   ├── vercel.json                  # Konfigurasi Deployment Vercel (SPA Rewrites)
│   └── vite.config.js               # Konfigurasi Bundler Vite
└── README.md                        # Dokumentasi Proyek
```

---

## 🛠️ Menjalankan di Komputer Lokal

### 1. Prasyarat
* **Node.js** versi 18.0.0 atau lebih baru
* **npm** atau **pnpm** / **yarn**

### 2. Langkah Menjalankan

1. **Masuk ke folder `web`**:
   ```bash
   cd D:/jeda-landing-page/web
   ```

2. **Pasang seluruh dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan local development server**:
   ```bash
   npm run dev
   ```
   Buka browser pada alamat yang muncul (biasanya `http://localhost:5173`).

4. **Kompilasi untuk Produksi**:
   ```bash
   npm run build
   ```
   Hasil build siap saji akan dibuat di folder `web/dist/`.

5. **Pratinjau Hasil Build**:
   ```bash
   npm run preview
   ```

---

## 🚀 Panduan Deployment (Vercel)

Proyek ini telah dikonfigurasi dengan file `web/vercel.json` yang memuat aturan *Single Page Application (SPA) routing*:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "cleanUrls": true,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Cara Deploy Cepat:
1. Hubungkan repositori GitHub Anda ke **Vercel**.
2. Set **Root Directory** ke `web`.
3. Vercel akan otomatis mengenali Vite dan menjalankan build.
4. Akses publik langsung aktif dan file APK di `/jeda.apk` siap diunduh oleh pengunjung.

---

## 📄 Lisensi
Hak Cipta © 2026 Jeda Team. Dilindungi Lisensi MIT.
