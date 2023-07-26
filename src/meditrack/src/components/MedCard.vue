<template>
    <ion-card class="ion-margin ion-padding">
        <ion-card-header>
            <ion-card-title>{{ }}</ion-card-title>
            <ion-card-subtitle>Start Date: {{ }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
            <ion-list lines="none" class="medList ion-no-padding">
                <ion-item>
                    <ion-label>Quantity: {{ }}</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Frequency: {{ }}</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>End Date: {{ }}</ion-label>
                </ion-item>
            </ion-list>
        </ion-card-content>
    </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonLabel } from '@ionic/vue';
</script>

<style scoped>
.medList {
    margin-left: -16px;
}
</style>