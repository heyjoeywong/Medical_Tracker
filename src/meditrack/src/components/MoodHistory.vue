<template>
    <ion-card class="ion-margin round-border">
        <ion-card-header>
            Mood History
        </ion-card-header>

        <ion-card-content>
            <ion-list class="mood-list">
                <ion-item v-for="mood in moodHistory" :key="mood.date">
                    <ion-label>{{ mood.date }}
                        <p> Mood: {{ mood.mood }}</p>
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-card-content>
    </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardContent, IonList, IonItem, IonLabel } from '@ionic/vue'
import { useStore } from 'vuex';

const store = useStore();

const moodHistory = store.state.moods;
</script>

<style scoped>
.round-border {
    border-radius: 20px;
}

.mood-list {
    margin-left: -16px;
}
</style>