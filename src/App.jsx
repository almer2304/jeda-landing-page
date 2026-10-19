import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveSimulator from './components/InteractiveSimulator';
import TimeCalculator from './components/TimeCalculator';
import PhilosophySection from './components/PhilosophySection';
import LockModesSection from './components/LockModesSection';
import Features from './components/Features';
import ComparisonMatrix from './components/ComparisonMatrix';
import ApkGuide from './components/ApkGuide';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#232622] font-sans antialiased selection:bg-[#87A878]/30 selection:text-[#232622]">
      {/* Top sticky navigation bar */}
      <Navbar />

      {/* Main page content */}
      <main>
        {/* 1. Hero: Editorial headline, human tone, primary download */}
        <Hero />

        {/* 2. Interactive Simulator: Real tactile mobile phone frame where users can test Jeda */}
        <InteractiveSimulator />

        {/* 3. Time Calculator: Visualizing lost hours & days to doomscrolling */}
        <TimeCalculator />

        {/* 4. Philosophy: Why Default Screen Time Fails & Intentional Friction */}
        <PhilosophySection />

        {/* 5. 3 Tipe Penguncian: Detox Penuh, Jadwal Harian, & Kuota Harian */}
        <LockModesSection />

        {/* 6. Features: Deep dive into the 6 pillars */}
        <Features />

        {/* 7. Comparison: Transparent feature matrix vs standard alternatives */}
        <ComparisonMatrix />

        {/* 7. APK Installation Guide: 3 easy visual steps + Bodyguard note */}
        <ApkGuide />

        {/* 8. FAQ: Honest answers about privacy, permissions, and battery */}
        <Faq />
      </main>

      {/* Footer: Viktor Frankl quote, secondary download, clean links */}
      <Footer />
    </div>
  );
}

export default App;
