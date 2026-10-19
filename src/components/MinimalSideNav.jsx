import React, { useState, useEffect, useRef } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { JEDA_CONFIG } from '../config';

const navItems = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'simulator', label: 'Simulator' },
  { id: 'kalkulator', label: 'Kalkulator' },
  { id: 'filosofi', label: 'Filosofi' },
  { id: 'tipe-kunci', label: 'Tipe Kunci' },
  { id: 'fitur', label: 'Fitur' },
  { id: 'komparasi', label: 'Komparasi' },
  { id: 'panduan', label: 'Panduan APK' },
  { id: 'faq', label: 'FAQ' },
];

export default function MinimalSideNav() {
  const [activeSection, setActiveSection] = useState('beranda');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setHasScrolled(scrollY > 40);

        // Calculate active section based on scroll position
        const scrollPosition = scrollY + window.innerHeight * 0.35;
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

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 40;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* 1. DESKTOP FLOATING SIDEBAR BOX (Dedicated card container with clean frosted glass backdrop) */}
      <aside
        className="hidden xl:flex fixed left-6 2xl:left-10 top-1/2 -translate-y-1/2 z-40 w-48 bg-white/90 backdrop-blur-xl border border-[#232622]/10 rounded-2xl p-3 shadow-xl shadow-[#232622]/5 flex-col pointer-events-auto select-none"
        aria-label="Navigasi Halaman Jeda"
      >
        {/* Box Header: Brand + Version Badge */}
        <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[#232622]/8 px-1">
          <a
            href="#beranda"
            onClick={(e) => scrollToSection(e, 'beranda')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-6 h-6 rounded-lg bg-[#87A878]/20 flex items-center justify-center text-xs group-hover:scale-105 transition-transform">
              🌿
            </div>
            <span className="font-serif font-bold text-xs tracking-wider text-[#232622] group-hover:text-[#4A6B3D] transition-colors">
              JEDA
            </span>
          </a>
          <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#87A878]/15 text-[#4A6B3D] font-bold">
            {JEDA_CONFIG.version}
          </span>
        </div>

        {/* Navigation Items with clean dash indicators */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`group flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl text-xs transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#87A878]/20 text-[#2B4520] font-bold shadow-2xs'
                    : 'text-[#5A5F56] hover:text-[#232622] hover:bg-[#232622]/5 font-medium'
                }`}
              >
                {/* Dash strip indicator */}
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-4 h-[2px] bg-[#4A6B3D]'
                      : 'w-2 h-[1.5px] bg-[#232622]/30 group-hover:w-3.5 group-hover:bg-[#4A6B3D]'
                  }`}
                />

                {/* Section Name */}
                <span className="tracking-normal">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Box Footer: Quick Unduh Button */}
        <div className="pt-2.5 mt-2 border-t border-[#232622]/8 px-1">
          <a
            href={JEDA_CONFIG.downloadUrl}
            className="w-full flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl bg-[#4A6B3D] hover:bg-[#3B5631] text-white text-[11px] font-semibold transition-all shadow-xs hover:shadow-sm active:scale-98"
          >
            <Download className="w-3 h-3" />
            <span>Unduh Jeda</span>
          </a>
        </div>
      </aside>

      {/* 2. TOP FLOATING BRAND & DOWNLOAD BAR */}
      <div
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 pointer-events-none ${
          hasScrolled ? 'py-3.5' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo on top left (shows on mobile, clean branding) */}
          <a
            href="#beranda"
            onClick={(e) => scrollToSection(e, 'beranda')}
            className={`pointer-events-auto flex items-center gap-2.5 group transition-opacity ${
              hasScrolled ? 'opacity-100' : 'opacity-90'
            }`}
          >
            <div className="w-8 h-8 rounded-xl bg-[#87A878]/20 flex items-center justify-center text-lg shadow-xs group-hover:scale-105 transition-transform">
              🌿
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-base tracking-tight text-[#232622]">Jeda</span>
              <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#87A878]/15 text-[#4A6B3D] font-bold">
                {JEDA_CONFIG.version}
              </span>
            </div>
          </a>

          {/* Quick Download Button & Mobile Toggle on Top Right */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <a
              href={JEDA_CONFIG.downloadUrl}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4A6B3D] hover:bg-[#3B5631] text-white text-xs font-semibold tracking-wide transition-all shadow-xs hover:shadow-md active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh APK</span>
            </a>

            {/* Mobile hamburger menu button for smaller screens */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-white/80 backdrop-blur-md border border-[#232622]/10 text-[#232622] hover:bg-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE SLIDE-DOWN DRAWER (Only when user taps menu on small screens) */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[60px] z-50 bg-[#FAF7F2]/95 backdrop-blur-xl border-b border-[#232622]/10 px-6 py-6 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#4A6B3D] font-bold mb-2">
            DAFTAR BAGIAN
          </div>
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`flex items-center gap-3.5 py-2.5 px-3 rounded-xl text-sm transition-colors ${
                    isActive
                      ? 'bg-[#4A6B3D]/10 text-[#4A6B3D] font-bold'
                      : 'text-[#5A5F56] hover:text-[#232622] font-medium'
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
          </div>
        </div>
      )}
    </>
  );
}
