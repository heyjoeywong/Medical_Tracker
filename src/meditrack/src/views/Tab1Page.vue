<template>
  <ion-page>
    <AppHeader />

    <ion-content :fullscreen="true">

      <ion-title size="large" class="ion-padding-top">Medications</ion-title>

      <MedCard name="Ibuprofen" sDate="26/7/2023" quantity="30" frequency="1 daily or when necessary" eDate="26/8/2023" />

      <AddButton @click="showForm = !showForm" />

      <MedCard v-for="(medication, index) in medicationList" :key="index" :name="medication.name"
        :sDate="medication.sDate" :quantity="medication.quantity" :frequency="medication.frequency"
        :eDate="medication.eDate" />

      <ion-card class="ion-margin round-border" v-if="showForm">
        <ion-card-header>
          <ion-card-title>Add New Medication</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-input color="tertiary" label="Name" v-model="formData.name" placeholder="Medication Name" />
          </ion-item>
          <ion-item>
            <ion-input color="tertiary" label="Start Date" v-model="formData.sDate" placeholder="DD/MM/YYYY" />
          </ion-item>
          <ion-item>
            <ion-textarea color="tertiary" label="Quantity" v-model="formData.quantity" placeholder="Amount" />
          </ion-item>
          <ion-item>
            <ion-textarea color="tertiary" label="Frequency" v-model="formData.frequency" placeholder="Instructions" />
          </ion-item>
          <ion-item>
            <ion-textarea color="tertiary" label="End Date" v-model="formData.eDate" placeholder="DD/MM/YYYY" />
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

<style scoped>
.round-border {
  border-radius: 20px;
}
</style>
