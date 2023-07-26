import { createStore } from 'vuex';

interface Symptom {
  date: string;
  title: string;
  description: string;
}

interface State {
  symptoms: Symptom[];
}

const state: State = {
  symptoms: [],
};

const mutations = {
  addSymptom(state: State, symptom: Symptom) {
    state.symptoms.push(symptom);
  },
};

export default createStore({
  state,
  mutations,
});