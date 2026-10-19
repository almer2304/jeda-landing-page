import React from 'react';
import { Download, Heart, Shield, Sparkles, ArrowUp } from 'lucide-react';
import { APP_CONFIG } from '../config';

function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="unduh" data-dark-section="true" className="bg-[#232622] text-[#FAF7F2] pt-20 pb-12 relative overflow-hidden">
      {/* Background soft ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#87A878]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Big Closing Banner */}
        <div className="bg-[#2C312B] rounded-3xl p-8 md:p-14 border border-[#3C423B] mb-20 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#87A878]/20 text-[#A2C794] text-xs font-semibold tracking-wide uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Mulai Perjalanan Sadar Anda
            </span>
            <h3 className="font-serif text-3xl md:text-5xl text-[#FAF7F2] tracking-tight leading-[1.15] mb-6">
              Hidup terjadi di dunia nyata, bukan di balik algoritma.
            </h3>
            <p className="text-base md:text-lg text-[#B0B7AB] font-sans font-light mb-8 leading-relaxed">
              Unduh Jeda hari ini, rasakan satu helaan napas sebelum membuka aplikasi candu, dan beri diri Anda ruang untuk memilih apa yang benar-benar bermakna.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={APP_CONFIG.apkDownloadUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#87A878] text-[#1B2418] font-semibold hover:bg-[#97B888] shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                <span>Unduh Jeda APK ({APP_CONFIG.apkSize})</span>
              </a>
              <a
                href={APP_CONFIG.githubRepo}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#373D35] text-[#FAF7F2] font-medium hover:bg-[#434A41] border border-[#4E564C] transition-all cursor-pointer"
              >
                <GithubIcon className="w-5 h-5" />
                <span>Lihat Kode Sumber</span>
              </a>
            </div>
            
            <p className="text-xs text-[#828C7D] mt-4">
              Bebas iklan • 100% On-Device Privacy • Tanpa Registrasi Akun
            </p>
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="max-w-3xl mx-auto text-center mb-16 py-8 border-y border-[#343B33]">
          <blockquote className="font-serif italic text-lg md:text-2xl text-[#D0D6CC] leading-relaxed mb-3">
            "Di antara stimulus dan respon ada sebuah ruang. Di dalam ruang itulah terletak kebebasan dan kekuatan kita untuk memilih."
          </blockquote>
          <cite className="text-xs md:text-sm text-[#87A878] uppercase tracking-wider font-semibold not-italic">
            — Viktor E. Frankl
          </cite>
        </div>

        {/* Middle row: Brand & navigation links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#87A878] flex items-center justify-center text-[#1B2418] font-serif font-bold text-lg">
                J
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF7F2]">
                Jeda
              </span>
            </div>
            <p className="text-sm text-[#9CA596] leading-relaxed max-w-sm font-sans mb-4">
              Aplikasi pendamping digital mindfulness untuk Android yang menghentikan siklus scrolling impulsif dengan jeda bernapas sadar dan pertahanan anti-bypass.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#828C7D]">
              <Shield className="w-4 h-4 text-[#87A878]" />
              <span>Privasi Terjaga: Nol telemetri, nol pelacakan.</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A2C794] mb-4">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-sm text-[#B0B7AB]">
              <li>
                <a href="#simulator" className="hover:text-white transition-colors">
                  Simulator Interaktif
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-white transition-colors">
                  Kalkulator Waktu
                </a>
              </li>
              <li>
                <a href="#filosofi" className="hover:text-white transition-colors">
                  Filosofi Gesekan Sadar
                </a>
              </li>
              <li>
                <a href="#fitur" className="hover:text-white transition-colors">
                  6 Fitur Unggulan
                </a>
              </li>
              <li>
                <a href="#perbandingan" className="hover:text-white transition-colors">
                  Tabel Perbandingan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A2C794] mb-4">
              Unduhan & Sumber Daya
            </h4>
            <ul className="space-y-2.5 text-sm text-[#B0B7AB]">
              <li>
                <a href={APP_CONFIG.apkDownloadUrl} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 text-[#87A878]" />
                  <span>File APK ({APP_CONFIG.version})</span>
                </a>
              </li>
              <li>
                <a href="#cara-install" className="hover:text-white transition-colors">
                  Panduan Pasang Android
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
              <li>
                <a href={APP_CONFIG.githubRepo} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <GithubIcon className="w-3.5 h-3.5 text-[#87A878]" />
                  <span>GitHub Repository</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#343B33] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#828C7D]">
          <div className="flex items-center gap-1">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-[#D9822B] fill-[#D9822B]" />
            <span>untuk manusia yang ingin hadir sepenuhnya di dunia nyata.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
