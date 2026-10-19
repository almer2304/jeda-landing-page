import React, { useState } from 'react';
import { 
  Zap, 
  CalendarClock, 
  PieChart, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Users,
  Compass,
  AlertCircle
} from 'lucide-react';

export default function LockModesSection() {
  const [activeTab, setActiveTab] = useState('detox'); // 'detox' | 'jadwal' | 'kuota'

  const modes = [
    {
      id: 'detox',
      badge: 'FOKUS RADIKAL',
      title: 'Detox Penuh (Kunci Instan)',
      subtitle: 'Memutus distraksi seketika untuk Deep Work atau pembersihan mental total.',
      icon: <Zap className="w-6 h-6 text-[#4A6B3D]" />,
      accentColor: 'from-[#4A6B3D]/10 to-[#87A878]/5',
      borderColor: 'border-[#4A6B3D]/30',
      badgeBg: 'bg-[#4A6B3D]/15 text-[#3E5C33]',
      tagline: 'Cocok saat kamu butuh 1-24 jam bebas distraksi tanpa celah negosiasi.',
      fungsi: [
        {
          heading: 'Fungsi Utama',
          detail: 'Mengunci aplikasi secara langsung selama rentang waktu yang kamu tentukan (misalnya 2 jam untuk belajar, 4 jam untuk sprint tugas, hingga 24 jam untuk digital detox akhir pekan).'
        },
        {
          heading: 'Tujuan Psikologis',
          detail: 'Mencegah fenomena "buka bentar 1 menit" yang sering kali berujung 45 menit hanyut di algoritma video pendek. Otak mendapat kepastian bahwa aplikasi tidak bisa diakses, menurunkan craving dopamin.'
        },
        {
          heading: 'Kapan Menggunakannya?',
          detail: 'Sesi belajar intensif menjelang ujian, saat bekerja dengan tenggat waktu ketat (Deep Work), atau ketika kamu merasa lelah mental dan ingin rehat sejenak dari kebisingan media sosial.'
        }
      ],
      previewStats: {
        duration: '1 – 24 Jam',
        flexibility: 'Ketat & Tanpa Celah',
        recommendation: 'Belajar, Kerja, Istirahat'
      }
    },
    {
      id: 'jadwal',
      badge: 'RITME HIDUP TERATUR',
      title: 'Jadwal Harian',
      subtitle: 'Membangun batas alami antara jam produktif, istirahat malam, dan waktu senggang.',
      icon: <CalendarClock className="w-6 h-6 text-[#344E40]" />,
      accentColor: 'from-[#344E40]/10 to-[#4A6B3D]/5',
      borderColor: 'border-[#344E40]/30',
      badgeBg: 'bg-[#344E40]/15 text-[#344E40]',
      tagline: 'Jadwal otomatis aktif setiap hari tanpa perlu kamu atur berulang-ulang.',
      fungsi: [
        {
          heading: 'Fungsi Utama',
          detail: 'Mengatur agar aplikasi tertentu terkunci otomatis pada rentang jam tertentu dalam sehari (misalnya jam kerja 08:00–17:00 atau jam tidur malam 22:00–05:00) pada hari-hari yang kamu pilih.'
        },
        {
          heading: 'Tujuan Psikologis',
          detail: 'Membentuk kebiasaan (habit loop) baru. Kamu tidak perlu mengandalkan tekad (willpower) yang mudah lelah di sore atau malam hari, karena proteksi sistem berjalan otomatis sesuai ritme jam biologismu.'
        },
        {
          heading: 'Kapan Menggunakannya?',
          detail: 'Untuk menjaga jam kerja tetap profesional tanpa godaan game/medsos, serta memastikan tidur malam berkualitas tanpa doomscrolling di kasur.'
        }
      ],
      previewStats: {
        duration: 'Otomatis per Jam',
        flexibility: 'Konsisten & Berulang',
        recommendation: 'Jam Kantor & Jam Tidur'
      }
    },
    {
      id: 'kuota',
      badge: 'KENDALI ANGGARAN WAKTU',
      title: 'Kuota Harian',
      subtitle: 'Tetap bisa menikmati hiburan, namun dengan jatah waktu yang terkontrol tegas.',
      icon: <PieChart className="w-6 h-6 text-[#986A28]" />,
      accentColor: 'from-[#986A28]/10 to-[#D9822B]/5',
      borderColor: 'border-[#986A28]/30',
      badgeBg: 'bg-[#986A28]/15 text-[#986A28]',
      tagline: 'Bebas kapan saja dibuka, namun jika jatah menit habis, pintu terkunci rapat.',
      fungsi: [
        {
          heading: 'Fungsi Utama',
          detail: 'Memberikan anggaran waktu harian (misalnya total 30 menit atau 45 menit per hari) untuk aplikasi hiburan. Waktu hanya dihitung saat aplikasi sedang benar-benar kamu gunakan di layar.'
        },
        {
          heading: 'Tujuan Psikologis',
          detail: 'Mengajarkan self-regulation dan mindfulness. Mengetahui jatah waktu terbatas membuatmu hanya membuka konten yang benar-benar penting atau bermakna, bukan scrolling pasif tanpa tujuan.'
        },
        {
          heading: 'Kapan Menggunakannya?',
          detail: 'Saat kamu tidak ingin memutus total aplikasi hiburan (seperti TikTok, Instagram, YouTube, Game), namun ingin membatasi agar tidak melahap berjam-jam waktu berhargamu setiap hari.'
        }
      ],
      previewStats: {
        duration: '15 – 120 Menit/hari',
        flexibility: 'Ada 2 Tiket Darurat Mingguan',
        recommendation: 'Hiburan Santai & Self-Control'
      }
    }
  ];

  const currentMode = modes.find((m) => m.id === activeTab) || modes[0];

  return (
    <section id="tipe-kunci" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#232622]/8 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#4A6B3D] font-bold">
            [ METODE PENGUNCIAN JEDA ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#232622] mt-2 mb-4 font-serif-editorial">
            Pilih Pendekatan yang Sesuai dengan Kebutuhan Fokusmu
          </h2>
          <p className="text-base text-[#5A5F56] leading-relaxed">
            Setiap orang memiliki pola distraksi yang berbeda. Jeda menyediakan 3 instrumen penguncian yang dirancang spesifik dengan pendekatan psikologi perilaku agar kamu memegang kendali penuh atas waktumu.
          </p>
        </div>

        {/* Tab Buttons (3 Modes) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {modes.map((mode) => {
            const isActive = activeTab === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveTab(mode.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-semibold text-sm transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#4A6B3D] text-white border-[#4A6B3D] shadow-md -translate-y-0.5'
                    : 'bg-white text-[#5A5F56] border-[#232622]/10 hover:border-[#4A6B3D]/30 hover:bg-[#F5F0E8]'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-[#4A6B3D]'}>
                  {mode.icon}
                </span>
                <span>{mode.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Mode Card Display */}
        <div className="bg-white rounded-3xl border border-[#232622]/10 p-6 sm:p-8 md:p-10 shadow-xs relative overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`text-[11px] font-mono font-bold tracking-wider px-3 py-1 rounded-full ${currentMode.badgeBg}`}>
                  {currentMode.badge}
                </span>
                <span className="text-xs text-[#5A5F56] font-medium">
                  {currentMode.tagline}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#232622] font-serif-editorial mb-2">
                  {currentMode.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5A5F56] leading-relaxed">
                  {currentMode.subtitle}
                </p>
              </div>

              {/* 3 Detail Blocks */}
              <div className="space-y-4 pt-2">
                {currentMode.fungsi.map((item, idx) => (
                  <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-[#F5F0E8]/60 border border-[#232622]/6">
                    <h4 className="font-bold text-[#232622] text-sm sm:text-base mb-1.5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4A6B3D] shrink-0" />
                      {item.heading}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5A5F56] leading-relaxed pl-6">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Summary & Highlights */}
            <div className="lg:col-span-4 bg-[#FAF7F2] p-6 rounded-2xl border border-[#232622]/8 space-y-5">
              <h4 className="font-bold text-[#232622] text-base font-serif-editorial">
                Ringkasan Karakteristik
              </h4>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center pb-2.5 border-b border-[#232622]/6">
                  <span className="text-[#5A5F56]">Opsi Durasi</span>
                  <span className="font-bold text-[#232622]">{currentMode.previewStats.duration}</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-[#232622]/6">
                  <span className="text-[#5A5F56]">Tingkat Proteksi</span>
                  <span className="font-bold text-[#4A6B3D]">{currentMode.previewStats.flexibility}</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-[#232622]/6">
                  <span className="text-[#5A5F56]">Rekomendasi</span>
                  <span className="font-bold text-[#232622]">{currentMode.previewStats.recommendation}</span>
                </div>
              </div>

              {/* Psychological Reminder */}
              <div className="p-4 rounded-xl bg-white border border-[#232622]/6 text-xs text-[#5A5F56] leading-relaxed space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-[#3E5C33]">
                  <Sparkles className="w-3.5 h-3.5 text-[#4A6B3D]" />
                  <span>Prinsip Calm Technology</span>
                </div>
                <p>
                  Di Jeda, kamu bisa menuliskan <strong>Niat & Target Fokus</strong> (Focus Goal) pada setiap aplikasi yang kamu kunci untuk mengingatkan dirimu mengapa pembatasan ini kamu ambil.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#simulator"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#4A6B3D] hover:bg-[#3B5631] text-white text-xs font-semibold tracking-wide transition-all shadow-xs"
                >
                  <span>Coba di Simulator Virtual</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
