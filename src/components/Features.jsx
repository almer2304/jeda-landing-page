import React from 'react';
import { Wind, Lock, Hourglass, Shield, Users, BarChart3, BellRing, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Wind className="w-6 h-6 text-[#4A6B3D]" />,
      badge: "KESADARAN DIRI",
      title: "Mindful Pause & Pernapasan",
      description: "Jeda 5–10 detik dengan animasi pernapasan yang menenangkan sebelum aplikasi pemicu distraksi terbuka. Memberikan waktu bagi otak rasionalmu untuk berpikir sebelum refleks doomscrolling mengambil alih.",
    },
    {
      icon: <Lock className="w-6 h-6 text-[#4A6B3D]" />,
      badge: "3 METODE KONTROL",
      title: "Detox Penuh, Jadwal, & Kuota",
      description: "Tiga opsi fleksibel: Kunci Instan 1–24 jam untuk Deep Work, Jadwal Harian otomatis (jam kerja/tidur), dan Kuota Harian dengan 2 tiket darurat mingguan berpendingin 90 detik.",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#4A6B3D]" />,
      badge: "SISTEM ANTI-BYPASS",
      title: "Bodyguard & Guard Overlay",
      description: "Proteksi tangguh Device Admin agar aplikasi tidak bisa di-uninstall secara impulsif. Jika izin overlay dimatikan, Jeda secara proaktif mengingatkan hingga integritas fokusmu kembali pulih.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#4A6B3D]" />,
      badge: "KOMUNITAS & TRANSPARANSI",
      title: "Leaderboard & Transparansi Kunci",
      description: "Lihat aplikasi apa saja yang sedang dikunci oleh sesama pengguna di Leaderboard. Untuk teman saling terhubung, kamu bisa membaca motivasi fokus dan detail pembatasan mereka untuk saling menguatkan.",
    },
    {
      icon: <BellRing className="w-6 h-6 text-[#4A6B3D]" />,
      badge: "NOTIFIKASI SOSIAL",
      title: "Notifikasi Interaktif ala WhatsApp",
      description: "Notifikasi mengambang yang ramah saat ada teman baru yang mem-follow, ajakan tantangan fokus bersama, hingga persetujuan tantangan secara instan tanpa perlu bolak-balik memeriksa aplikasi.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#4A6B3D]" />,
      badge: "STATISTIK & EDUKASI",
      title: "Analitik Waktu & 50 Aktivitas Positif",
      description: "Bandingkan rata-rata screen time sebelum vs sesudah memakai Jeda pada tiap aplikasi terkunci. Tersedia pula 50 ide aktivitas pengganti yang memperkaya hidup saat aplikasi hiburan sedang dikunci.",
    },
  ];

  return (
    <section id="fitur" className="py-20 md:py-28 bg-[#F5F0E8]/50 border-t border-[#232622]/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#4A6B3D] font-bold">
            [ FITUR UNGGULAN ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#232622] mt-2 mb-4 font-serif-editorial">
            Dirancang Teliti untuk Menjaga Perhatianmu
          </h2>
          <p className="text-base text-[#5A5F56]">
            Setiap fitur di dalam Jeda dibangun bukan untuk membatasi hidupmu, melainkan untuk melindungimu dari jeratan algoritma digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, index) => (
            <div
              key={feat.title}
              className="bg-white p-7 rounded-3xl border border-[#232622]/8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F0E8] flex items-center justify-center">
                    {feat.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#87A878]/15 text-[#3E5C33]">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#232622] mb-2.5 font-serif-editorial">
                  {feat.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5A5F56] leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#232622]/5 flex items-center gap-1.5 text-xs text-[#4A6B3D] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Terintegrasi di v1.0.0</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
