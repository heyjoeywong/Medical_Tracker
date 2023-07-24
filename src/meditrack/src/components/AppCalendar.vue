<template>
    <div class="calContainer">
        <DatePicker expanded v-model="selectedDate" />
    </div>
</template>

<script setup lang="ts">
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
import { ref } from 'vue';

const selectedDate = ref(new Date());
</script>

<style scoped>
.calContainer {
    margin: 20px;
}
</style>