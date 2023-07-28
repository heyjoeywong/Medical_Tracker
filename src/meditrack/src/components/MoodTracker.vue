<template>
    <ion-content>
        <ion-title class="ion-padding-bottom">Hi, how are you feeling today?</ion-title>

        <ion-card class="ion-margin round-border">
            <form @submit.prevent="logMood">
                <ion-card-subtitle class="ion-padding">Mood Tracker <br> 1 = Bad, 2 = Neutral, 3 = Good</ion-card-subtitle>
                <!-- <ion-grid class="ion-padding" :fixed="true">
                    <ion-row class="ion-justify-content-center">
                        <ion-radio-group v-model="selectedMood">
                            <ion-col><ion-radio value="1">1</ion-radio></ion-col>
                            <ion-col><ion-radio value="2">2</ion-radio></ion-col>
                            <ion-col><ion-radio value="3">3</ion-radio></ion-col>
                        </ion-radio-group>
                    </ion-row>
                </ion-grid> -->

                <ion-list>
                    <ion-radio-group v-model="selectedMood">
                        <ion-item><ion-radio value="1">1</ion-radio></ion-item>
                        <ion-item><ion-radio value="2">2</ion-radio></ion-item>
                        <ion-item><ion-radio value="3">3</ion-radio></ion-item>
                    </ion-radio-group>
                </ion-list>

                <div class="ion-text-center ion-padding-bottom">
                    <ion-button shape="round" color="primary" type="submit">Log Mood</ion-button>
                </div>
            </form>
        </ion-card>

        <MoodHistory />
    </ion-content>
</template>

<script setup lang="ts">
import { IonTitle, IonCard, IonContent, IonGrid, IonRow, IonCol, IonRadioGroup, IonRadio, IonButton, IonCardTitle, IonCardSubtitle, IonList, IonItem } from '@ionic/vue';
import { useStore } from 'vuex';
import { ref } from 'vue';
import MoodHistory from './MoodHistory.vue';

const store = useStore();

const selectedMood = ref(null);

const logMood = () => {
    if (selectedMood.value) {
        const currentDate = new Date().toISOString().split('T')[0];
        store.commit('addOrUpdateMood', { date: currentDate, mood: parseInt(selectedMood.value) });
        selectedMood.value = null;
    }
}
</script>

<style scoped>
.round-border {
    border-radius: 20px;
}
</style>