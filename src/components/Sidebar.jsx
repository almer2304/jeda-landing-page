import React, { useState, useEffect, useRef } from 'react';
import { Download, Menu, X, Shield, ExternalLink } from 'lucide-react';
import { JEDA_CONFIG, APP_CONFIG } from '../config';

const navItems = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'simulator', label: 'Simulator' },
  { id: 'kalkulator', label: 'Kalkulator Waktu' },
  { id: 'filosofi', label: 'Filosofi Jeda' },
  { id: 'tipe-kunci', label: 'Tipe Penguncian' },
  { id: 'fitur', label: 'Fitur Utama' },
  { id: 'komparasi', label: 'Komparasi' },
  { id: 'panduan', label: 'Panduan APK' },
  { id: 'faq', label: 'Tanya Jawab (FAQ)' },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('beranda');
  const [mobileOpen, setMobileOpen] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 200;

        for (let i = navItems.length - 1; i >= 0; i--) {
          const item = navItems[i];
          const element = document.getElementById(item.id);
          if (element) {
            const top = element.offsetTop;
            if (scrollPosition >= top) {
              setActiveSection(item.id);
              break;
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* 1. DESKTOP DEDICATED SIDEBAR COLUMN (Slim, sleek persistent section on left) */}
      <aside
        className="hidden lg:flex fixed inset-y-0 left-0 w-52 xl:w-56 bg-[#F5F0E8] border-r border-[#232622]/10 z-40 flex-col justify-between py-5 px-3.5 select-none overflow-y-auto"
        aria-label="Navigasi Utama Jeda"
      >
        {/* Top: Brand & Tagline */}
        <div>
          <a
            href="#beranda"
            onClick={(e) => scrollToSection(e, 'beranda')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-xl bg-[#87A878]/25 border border-[#87A878]/30 flex items-center justify-center text-base shadow-2xs group-hover:scale-105 transition-transform">
              🌿
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-lg text-[#232622] tracking-tight group-hover:text-[#4A6B3D] transition-colors">
                  Jeda
                </span>
                <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#87A878]/20 text-[#3E5C33] font-bold">
                  {JEDA_CONFIG.version}
                </span>
              </div>
              <p className="text-[10px] text-[#5A5F56] font-medium leading-none mt-0.5">
                Digital Mindfulness
              </p>
            </div>
          </a>

          <div className="h-[1px] bg-[#232622]/8 my-3.5" />

          {/* Navigation Menu with strip indicator */}
          <div className="text-[9px] font-mono uppercase tracking-widest text-[#4A6B3D] font-bold mb-2 px-1">
            DAFTAR BAGIAN
          </div>
          <nav className="flex flex-col gap-0.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`group flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#87A878]/25 text-[#24391C] font-bold shadow-2xs'
                      : 'text-[#5A5F56] hover:text-[#232622] hover:bg-[#232622]/5'
                  }`}
                >
                  {/* Strip indicator */}
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-3.5 h-[2px] bg-[#4A6B3D]'
                        : 'w-2 h-[1.5px] bg-[#232622]/30 group-hover:w-3 group-hover:bg-[#4A6B3D]'
                    }`}
                  />
                  <span className="tracking-normal truncate text-[11.5px] xl:text-xs">{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom Area: Download APK Button & Privacy Badge */}
        <div className="pt-3 border-t border-[#232622]/8 space-y-2">
          <a
            href={JEDA_CONFIG.downloadUrl}
            className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#4A6B3D] hover:bg-[#3B5631] text-white text-[11px] font-semibold tracking-wide transition-all shadow-xs hover:shadow-md active:scale-98"
          >
            <Download className="w-3 h-3" />
            <span>Unduh Jeda APK</span>
          </a>

          <div className="flex items-center justify-between text-[10px] text-[#5A5F56] px-1">
            <span className="flex items-center gap-1">
              <Shield className="w-2.5 h-2.5 text-[#4A6B3D]" />
              <span>100% On-Device</span>
            </span>
            <a
              href={APP_CONFIG.githubRepo}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#232622] flex items-center gap-1 text-[10px]"
            >
              <span>GitHub</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
          </div>
        </div>
      </aside>

      {/* 2. MOBILE TOP BAR (Shown on screens < lg, equipped with Burger menu icon) */}
      <header className="lg:hidden sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#232622]/10 px-4 py-3 flex items-center justify-between">
        <a
          href="#beranda"
          onClick={(e) => scrollToSection(e, 'beranda')}
          className="flex items-center gap-2"
        >
          <div className="w-7 h-7 rounded-lg bg-[#87A878]/20 flex items-center justify-center text-sm shadow-2xs">
            🌿
          </div>
          <span className="font-serif font-bold text-base text-[#232622]">Jeda</span>
          <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#87A878]/20 text-[#3E5C33] font-bold">
            {JEDA_CONFIG.version}
          </span>
        </a>

        <div className="flex items-center gap-2">
          <a
            href={JEDA_CONFIG.downloadUrl}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#4A6B3D] text-white text-xs font-semibold shadow-2xs active:scale-95 transition-transform"
          >
            <Download className="w-3.5 h-3.5" />
            <span>APK</span>
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-xl bg-white/80 border border-[#232622]/10 text-[#232622] hover:bg-white active:scale-95 transition-all"
            aria-label="Buka Menu Navigasi"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* 3. MOBILE OFFCANVAS DRAWER (Smooth slide-in from left when burger icon is tapped) */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-in Sidebar Panel */}
          <div className="relative w-72 max-w-[80vw] bg-[#FAF7F2] border-r border-[#232622]/10 p-5 flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-[#232622]/8 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#87A878]/25 flex items-center justify-center text-base">
                    🌿
                  </div>
                  <div>
                    <span className="font-serif font-bold text-lg text-[#232622] block leading-tight">
                      Jeda
                    </span>
                    <span className="text-[10px] text-[#5A5F56]">Menu Navigasi</span>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-xl bg-[#232622]/5 text-[#232622] hover:bg-[#232622]/10"
                  aria-label="Tutup Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links with strip indicators */}
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#4A6B3D] font-bold mb-2 px-2">
                DAFTAR BAGIAN
              </div>
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[#87A878]/20 text-[#24391C] font-bold'
                          : 'text-[#5A5F56] hover:text-[#232622] hover:bg-[#232622]/5'
                      }`}
                    >
                      <span
                        className={`block rounded-full ${
                          isActive ? 'w-4 h-[2px] bg-[#4A6B3D]' : 'w-2 h-[1px] bg-[#232622]/30'
                        }`}
                      />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Drawer Bottom */}
            <div className="pt-4 border-t border-[#232622]/8 space-y-2.5">
              <a
                href={JEDA_CONFIG.downloadUrl}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#4A6B3D] text-white text-xs font-semibold shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Unduh Jeda APK</span>
              </a>
              <p className="text-[11px] text-center text-[#5A5F56]/70">
                100% On-Device Privacy • Tanpa Iklan
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
