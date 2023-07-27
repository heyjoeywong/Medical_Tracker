<template>
    <div class="cal-container">
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
.cal-container {
    margin: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>