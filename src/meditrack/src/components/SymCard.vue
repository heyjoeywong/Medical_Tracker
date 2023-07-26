<template>
    <ion-card class="ion-margin ion-padding">
        <ion-card-header>
            <ion-card-title>{{ date }}</ion-card-title>
            <ion-card-subtitle>{{ title }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>{{ description }}</ion-card-content>
    </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/vue';

const props = defineProps(['date', 'title', 'description']);
</script>