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

interface Mood {
  date: string;
  mood: number;
}

interface State {
  symptoms: Symptom[];
  medications: Medication[];
  moods: Mood[],
}

const state: State = {
  symptoms: [],
  medications: [],
  moods: [],
};

const mutations = {
  addSymptom(state: State, symptom: Symptom) {
    state.symptoms.push(symptom);
  },
  addMedication(state: State, medication: Medication) {
    state.medications.push(medication)
  },
  addOrUpdateMood(state: State, mood: Mood) {
    const existingMood = state.moods.find((m) => m.date === mood.date);
    if (existingMood) {
      existingMood.mood = mood.mood;
    } else {
      state.moods.push(mood);
    }
  },
};

export default createStore({
  state,
  mutations,
});