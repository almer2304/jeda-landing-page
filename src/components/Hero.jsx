import React from 'react';
import { Download, ShieldCheck, WifiOff, HeartHandshake, ArrowDown, Sparkles } from 'lucide-react';
import { JEDA_CONFIG } from '../config';

export default function Hero() {
  return (
    <section id="beranda" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden paper-grain">
      {/* Decorative Warm Ambient Glows (subtle, non-neon) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#87A878]/12 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Subtle Pill Banner */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#87A878]/15 border border-[#87A878]/30 mb-8 animate-in fade-in">
          <span className="w-2 h-2 rounded-full bg-[#4A6B3D] animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-[#3E5C33]">
            Solusi Nyata Melawan Dopamine Loop & Doomscrolling
          </span>
        </div>

        {/* Editorial Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal tracking-tight text-[#232622] leading-[1.12] mb-6 font-serif-editorial">
          Niatnya buka HP cuma mau cek jam, <br className="hidden sm:inline" />
          tahu-tahu <span className="italic font-medium text-[#4A6B3D] underline decoration-[#87A878]/40 decoration-wavy underline-offset-8">45 menit lewat</span> di Reels.
        </h1>

        {/* Grounded Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#5A5F56] leading-relaxed mb-10 font-normal">
          <strong className="text-[#232622] font-semibold">Jeda</strong> bukan sekadar pemblokir biasa. Ini adalah ruang bernapas sadar sebelum refleks jempol mengambil alih harimu — dipersenjatai dengan <span className="text-[#3E5C33] font-medium">Mode Bodyguard Anti-Bypass</span> agar kamu tidak bisa curang saat dorongan kecanduan sedang tinggi.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={JEDA_CONFIG.downloadUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#4A6B3D] hover:bg-[#3B5631] text-white text-base font-semibold tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-5 h-5 text-white/90" />
            <div className="text-left">
              <div className="leading-none text-sm font-bold">Unduh Jeda untuk Android (.APK)</div>
              <div className="text-[11px] font-normal text-white/75 mt-0.5">Versi {JEDA_CONFIG.version} • {JEDA_CONFIG.apkSize} • Gratis</div>
            </div>
          </a>

          <a
            href="#simulator"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-[#F5F0E8] border border-[#232622]/12 text-[#232622] text-sm font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-xs"
          >
            <span>Coba Simulasi Layar Jeda</span>
            <ArrowDown className="w-4 h-4 text-[#5A5F56]" />
          </a>
        </div>

        {/* Real Product Promises (Pill Badges) */}
        <div className="pt-6 border-t border-[#232622]/8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#5A5F56]">
          <div className="flex items-center gap-2">
            <WifiOff className="w-4 h-4 text-[#4A6B3D]" />
            <span className="font-medium text-[#232622]">100% Offline & Privat</span>
            <span className="hidden sm:inline text-gray-400">• Data di HP-mu</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#4A6B3D]" />
            <span className="font-medium text-[#232622]">Anti-Uninstall Bodyguard</span>
            <span className="hidden sm:inline text-gray-400">• Anti-Bypass Pengaturan</span>
          </div>
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-[#4A6B3D]" />
            <span className="font-medium text-[#232622]">Nol Iklan & Bebas Biaya</span>
            <span className="hidden sm:inline text-gray-400">• Tanpa Langganan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
