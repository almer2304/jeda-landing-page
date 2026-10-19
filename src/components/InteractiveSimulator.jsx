import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Shield, CheckCircle2, AlertTriangle, ArrowRight, Clock, Ticket } from 'lucide-react';

export default function InteractiveSimulator() {
  const [screenState, setScreenState] = useState('home'); // 'home' | 'overlay' | 'cooldown' | 'unlocked' | 'bypass'
  const [selectedApp, setSelectedApp] = useState({ name: 'Instagram', icon: '📸', lockType: 'Mode Fokus Terjadwal' });
  const [cooldownSeconds, setCooldownSeconds] = useState(5); // Simulated fast cooldown for demo
  const [savedCount, setSavedCount] = useState(3);
  const [toastMessage, setToastMessage] = useState(null);

  const apps = [
    { name: 'Instagram', icon: '📸', locked: true, lockType: 'Fokus Siang (s/d 17:00)', quota: false },
    { name: 'TikTok', icon: '🎵', locked: true, lockType: 'Batas Kuota 30m Habis', quota: true },
    { name: 'YouTube', icon: '▶️', locked: true, lockType: 'Kunci Terjadwal', quota: false },
    { name: 'Catatan', icon: '📝', locked: false, lockType: 'Aplikasi Produktif', quota: false },
  ];

  const handleAppClick = (app) => {
    if (app.locked) {
      setSelectedApp(app);
      setScreenState('overlay');
      setToastMessage(null);
    } else {
      showToast('Aplikasi produktif tidak terkunci.');
    }
  };

  const handleHomeReturn = () => {
    setScreenState('home');
    setSavedCount((prev) => prev + 1);
    showToast('🌱 Pilihan bijak! Kamu berhasil menahan dorongan impulsif (+15m terselamatkan).');
  };

  const handleEmergencyPass = () => {
    setScreenState('cooldown');
    setCooldownSeconds(5);
  };

  useEffect(() => {
    let timer;
    if (screenState === 'cooldown' && cooldownSeconds > 0) {
      timer = setTimeout(() => {
        setCooldownSeconds((prev) => prev - 1);
      }, 1000);
    } else if (screenState === 'cooldown' && cooldownSeconds === 0) {
      setScreenState('unlocked');
    }
    return () => clearTimeout(timer);
  }, [screenState, cooldownSeconds]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <section id="simulator" className="py-20 md:py-28 bg-[#F5F0E8]/70 border-y border-[#232622]/8 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#4A6B3D] font-bold">
            [ SIMULASI INTERAKTIF LANGSUNG ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#232622] mt-2 mb-4 font-serif-editorial">
            Rasakan Bagaimana Jeda Menghentikan Refleks Jempolmu
          </h2>
          <p className="text-base text-[#5A5F56]">
            Coba klik aplikasi terkunci di dalam layar HP virtual di bawah ini untuk melihat bagaimana transisi <em>Mindful Pause</em> dan <em>Pas Darurat</em> bekerja secara nyata.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Context & Explanations */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="bg-white p-6 rounded-2xl border border-[#232622]/8 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#87A878]/20 flex items-center justify-center text-[#4A6B3D] font-bold text-sm">
                  1
                </div>
                <h3 className="font-bold text-[#232622] text-lg">Jeda Sadar, Bukan Dinding Kaku</h3>
              </div>
              <p className="text-sm text-[#5A5F56] leading-relaxed">
                Alih-alih membuatmu merasa tertekan, Jeda menyajikan animasi napas dan pertanyaan reflektif untuk memutus sirkuit refleks dopamin otomatis di otak.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#232622]/8 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#D9822B]/20 flex items-center justify-center text-[#D9822B] font-bold text-sm">
                  2
                </div>
                <h3 className="font-bold text-[#232622] text-lg">2 Tiket Darurat Mingguan</h3>
              </div>
              <p className="text-sm text-[#5A5F56] leading-relaxed">
                Perlu cek pesan penting darurat? Jeda memberimu 2 tiket darurat 5 menit setiap minggu dengan jeda pendingin 90 detik. Fleksibel, tapi tidak bisa disalahgunakan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#232622]/8 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#4A6B3D]/20 flex items-center justify-center text-[#4A6B3D] font-bold text-sm">
                  3
                </div>
                <h3 className="font-bold text-[#232622] text-lg">Mode Bodyguard Anti-Bypass</h3>
              </div>
              <p className="text-sm text-[#5A5F56] leading-relaxed">
                Mencoba mematikan izin dari Pengaturan Android? Mode Bodyguard langsung melemparmu keluar ke beranda dan mengirim peringatan keras.
              </p>
              <button
                onClick={() => setScreenState('bypass')}
                className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-bold text-[#4A6B3D] hover:underline"
              >
                <span>Simulasikan upaya bypass pengaturan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Mobile Mockup Container */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px] aspect-[9/18.5] bg-[#1E201E] rounded-[44px] p-3 shadow-2xl border-4 border-[#2D302B]">
              {/* Speaker / Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#111] mr-3" />
                <div className="w-8 h-1 rounded-full bg-[#222]" />
              </div>

              {/* Inner Screen */}
              <div className="w-full h-full bg-[#FAF7F2] rounded-[36px] overflow-hidden flex flex-col relative select-none font-sans">
                {/* Status Bar */}
                <div className="pt-6 px-6 pb-2 flex items-center justify-between text-[11px] font-semibold text-[#232622]">
                  <span>14:30</span>
                  <div className="flex items-center gap-1.5">
                    <span>5G</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Toast Notification in Mockup */}
                {toastMessage && (
                  <div className="absolute top-12 left-4 right-4 z-40 bg-[#232622] text-white text-xs p-3 rounded-xl shadow-lg animate-in slide-in-from-top-4 duration-300">
                    {toastMessage}
                  </div>
                )}

                {/* State 1: Simulated Home Screen */}
                {screenState === 'home' && (
                  <div className="flex-1 p-5 flex flex-col justify-between">
                    <div>
                      <div className="mt-4 text-center">
                        <div className="text-3xl font-light text-[#232622]">14:30</div>
                        <div className="text-xs text-[#5A5F56] mt-0.5">Rabu, 14 Oktober</div>
                      </div>

                      <div className="mt-8 bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-[#232622]/8 text-center shadow-xs">
                        <span className="text-[11px] font-bold text-[#4A6B3D]">🌿 Mode Jeda Berjalan</span>
                        <p className="text-[11px] text-[#5A5F56] mt-0.5">
                          Kamu sudah menolak <span className="font-bold text-[#232622]">{savedCount} godaan</span> hari ini.
                        </p>
                      </div>

                      {/* App Icons Grid */}
                      <div className="mt-8">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-center text-[#5A5F56] mb-4">
                          Ketuk aplikasi untuk simulasi:
                        </div>
                        <div className="grid grid-cols-2 gap-3.5">
                          {apps.map((app) => (
                            <button
                              key={app.name}
                              onClick={() => handleAppClick(app)}
                              className="group p-3 rounded-2xl bg-white border border-[#232622]/8 hover:border-[#4A6B3D]/50 transition-all text-left shadow-xs hover:shadow-md active:scale-95 flex flex-col items-center justify-center text-center cursor-pointer"
                            >
                              <div className="text-3xl mb-1.5 group-hover:scale-110 transition-transform">{app.icon}</div>
                              <span className="text-xs font-bold text-[#232622]">{app.name}</span>
                              {app.locked ? (
                                <span className="text-[9px] mt-1 font-semibold text-[#D9822B] bg-[#D9822B]/10 px-2 py-0.5 rounded-full">
                                  🔒 Terkunci
                                </span>
                              ) : (
                                <span className="text-[9px] mt-1 font-semibold text-[#4A6B3D] bg-[#87A878]/15 px-2 py-0.5 rounded-full">
                                  ✓ Bebas
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-[10px] text-gray-400 pb-2">
                      Simulasi Antarmuka Jeda v1.0.0
                    </div>
                  </div>
                )}

                {/* State 2: Simulated Layar Jeda Intersepsi */}
                {screenState === 'overlay' && (
                  <div className="flex-1 bg-[#F5F0E8] p-5 flex flex-col items-center justify-between text-center animate-in fade-in duration-300">
                    <div className="mt-4 flex flex-col items-center">
                      {/* Breathing Circle */}
                      <div className="relative w-28 h-28 flex items-center justify-center my-3">
                        <div className="absolute inset-0 rounded-full bg-[#87A878]/20 animate-breathe" />
                        <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center text-3xl">
                          🌿
                        </div>
                      </div>

                      <span className="text-[11px] font-mono tracking-wider font-bold text-[#4A6B3D] uppercase bg-[#87A878]/15 px-2.5 py-0.5 rounded-full">
                        Mindful Pause • {selectedApp.name}
                      </span>

                      <h4 className="text-xl font-bold text-[#232622] mt-3 font-serif-editorial">
                        Tarik napas sejenak.
                      </h4>

                      <p className="text-xs text-[#5A5F56] mt-2 px-3 leading-relaxed">
                        Kamu sedang berkomitmen fokus. Apakah kamu benar-benar butuh membuka {selectedApp.name} sekarang, atau cuma dorongan impulsif?
                      </p>
                    </div>

                    {/* Action Buttons inside overlay */}
                    <div className="w-full space-y-2.5 mb-2">
                      <button
                        onClick={handleHomeReturn}
                        className="w-full py-3 rounded-xl bg-[#4A6B3D] hover:bg-[#3B5631] text-white text-xs font-bold transition-all shadow-xs active:scale-98"
                      >
                        Kembali ke Beranda 🌱
                      </button>

                      <button
                        onClick={handleEmergencyPass}
                        className="w-full py-2.5 rounded-xl bg-white border border-[#D9822B]/40 text-[#D9822B] text-xs font-semibold hover:bg-[#D9822B]/5 transition-all"
                      >
                        Gunakan Pas Darurat (5 Menit)
                      </button>

                      <div className="text-[10px] text-[#5A5F56]">
                        Sisa kuota pas darurat: <strong>2/2</strong> minggu ini
                      </div>
                    </div>
                  </div>
                )}

                {/* State 3: Cooldown Phase (90s Cooling off simulation) */}
                {screenState === 'cooldown' && (
                  <div className="flex-1 bg-[#F5F0E8] p-5 flex flex-col items-center justify-center text-center animate-in fade-in">
                    <div className="w-16 h-16 rounded-full bg-[#D9822B]/15 flex items-center justify-center text-[#D9822B] mb-4">
                      <Clock className="w-8 h-8 animate-spin" />
                    </div>
                    <span className="text-xs font-bold text-[#D9822B]">PENDINGIN IMPULS AKTIF</span>
                    <h4 className="text-lg font-bold text-[#232622] mt-1 font-serif-editorial">
                      Mohon Tunggu Sebentar...
                    </h4>
                    <p className="text-xs text-[#5A5F56] mt-2 px-4 leading-relaxed">
                      Jeda memberi jeda {cooldownSeconds} detik agar bagian otak logismu berpikir, bukan impuls kecanduan.
                    </p>
                    <div className="text-3xl font-mono font-bold text-[#232622] mt-4">
                      00:0{cooldownSeconds}
                    </div>
                    <button
                      onClick={() => setScreenState('home')}
                      className="mt-6 text-xs text-[#5A5F56] underline"
                    >
                      Batalkan & Tetap Fokus
                    </button>
                  </div>
                )}

                {/* State 4: Unlocked for 5 mins */}
                {screenState === 'unlocked' && (
                  <div className="flex-1 bg-white p-5 flex flex-col items-center justify-center text-center animate-in fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-3">
                      <Ticket className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-[#232622]">Akses Darurat Aktif (5 Menit)</h4>
                    <p className="text-xs text-[#5A5F56] mt-1 px-3">
                      Selesaikan urusan pentingmu. Setelah 5 menit, {selectedApp.name} akan otomatis terkunci kembali.
                    </p>
                    <button
                      onClick={() => setScreenState('home')}
                      className="mt-6 px-5 py-2.5 rounded-xl bg-[#4A6B3D] text-white text-xs font-bold"
                    >
                      Selesai & Kunci Lagi
                    </button>
                  </div>
                )}

                {/* State 5: Simulated Bypass Attempt */}
                {screenState === 'bypass' && (
                  <div className="flex-1 bg-[#232622] text-white p-5 flex flex-col items-center justify-between text-center animate-in fade-in">
                    <div className="mt-8 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center text-3xl mb-3">
                        🛡️
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-wider text-red-400 uppercase bg-red-400/10 px-2 py-0.5 rounded-full">
                        Bodyguard Alert
                      </span>
                      <h4 className="text-base font-bold mt-3 text-white">Upaya Penonaktifan Ditolak!</h4>
                      <p className="text-xs text-white/70 mt-2 px-3 leading-relaxed">
                        Mencoba menonaktifkan Device Admin di pengaturan HP langsung dilempar keluar ke Beranda. Jeda tidak bisa di-uninstall secara impulsif.
                      </p>
                    </div>

                    <button
                      onClick={() => setScreenState('home')}
                      className="w-full py-2.5 rounded-xl bg-white text-[#232622] text-xs font-bold"
                    >
                      Saya Mengerti & Kembali
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Reset Control */}
            <div className="flex items-center gap-3 mt-4 text-xs text-[#5A5F56]">
              <span>Status Simulator: <strong className="text-[#232622] capitalize">{screenState}</strong></span>
              <span>•</span>
              <button
                onClick={() => setScreenState('home')}
                className="inline-flex items-center gap-1 text-[#4A6B3D] hover:underline font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Layar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
