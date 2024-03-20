<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/home">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/customer">
          <ion-icon aria-hidden="true" :icon="search" />
          <ion-label>Customers</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/job">
          <ion-icon aria-hidden="true" :icon="briefcase" />
          <ion-label>Job</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/account">
          <ion-icon aria-hidden="true" :icon="person" />
          <ion-label>Account</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab5" href="/tabs/more">
          <ion-icon aria-hidden="true" :icon="ellipsisVertical" />
          <ion-label>More</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import {
  briefcase,
  person,
  search,
  home,
  ellipsisVertical,
} from "ionicons/icons";
</script>
