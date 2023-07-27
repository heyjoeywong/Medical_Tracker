<template>
  <ion-page>
    <AppHeader />

    <ion-content :fullscreen="true">

      <ion-title size="large" class="ion-padding-top">Medications</ion-title>

      <MedCard name="Ibuprofen" sDate="26/7/2023" quantity="30" frequency="1 daily" eDate="26/8/2023" />

      <AddButton @click="showForm = !showForm" />

      <MedCard v-for="(medication, index) in medicationList" :key="index" :name="medication.name"
        :sDate="medication.sDate" :quantity="medication.quantity" :frequency="medication.frequency"
        :eDate="medication.eDate" />

      <ion-card class="ion-margin" v-if="showForm">
        <ion-card-header>
          <ion-card-title>Add New Medication</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-input label="Name" v-model="formData.name" />
          </ion-item>
          <ion-item>
            <ion-input label="Start Date" v-model="formData.sDate" />
          </ion-item>
          <ion-item>
            <ion-textarea label="Quantity" v-model="formData.quantity" />
          </ion-item>
          <ion-item>
            <ion-textarea label="Frequency" v-model="formData.frequency" />
          </ion-item>
          <ion-item>
            <ion-textarea label="End Date" v-model="formData.eDate" />
          </ion-item>
          <div class="ion-text-center ion-padding-top">
            <ion-button slot="end" shape="round" @click="addNewMedication">Add</ion-button>
          </div>
        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonTextarea, IonToolbar, IonButton } from '@ionic/vue';
import { ref, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import AppHeader from '@/components/AppHeader.vue';
import MedCard from '@/components/MedCard.vue';
import AddButton from '@/components/AddButton.vue';

const showForm = ref(false);
const formData = reactive({
  name: '',
  sDate: '',
  quantity: '',
  frequency: '',
  eDate: '',
});

const store = useStore();

const medicationList = computed(() => store.state.medications);

const addNewMedication = () => {
  if (formData.name && formData.sDate && formData.quantity && formData.frequency && formData.eDate) {
    const newMedication = {
      name: formData.name,
      sDate: formData.sDate,
      quantity: formData.quantity,
      frequency: formData.frequency,
      eDate: formData.eDate,
    };

    store.commit('addMedication', newMedication);

    formData.name = '';
    formData.sDate = '';
    formData.quantity = '';
    formData.frequency = '';
    formData.eDate = '';

    // Close the form after submitting
    showForm.value = false;
  }
};
</script>

<style scoped></style>
