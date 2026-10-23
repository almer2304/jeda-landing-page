import React from 'react';
import { Download, ShieldCheck, Settings, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { APP_CONFIG } from '../config';

const steps = [
  {
    number: '01',
    title: 'Unduh File APK',
    desc: 'Klik tombol unduh di bawah atau di bagian atas halaman. File berukuran ~24MB dan 100% bebas dari pelacak pihak ketiga maupun iklan tersembunyi.',
    icon: Download,
    hint: 'Bila browser Anda memberi peringatan file berbahaya, itu adalah pesan standar Android untuk file APK di luar Play Store. Pilih "Tetap Unduh" (Download Anyway).'
  },
  {
    number: '02',
    title: 'Izinkan Instalasi & Play Protect',
    desc: 'Buka file yang baru saja diunduh. Jika muncul konfirmasi keamanan atau Google Play Protect, pilih "Tetap Pasang" (Install Anyway) atau izinkan dari sumber ini.',
    icon: ShieldCheck,
    hint: 'Google Play Protect memindai otomatis file di luar Play Store. Karena Jeda membutuhkan izin Accessibility lokal untuk mendeteksi aplikasi candu, Android memunculkan konfirmasi keamanan ekstra.'
  },
  {
    number: '03',
    title: 'Konfigurasi 3 Izin Utama Jeda',
    desc: 'Saat pertama membuka Jeda, Anda akan dipandu mengaktifkan 3 izin krusial agar penguncian bekerja sempurna tanpa bocor:',
    icon: Settings,
    permissions: [
      {
        name: 'Aksesibilitas (Accessibility Service)',
        purpose: 'Mendeteksi saat aplikasi terlarang dibuka di layar depan secara real-time.'
      },
      {
        name: 'Tampilkan di Atas Aplikasi Lain (Overlay)',
        purpose: 'Menampilkan layar jeda bernapas sebelum jari Anda sempat terseret doomscroll.'
      },
      {
        name: 'Bodyguard (Admin Perangkat)',
        purpose: 'Mencegah refleks emosional menghapus Jeda secara tiba-tiba saat sedang ngidam layar.'
      }
    ]
  }
];

export default function ApkGuide() {
  return (
    <section id="panduan" className="py-24 bg-[#F5F0E8] border-t border-[#E6DEC9]/70 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#87A878]/15 text-[#4A6B3D] text-xs font-semibold tracking-wide uppercase mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Panduan Instalasi Android
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#232622] tracking-tight leading-[1.15] mb-4">
            Pasang Jeda dalam 2 menit. Tanpa ribet.
          </h2>
          <p className="text-base md:text-lg text-[#555C50] font-sans font-light">
            Karena Jeda membutuhkan izin sistem level dalam untuk mengunci refleks dopamin Anda, aplikasi ini didistribusikan langsung dalam format APK yang bersih dan independen.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#E6DEC9] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#87A878]/5 rounded-bl-full pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-3xl font-bold text-[#87A878]/50">
                      {step.number}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-[#F5F0E8] border border-[#E6DEC9] flex items-center justify-center text-[#4A6B3D]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-sans font-bold text-xl text-[#232622] mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-[#555C50] leading-relaxed mb-4">
                    {step.desc}
                  </p>

                  {step.permissions && (
                    <div className="space-y-2.5 my-4 pt-2 border-t border-[#E6DEC9]/60">
                      {step.permissions.map((p, i) => (
                        <div key={i} className="text-xs bg-[#F5F0E8] p-3 rounded-xl border border-[#E6DEC9]/80">
                          <span className="font-semibold text-[#232622] block mb-0.5">{p.name}</span>
                          <span className="text-[#687063] leading-relaxed">{p.purpose}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {step.hint && (
                  <div className="mt-4 pt-4 border-t border-[#E6DEC9]/60 flex items-start gap-2.5 text-xs text-[#687063] leading-normal bg-[#FAF7F2]">
                    <span className="font-bold text-[#87A878]">Tips:</span>
                    <span>{step.hint}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Notice Card regarding Bodyguard & Clean Uninstall */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 md:p-8 border border-[#D9822B]/30 flex flex-col md:flex-row gap-5 items-start">
          <div className="w-12 h-12 rounded-2xl bg-[#D9822B]/10 border border-[#D9822B]/30 flex items-center justify-center shrink-0 text-[#D9822B]">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h4 className="font-serif text-lg md:text-xl font-bold text-[#232622] mb-1.5">
              Catatan Penting Tentang Fitur Bodyguard
            </h4>
            <p className="text-sm text-[#555C50] leading-relaxed mb-3">
              Fitur <strong>Bodyguard</strong> menggunakan izin Device Administrator. Tujuannya adalah menghentikan trik otak Anda yang sering tergoda "hapus app sekarang juga" saat sedang frustrasi dibatasi. Jika Anda mencoba menonaktifkan Device Admin di pengaturan HP secara paksa, sistem Android akan langsung terlempar keluar.
            </p>
            <p className="text-xs md:text-sm text-[#87A878] font-medium bg-[#87A878]/10 p-3 rounded-xl inline-block border border-[#87A878]/20">
              💡 <strong>Ingin mencopot pemasangan?</strong> Sangat mudah: Buka Pengaturan di dalam aplikasi Jeda, pilih tombol <em>"Uninstall Jeda"</em>. Jeda akan mencabut izin secara otomatis dan bersih tanpa merusak sistem perangkat Anda.
            </p>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 text-center">
          <a
            href={APP_CONFIG.apkDownloadUrl}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#4A6B3D] text-[#FAF7F2] font-medium hover:bg-[#3d5932] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-5 h-5" />
            <span>Unduh Jeda APK Sekarang ({APP_CONFIG.apkSize})</span>
            <ArrowRight className="w-4 h-4 text-[#87A878]" />
          </a>
          <p className="text-xs text-[#7B8275] mt-3">
            Kompatibel dengan Android 8.0 Oreo ke atas • Versi rilis terbaru {APP_CONFIG.version}
          </p>
        </div>

      </div>
    </section>
  );
}
