import React from 'react';
import { XCircle, CheckCircle, ShieldAlert, BrainCircuit, Sparkles, AlertOctagon } from 'lucide-react';

export default function PhilosophySection() {
  return (
    <section id="filosofi" className="py-20 md:py-28 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#4A6B3D] font-bold">
          [ PSIKOLOGI DI BALIK JEDA ]
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#232622] mt-2 mb-4 font-serif-editorial">
          Kenapa Fitur Screen Time di HP-mu Selalu Gagal?
        </h2>
        <p className="text-base text-[#5A5F56] leading-relaxed">
          Bukan kamu yang kurang berdisiplin. Perusahaan teknologi mempekerjakan ribuan psikolog untuk merekayasa algoritma dopamin yang mengeksploitasi refleks otakmu.
        </p>
      </div>

      {/* Comparison Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Why default fails */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F2] border border-red-200/60 flex flex-col justify-between shadow-xs">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold mb-6">
              <XCircle className="w-4 h-4" />
              <span>CARA LAMA (SCREEN TIME BAWAAN HP)</span>
            </div>

            <h3 className="text-2xl font-bold text-[#232622] mb-4 font-serif-editorial">
              Ilusi Kontrol: Celah 1 Klik yang Mudah Dicurangi
            </h3>

            <ul className="space-y-4 text-sm text-[#5A5F56]">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✕</span>
                <span>
                  <strong>Tombol "Abaikan Batas Hari Ini":</strong> Ketika batas habis, Android hanya menampilkan pop-up dengan tombol abaikan yang bisa dipencet dalam 0.3 detik tanpa berpikir.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✕</span>
                <span>
                  <strong>Refleks Tanpa Jeda Bernapas:</strong> Jempolmu langsung membuka aplikasi secara otomatis begitu ada rasa bosan sekilas, tanpa jeda kesadaran.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✕</span>
                <span>
                  <strong>Mudah Di-uninstall Saat Sakaw:</strong> Begitu godaan membuka medsos tinggi, kamu bisa dengan mudah menghapus pembatas dari pengaturan HP.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-red-50 border border-red-100 text-xs text-red-800">
            <strong>Hasil:</strong> Kamu merasa bersalah, merasa gagal, dan siklus doomscrolling berulang setiap hari.
          </div>
        </div>

        {/* The Jeda Method */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#87A878]/30 shadow-md flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#87A878]/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#87A878]/20 text-[#3E5C33] text-xs font-bold mb-6">
              <CheckCircle className="w-4 h-4 text-[#4A6B3D]" />
              <span>METODE JEDA (FRICTION PSYCHOLOGY)</span>
            </div>

            <h3 className="text-2xl font-bold text-[#232622] mb-4 font-serif-editorial">
              Gesekan Sadar: Mengembalikan Kuasa ke Otak Rasional
            </h3>

            <ul className="space-y-4 text-sm text-[#5A5F56]">
              <li className="flex items-start gap-3">
                <span className="text-[#4A6B3D] font-bold text-lg leading-none mt-0.5">✓</span>
                <span>
                  <strong>Mindful Pause:</strong> Ruang 5–10 detik untuk menarik napas dan melihat pertanyaan reflektif. Memutus rantai dopamin otomatis sebelum terjadi.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4A6B3D] font-bold text-lg leading-none mt-0.5">✓</span>
                <span>
                  <strong>2 Tiket Darurat Mingguan (Cooling-Off 90s):</strong> Butuh buka app untuk urusan genting? Jeda memberimu jalan darurat terbatas dengan jeda pendingin agar bukan keputusan impulsif.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4A6B3D] font-bold text-lg leading-none mt-0.5">✓</span>
                <span>
                  <strong>Mode Bodyguard (Device Admin):</strong> Melindungi Jeda dari penghapusan impulsif di Pengaturan HP. Jika kamu memaksa mematikannya, kamu langsung dilempar keluar!
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-[#87A878]/15 border border-[#87A878]/25 text-xs text-[#3E5C33]">
            <strong>Hasil:</strong> Kamu tetap memegang kendali penuh atas waktumu tanpa merasa terbelenggu atau tersiksa.
          </div>
        </div>
      </div>
    </section>
  );
}
