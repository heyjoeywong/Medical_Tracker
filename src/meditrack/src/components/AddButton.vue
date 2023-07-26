<template>
    <div class="fixed">
        <ion-fab slot="fixed" vertical="bottom" horizontal="center" class="fabMargin">
            <ion-fab-button>
                <ion-icon :icon="addOutline" aria-label="Add"></ion-icon>
            </ion-fab-button>
        </ion-fab>
    </div>
</template>

<script setup lang="ts">
import { IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { addOutline } from 'ionicons/icons';
</script>

<style scoped>
.fixed {
    position: fixed;
    left: 50%;
    bottom: 12px;
    z-index: 99;
}

</style>