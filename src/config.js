// Konfigurasi Link & Data Rilis Jeda
export const JEDA_CONFIG = {
  appName: "Jeda",
  tagline: "Rebut Kembali Waktumu dari Siklus Doomscrolling",
  version: "v1.0.0",
  releaseDate: "Oktober 2026",
  apkSize: "20.6 MB",
  minAndroid: "Android 8.0 (Oreo) atau lebih baru",
  
  // URL Download APK:
  // Mengarah langsung ke file APK rilis di folder public/
  downloadUrl: "/jeda.apk",
  fallbackDownloadUrl: "#panduan",
  
  githubRepoUrl: "https://github.com/almer2304/Jeda-",
  creatorName: "Tim Jeda",
};

// Alias for convenience across components
export const APP_CONFIG = {
  appName: JEDA_CONFIG.appName,
  version: JEDA_CONFIG.version,
  apkSize: JEDA_CONFIG.apkSize,
  apkDownloadUrl: JEDA_CONFIG.downloadUrl,
  downloadUrl: JEDA_CONFIG.downloadUrl,
  githubRepo: JEDA_CONFIG.githubRepoUrl,
  githubRepoUrl: JEDA_CONFIG.githubRepoUrl,
  minAndroid: JEDA_CONFIG.minAndroid,
};
