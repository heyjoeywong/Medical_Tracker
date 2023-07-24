<template>
  <ion-page>
    <AppHeader />

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Calendar</ion-title>
        </ion-toolbar>
      </ion-header>

      <AppCalendar />
      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import AppHeader from '@/components/AppHeader.vue';
import AppCalendar from '@/components/AppCalendar.vue';
</script>
