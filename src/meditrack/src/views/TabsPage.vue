<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="medicalOutline" aria-label="Medication" size="small" />
          <ion-label>Medications</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="calendarClearOutline" aria-label="Overview" size="small" />
          <ion-label>Overview</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="bodyOutline" aria-label="Symptoms" size="small" />
          <ion-label>Symptoms</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { medicalOutline, calendarClearOutline, bodyOutline } from 'ionicons/icons';
</script>

<style scoped></style>
