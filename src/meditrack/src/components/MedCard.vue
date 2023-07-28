<template>
    <ion-card class="ion-margin ion-padding round-border">
        <ion-card-header>
            <ion-card-title>{{ name }}</ion-card-title>
        </ion-card-header>

        <ion-card-content>
            <ion-list lines="none" class="med-list ion-no-padding">
                <ion-item>
                    <ion-label>Start Date: {{ sDate }}</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Quantity: {{ quantity }}</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label class="ion-text-wrap">Frequency: {{ frequency }}</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>End Date: {{ eDate }}</ion-label>
                </ion-item>
            </ion-list>
        </ion-card-content>
    </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel } from '@ionic/vue';

const props = defineProps(['name', 'sDate', 'quantity', 'frequency', 'eDate'])
</script>

<style scoped>
.med-list {
    margin-left: -16px;
}

.round-border {
    border-radius: 20px;
}
</style>