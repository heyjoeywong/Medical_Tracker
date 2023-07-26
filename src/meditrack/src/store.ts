import { createStore } from 'vuex';

interface Symptom {
  date: string;
  title: string;
  description: string;
}

interface Medication {
  name: string,
  sDate: string,
  quantity: string,
  frequency: string,
  eDate: string,
}

interface State {
  symptoms: Symptom[];
  medications: Medication[];
}

const state: State = {
  symptoms: [],
  medications: [],
};

const mutations = {
  addSymptom(state: State, symptom: Symptom) {
    state.symptoms.push(symptom);
  },
  addMedication(state: State, medication: Medication) {
    state.medications.push(medication)
  },
};

export default createStore({
  state,
  mutations,
});