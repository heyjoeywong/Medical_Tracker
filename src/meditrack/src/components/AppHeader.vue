<template>
    <ion-header class="ion-no-border">
        <ion-toolbar>
            <ion-img slot="start" src="/resources/logo.png" class="ion-padding app-logo"></ion-img>
            <ion-icon :icon="menuOutline" slot="end" size="large" class="ion-padding"></ion-icon>
        </ion-toolbar>
    </ion-header>
</template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonImg, IonIcon, IonButtons, IonMenuButton } from '@ionic/vue';
import { menuOutline } from 'ionicons/icons';
</script>

<style scoped>
.app-logo {
    width: 100px;
}
</style>