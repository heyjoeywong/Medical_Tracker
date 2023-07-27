<template>
    <ion-fab slot="fixed" vertical="bottom" horizontal="end" class="ion-margin">
        <ion-fab-button>
            <ion-icon :icon="addOutline" aria-label="Add"></ion-icon>
        </ion-fab-button>
    </ion-fab>
</template>

<script setup lang="ts">
import { IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { addOutline } from 'ionicons/icons';
</script>

<style scoped></style>