import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.wheaton.test",
  appName: "tech_app_v7",
  webDir: "dist",
  server: {
    androidScheme: "https",
    url: "http://192.168.86.29:8100",
    cleartext: true,
  },
  plugins: {
    LiveUpdates: {
      appId: "6323052c",
      channel: "Production",
      autoUpdateMethod: "background",
      maxVersions: 2,
    },
  },
};

export default config;
