<template>
    <ion-header class="ion-no-border">
        <ion-toolbar>
            <ion-img slot="start" src="/resources/logo.png" class="ion-padding app-logo"></ion-img>
            <ion-buttons slot="end">
                <ion-button size="large" class="ion-margin" @click="openEnd" expand="full"><ion-icon
                        :icon="menuOutline"></ion-icon></ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonImg, IonIcon, IonButtons, IonButton, menuController, IonMenu, IonTitle, IonContent } from '@ionic/vue';
import { menuOutline } from 'ionicons/icons';

const openEnd = () => {
    menuController.open("app-menu");
}
</script>

<style scoped>
.app-logo {
    width: 90px;
}
</style>