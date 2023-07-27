<template>
  <ion-page>
    <AppHeader />

    <ion-content :fullscreen="true">

      <ion-title size="large" class="ion-padding-top">Calendar</ion-title>

      <AppCalendar @dateChanged="updateSelectedDate" />

      <MoodTracker :selectedDate="selectedDate" />

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonTitle, IonContent } from '@ionic/vue';
import { ref } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppCalendar from '@/components/AppCalendar.vue';
import MoodTracker from '@/components/MoodTracker.vue';

const selectedDate = ref('');

const updateSelectedDate = (date: string) => {
  selectedDate.value = date;
};

console.log('success');
</script>
