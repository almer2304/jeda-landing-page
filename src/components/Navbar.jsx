import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Shield, Sparkles } from 'lucide-react';
import { JEDA_CONFIG } from '../config';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Simulator', href: '#simulator' },
    { name: 'Kalkulator', href: '#kalkulator' },
    { name: 'Filosofi', href: '#filosofi' },
    { name: 'Tipe Kunci', href: '#tipe-kunci' },
    { name: 'Fitur', href: '#fitur' },
    { name: 'Komparasi', href: '#komparasi' },
    { name: 'Panduan APK', href: '#panduan' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#232622]/8 shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[#87A878]/20 flex items-center justify-center text-xl shadow-xs group-hover:scale-105 transition-transform">
            🌿
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-[#232622]">Jeda</span>
              <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#87A878]/15 text-[#4A6B3D] font-semibold">
                {JEDA_CONFIG.version}
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#5A5F56] hover:text-[#232622] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={JEDA_CONFIG.downloadUrl}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4A6B3D] hover:bg-[#3B5631] text-white text-sm font-semibold tracking-wide transition-all shadow-xs hover:shadow-md active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Unduh APK</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#232622] hover:bg-[#232622]/5 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#232622]/8 px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#5A5F56] hover:text-[#232622]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={JEDA_CONFIG.downloadUrl}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#4A6B3D] text-white font-semibold text-sm shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Jeda APK ({JEDA_CONFIG.version})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
