import React, { useState } from 'react';
import { Clock, BookOpen, Compass, Award, Download } from 'lucide-react';
import { JEDA_CONFIG } from '../config';

export default function TimeCalculator() {
  const [dailyHours, setDailyHours] = useState(3);

  // Calculations
  const hoursPerMonth = Math.round(dailyHours * 30);
  const hoursPerYear = Math.round(dailyHours * 365);
  const daysPerYear = Math.round(hoursPerYear / 24);

  // Realistic analogies
  const booksPerYear = Math.round(hoursPerYear / 6); // ~6 hours per book
  const savedDaysWithJeda = Math.round(daysPerYear * 0.7); // Saving 70% of mindless doomscrolling

  return (
    <section id="kalkulator" className="py-20 md:py-28 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-[#FAF7F2] border border-[#232622]/10 rounded-3xl p-6 sm:p-10 md:p-14 shadow-xs">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#4A6B3D] font-bold">
            [ REALITA WAKTU ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#232622] tracking-tight mt-2 mb-3 font-serif-editorial">
            Hitung Berapa Banyak Waktu Hidupmu yang "Dicuri" Doomscrolling
          </h2>
          <p className="text-sm sm:text-base text-[#5A5F56] leading-relaxed">
            Kita sering merasa tidak punya waktu untuk berolahraga, belajar hal baru, atau tidur cukup. Coba geser waktu harianmu di bawah ini:
          </p>
        </div>

        {/* Slider Input */}
        <div className="mt-10 p-6 sm:p-8 bg-white rounded-2xl border border-[#232622]/8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <label htmlFor="daily-hours" className="text-sm font-bold text-[#232622]">
              Estimasi Penggunaan Media Sosial & HP per Hari:
            </label>
            <div className="inline-flex items-baseline gap-1.5 bg-[#87A878]/15 px-3 py-1 rounded-xl">
              <span className="text-2xl font-bold text-[#4A6B3D]">{dailyHours}</span>
              <span className="text-xs font-semibold text-[#3E5C33]">Jam / Hari</span>
            </div>
          </div>

          <input
            id="daily-hours"
            type="range"
            min="1"
            max="8"
            step="0.5"
            value={dailyHours}
            onChange={(e) => setDailyHours(parseFloat(e.target.value))}
            className="w-full h-2.5 bg-[#F5F0E8] rounded-lg cursor-pointer"
          />

          <div className="flex justify-between text-xs text-[#5A5F56] mt-2 font-mono">
            <span>1 Jam (Sedikit)</span>
            <span>3 Jam (Rata-rata)</span>
            <span>5 Jam (Tinggi)</span>
            <span>8 Jam (Ekstrem)</span>
          </div>
        </div>

        {/* Calculation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="p-5 bg-white rounded-2xl border border-[#232622]/8">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#5A5F56] mb-1">
              <Clock className="w-4 h-4 text-[#D9822B]" />
              <span>Waktu per Bulan</span>
            </div>
            <div className="text-3xl font-bold text-[#232622] font-mono mt-1">
              {hoursPerMonth} <span className="text-sm font-sans font-normal text-[#5A5F56]">Jam</span>
            </div>
            <p className="text-xs text-[#5A5F56] mt-2 leading-relaxed">
              Setara dengan waktu kerja penuh selama hampir 2 minggu.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-[#232622]/8">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#5A5F56] mb-1">
              <Compass className="w-4 h-4 text-red-500" />
              <span>Hari Penuh per Tahun</span>
            </div>
            <div className="text-3xl font-bold text-red-600 font-mono mt-1">
              {daysPerYear} <span className="text-sm font-sans font-normal text-[#5A5F56]">Hari</span>
            </div>
            <p className="text-xs text-[#5A5F56] mt-2 leading-relaxed">
              Hari 24 jam nonstop (tanpa tidur) yang habis hanya menatap kaca layar.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-[#232622]/8">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#5A5F56] mb-1">
              <BookOpen className="w-4 h-4 text-[#4A6B3D]" />
              <span>Buku yang Bisa Dibaca</span>
            </div>
            <div className="text-3xl font-bold text-[#4A6B3D] font-mono mt-1">
              ~{booksPerYear} <span className="text-sm font-sans font-normal text-[#5A5F56]">Buku</span>
            </div>
            <p className="text-xs text-[#5A5F56] mt-2 leading-relaxed">
              Buku yang bisa kamu selesaikan jika waktu tersebut dialihkan.
            </p>
          </div>
        </div>

        {/* Value Proposition Box */}
        <div className="mt-8 p-6 rounded-2xl bg-[#4A6B3D] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-200 text-xs font-semibold">
              <Award className="w-4 h-4" />
              <span>POTENSI PEMULIHAN FOKUS</span>
            </div>
            <h3 className="text-xl font-bold font-serif-editorial">
              Rebut Kembali ~{savedDaysWithJeda} Hari Penuh Setiap Tahun
            </h3>
            <p className="text-xs text-white/80 max-w-xl leading-relaxed">
              Rata-rata pengguna Jeda menghemat 70% waktu doomscrolling mereka hanya dengan menyisipkan jeda kesadaran sebelum membuka aplikasi.
            </p>
          </div>

          <a
            href={JEDA_CONFIG.downloadUrl}
            className="shrink-0 px-6 py-3 rounded-xl bg-white hover:bg-stone-100 text-[#232622] text-xs font-bold transition-all shadow-xs"
          >
            Mulai Ambil Jeda Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
