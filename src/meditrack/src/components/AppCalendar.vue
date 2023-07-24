<template>
    <div class="calContainer">
        <ion-datetime presentation="date"></ion-datetime>
    </div>
</template>

<script setup lang="ts">
import { IonDatetime } from '@ionic/vue';
</script>

<style scoped>
.calContainer {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>