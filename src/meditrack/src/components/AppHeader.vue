<template>
    <ion-header class="ion-margin-bottom">
        <ion-toolbar>
            <ion-img src="/resources/logo.png" class="appLogo"></ion-img>
        </ion-toolbar>
    </ion-header>
</template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonTitle, IonImg } from '@ionic/vue';
</script>

<style scoped>
.appLogo {
    width: 80px;
    padding: 8px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>