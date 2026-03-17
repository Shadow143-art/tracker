import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.shadow143.tracker.v2',
  appName: 'Tracker',
  webDir: 'dist',
  server: {
    url: 'https://shadow143-art.github.io/tracker/',
    cleartext: true,
  },
};

export default config;
