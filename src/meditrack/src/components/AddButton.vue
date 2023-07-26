<template>
    <div>
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
.fabMargin {
    margin-bottom: 60px;
}
</style>