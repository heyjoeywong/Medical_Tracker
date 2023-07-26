<template>
  <ion-page>
    <AppHeader />

    <ion-content :fullscreen="true">
      <ion-title size="large" class="ion-padding-top">Symptoms</ion-title>

      <SymCard date="26/07/2023" title="Test" description="I am experiencing some pain." />

      <AddButton @click="showForm = !showForm" />

      <ion-card v-if="showForm">
        <ion-card-header>
          <ion-card-title>Add New Symptom</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-input label="Date" v-model="formData.date" />
          </ion-item>
          <ion-item>
            <ion-input label="Title" v-model="formData.title" />
          </ion-item>
          <ion-item>
            <ion-textarea label="Description" v-model="formData.description" />
          </ion-item>
          <ion-button @click="addNewSymptom">Add</ion-button>
        </ion-card-content>
      </ion-card>

      <SymCard v-for="(symptom, index) in symptomList" :key="index" :date="symptom.date" :title="symptom.title"
        :description="symptom.description" />

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonTitle, IonContent, IonButton, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonItem, IonInput, IonTextarea } from '@ionic/vue';
import { ref, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import AppHeader from '@/components/AppHeader.vue';
import SymCard from '@/components/SymCard.vue';
import AddButton from '@/components/AddButton.vue';

// Create a reactive state for the symptom form
const showForm = ref(false);
const formData = reactive({
  date: '',
  title: '',
  description: '',
});

// Access the Vuex store
const store = useStore();

// Get the list of symptoms from the Vuex store
const symptomList = computed(() => store.state.symptoms);

// Method to add a new symptom to the Vuex store
const addNewSymptom = () => {
  if (formData.date && formData.title && formData.description) {
    // Create a new symptom object with the form data
    const newSymptom = {
      date: formData.date,
      title: formData.title,
      description: formData.description,
    };

    // Commit the new symptom to the Vuex store
    store.commit('addSymptom', newSymptom);

    // Clear the form after adding a new symptom
    formData.date = '';
    formData.title = '';
    formData.description = '';

    // Close the form after submitting
    showForm.value = false;
  }
};
</script>
