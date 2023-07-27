<template>
    <div class="calContainer">
        <ion-datetime presentation="date" @ionChange="dateChanged"></ion-datetime>
    </div>
</template>

<script setup lang="ts">
import { IonDatetime } from '@ionic/vue';
import { ref } from 'vue';

const selectedDate = ref('');

const emit = defineEmits();

const dateChanged = (event: any) => {
    selectedDate.value = event.detail.value;
    emit('dateChanged', selectedDate.value);
};
</script>

<style scoped>
.calContainer {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>