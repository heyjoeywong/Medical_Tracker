<template>
    <ion-menu menu-id="app-menu" content-id="main-content" side="end">
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    <ion-img src="/resources/wordmark.png" class="word-mark"></ion-img>
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-list>
                <ion-item>Profile</ion-item>
                <ion-item>Settings</ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>
</template>

<script setup lang="ts">
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonList, IonItem } from '@ionic/vue';
</script>

<style scoped>
.word-mark {
    width: 110px;
}
</style>