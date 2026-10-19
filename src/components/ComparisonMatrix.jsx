import React from 'react';
import { Check, X, Minus } from 'lucide-react';

export default function ComparisonMatrix() {
  const comparisons = [
    {
      feature: "Biaya & Langganan",
      jeda: "100% Gratis & Bebas",
      screenTime: "Gratis (Bawaan HP)",
      paidApps: "$35–$60 / Tahun (Langganan)",
      highlight: true,
    },
    {
      feature: "Mindful Pause (Jeda Bernapas Sadar)",
      jeda: "Ada (Animasi napas + pertanyaan)",
      screenTime: "Tidak Ada (Hanya tutup paksa)",
      paidApps: "Jarang (Hanya blokir keras)",
      highlight: true,
    },
    {
      feature: "Celah Bypass 'Abaikan Batas' 1-Klik",
      jeda: "Ditiadakan (Friction Psychology)",
      screenTime: "Ada (Bisa diabaikan dalam 0.3 detik)",
      paidApps: "Tergantung pengaturan",
      highlight: false,
    },
    {
      feature: "Mode Bodyguard (Anti-Uninstall)",
      jeda: "Ada (Device Admin + Aksesibilitas)",
      screenTime: "Tidak Ada (Mudah dimatikan)",
      paidApps: "Hanya di paket premium",
      highlight: true,
    },
    {
      feature: "Pas Darurat Terukur (Cooling-Off 90s)",
      jeda: "Ada (2 Tiket / Minggu)",
      screenTime: "Tidak Ada (Bebas dispensasi tanpa batas)",
      paidApps: "Tidak Ada (Harus buka gembok total)",
      highlight: false,
    },
    {
      feature: "Tantangan Bareng & Deteksi Buka Paksa",
      jeda: "Ada (Komunitas & Streak)",
      screenTime: "Tidak Ada",
      paidApps: "Jarang",
      highlight: false,
    },
    {
      feature: "Privasi & Pengolahan Data Lokal",
      jeda: "100% Offline di HP Anda",
      screenTime: "Tersinkronisasi Akun Google/Apple",
      paidApps: "Kerap diunggah ke server analitik",
      highlight: true,
    },
    {
      feature: "Iklan & Pop-up Komersial",
      jeda: "Nol Iklan",
      screenTime: "Nol Iklan",
      paidApps: "Kerap ada banner / upsell",
      highlight: false,
    },
  ];

  return (
    <section id="komparasi" className="py-20 md:py-28 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-[#4A6B3D] font-bold">
          [ PERBANDINGAN TRANSPARAN ]
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#232622] mt-2 mb-4 font-serif-editorial">
          Jeda vs Cara-Cara yang Pernah Kamu Coba
        </h2>
        <p className="text-base text-[#5A5F56]">
          Lihat mengapa pendekatan Jeda memberikan hasil jangka panjang yang jauh lebih efektif dan manusiawi.
        </p>
      </div>

      {/* Comparison Table Container */}
      <div className="overflow-x-auto rounded-3xl border border-[#232622]/10 bg-white shadow-xs">
        <table className="w-full text-left border-collapse min-w-[620px]">
          <thead>
            <tr className="border-b border-[#232622]/8 bg-[#FAF7F2]">
              <th className="py-5 px-6 text-sm font-bold text-[#232622] w-2/5">Kriteria & Fitur</th>
              <th className="py-5 px-6 text-sm font-bold text-[#4A6B3D] w-1/5 bg-[#87A878]/10 border-x border-[#87A878]/20">
                🌿 Jeda (Aplikasi Ini)
              </th>
              <th className="py-5 px-6 text-sm font-semibold text-[#5A5F56] w-1/5">Screen Time Bawaan</th>
              <th className="py-5 px-6 text-sm font-semibold text-[#5A5F56] w-1/5">App Blocker Berbayar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#232622]/6 text-xs sm:text-sm">
            {comparisons.map((row, index) => (
              <tr key={row.feature} className={index % 2 === 1 ? 'bg-[#FAF7F2]/40' : 'bg-white'}>
                <td className="py-4 px-6 font-medium text-[#232622]">
                  {row.feature}
                </td>
                <td className="py-4 px-6 font-bold text-[#3E5C33] bg-[#87A878]/8 border-x border-[#87A878]/20">
                  {row.jeda}
                </td>
                <td className="py-4 px-6 text-[#5A5F56]">
                  {row.screenTime}
                </td>
                <td className="py-4 px-6 text-[#5A5F56]">
                  {row.paidApps}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
