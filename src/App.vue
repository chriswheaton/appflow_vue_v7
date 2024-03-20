<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { App } from "@capacitor/app";
import * as LiveUpdates from "@capacitor/live-updates";
import { onMounted } from "vue";
import { Capacitor } from "@capacitor/core";

onMounted(() => {
  initializeApp();
});

const isNativePlatform = () => {
  return Capacitor.isNativePlatform();
};

const initializeApp = async () => {
  if (!isNativePlatform()) {
    return;
  }
  // Register event to fire each time user resumes the app

  App.addListener("resume", async () => {
    if (localStorage.shouldReloadApp === "true") {
      await LiveUpdates.reload();
    } else {
      const result = await LiveUpdates.sync();
      localStorage.shouldReloadApp = result.activeApplicationPathChanged;
    }
  });

  // First sync on app load
  const result = await LiveUpdates.sync();
  localStorage.shouldReloadApp = result.activeApplicationPathChanged;
};
</script>
