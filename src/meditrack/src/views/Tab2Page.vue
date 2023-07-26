<template>
  <ion-page>
    <AppHeader />

    <ion-content :fullscreen="true">

      <ion-title size="large" class="ion-padding-top">Calendar</ion-title>

      <AppCalendar />

      <MoodTracker />

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import AppHeader from '@/components/AppHeader.vue';
import AppCalendar from '@/components/AppCalendar.vue';
import MoodTracker from '@/components/MoodTracker.vue';
</script>
