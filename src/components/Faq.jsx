import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Apakah data pribadi, isi layar, atau chat saya dibaca oleh Jeda?',
    a: 'Sama sekali tidak. Jeda hanya membaca satu hal melalui Accessibility Service: nama paket aplikasi yang sedang berada di layar depan (foreground package name, contoh: com.instagram.android). Jeda tidak pernah membaca isi teks, password, pesan chat, maupun foto Anda. Seluruh pemrosesan berjalan 100% lokal di perangkat Anda (on-device) tanpa mengirimkan data apa pun ke server.'
  },
  {
    q: 'Kenapa saya tidak bisa langsung menghapus Jeda lewat Settings HP?',
    a: 'Itulah esensi dari fitur Bodyguard (Admin Perangkat). Otak kita yang sedang kecanduan dopamin sering melakukan trik licik: saat dibatasi, tangan refleks membuka Settings HP untuk "Force Stop" atau "Hapus Aplikasi". Fitur Bodyguard akan memblokir upaya jalan pintas ini. Namun Anda tetap memegang kendali penuh: jika Anda benar-benar ingin mencopotnya, Anda cukup membuka menu Pengaturan di dalam aplikasi Jeda dan menekan tombol "Uninstall Jeda".'
  },
  {
    q: 'Apa bedanya Jeda dengan Digital Wellbeing bawaan Android?',
    a: 'Digital Wellbeing bawaan dirancang dengan celah psikologis: tombol "Abaikan 15 Menit" hanya butuh 1 kali sentuhan tanpa usaha mental. Akibatnya, 90% orang selalu menekan tombol abaikan. Jeda tidak memutus secara brutal, melainkan menghadirkan "Jeda Bernapas Sadar" dan sistem "Emergency Pass" dengan pendinginan 90 detik. Anda harus menunggu dengan sadar sebelum aplikasi dibuka, memutus siklus refleks otomatis.'
  },
  {
    q: 'Bagaimana cara menghapus (uninstall) Jeda secara bersih?',
    a: 'Sangat mudah: buka aplikasi Jeda > masuk ke tab Pengaturan (Settings) > gulir ke bagian paling bawah dan pilih tombol "Uninstall Jeda". Aplikasi akan secara otomatis mencabut hak akses Administrator Perangkat dan memicu dialog pencopotan standar Android secara bersih.'
  },
  {
    q: 'Apakah Jeda memakan baterai yang banyak di latar belakang?',
    a: 'Tidak. Berbeda dengan aplikasi pemblokir murahan yang melakukan polling terus-menerus setiap milidetik, Jeda menggunakan mekanisme sistem Android berbasis event (TYPE_WINDOW_STATE_CHANGED). Artinya, kode Jeda hanya terbangun selama beberapa milidetik ketika Anda berpindah jendela aplikasi, kemudian tidur kembali.'
  },
  {
    q: 'Apa perbedaan antara Detox Penuh, Jadwal Harian, dan Kuota Harian?',
    a: 'Detox Penuh adalah penguncian langsung 1–24 jam tanpa kompromi untuk sesi Deep Work atau belajar intensif. Jadwal Harian mengunci otomatis di jam-jam tertentu (misal jam kerja atau jam tidur) tanpa perlu diatur ulang setiap hari. Sedangkan Kuota Harian memberi Anda jatah menit per hari (misal 30 menit) yang bebas digunakan kapan saja, namun jika habis akan terkunci rapat dengan opsi 2 tiket darurat mingguan.'
  },
  {
    q: 'Apakah teman saya di leaderboard bisa melihat apa yang saya buka di HP?',
    a: 'Tentu tidak. Jeda menjaga privasi dengan ketat. Yang terlihat di Leaderboard hanyalah nama aplikasi yang sengaja Anda kunci, durasi/jadwal, serta komitmen fokus yang Anda tulis sendiri secara sadar. Tidak ada riwayat pencarian, isi chat, maupun aktivitas pribadi lainnya yang dibagikan.'
  },
  {
    q: 'Apakah Jeda gratis? Mengapa tidak ada di Play Store?',
    a: 'Jeda 100% gratis dan bebas iklan selamanya. Alasan didistribusikan via APK mandiri adalah karena kebijakan Google Play Store sangat membatasi penggunaan Accessibility Service untuk aplikasi produktivitas independen, serta untuk memberi Anda kebebasan penuh tanpa ketergantungan pada Google Play Services.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#FAF7F2] border-t border-[#E6DEC9]/70 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#87A878]/15 text-[#4A6B3D] text-xs font-semibold tracking-wide uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Tanya Jawab (FAQ)
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#232622] tracking-tight leading-[1.15] mb-4">
            Semua hal yang perlu Anda ketahui tentang Jeda.
          </h2>
          <p className="text-base md:text-lg text-[#555C50] font-sans font-light">
            Transparansi penuh tentang izin sistem, privasi data, dan cara kerja pertahanan anti-impulsif kami.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#F5F0E8] border-[#87A878]/50 shadow-xs' 
                    : 'bg-[#FAF7F2] border-[#E6DEC9] hover:border-[#87A878]/30'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 focus:outline-hidden cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg md:text-xl font-bold text-[#232622]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#E6DEC9] flex items-center justify-center shrink-0 text-[#4A6B3D] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#87A878]/15' : 'bg-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm md:text-base text-[#555C50] leading-relaxed border-t border-[#E6DEC9]/40 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-14 p-6 rounded-3xl bg-[#F5F0E8] border border-[#E6DEC9] text-center">
          <p className="text-sm text-[#555C50]">
            Punya pertanyaan atau masukan fitur yang belum terjawab?{' '}
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-[#4A6B3D] font-semibold underline underline-offset-4 hover:text-[#3d5932]"
            >
              Kunjungi repositori GitHub Jeda
            </a>{' '}
            atau sampaikan langsung ke tim pengembang kami.
          </p>
        </div>

      </div>
    </section>
  );
}
