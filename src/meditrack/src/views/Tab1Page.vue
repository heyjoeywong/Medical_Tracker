<template>
  <ion-page>
    <AppHeader />

    <ion-content :fullscreen="true">

      <ion-title size="large" class="ion-padding-top">Medications</ion-title>

      <MedCard medication="Ibuprofen" />

      <AddButton />

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import AppHeader from '@/components/AppHeader.vue';
import MedCard from '@/components/MedCard.vue';
import AddButton from '@/components/AddButton.vue';
</script>

<style scoped></style>
