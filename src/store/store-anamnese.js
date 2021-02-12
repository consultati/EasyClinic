import Vue from 'vue';
import { db } from "boot/firebase";
// state is used for Data
const state = {  
    questions: [ 
      {
      id: 1,
        titulo: 'É Fumante',
        tipo: 'bool',
        value: null
      },
      {
        id: 2,
          titulo: 'Usa lentes de contato',
          tipo: 'bool',
          value: null
      },
      {
        id: 3,
          titulo: 'Tem algum tipo de alergia',
          tipo: 'bool',
          value: null
      }, 
      {
        id: 4,
          titulo: 'Hepatite',
          tipo: 'bool',
          value: null
        },
        {
          id: 5,
            titulo: 'Vitiligo',
            tipo: 'bool',
            value: null
        },
        {
          id: 6,
            titulo: 'Quelóide',
            tipo: 'bool',
            value: null
        } 
    ]
}

// mutations is used for methods not async
const mutations = {
  

}

// actions is used for methods async
const actions = {
  
  getQuestions({ commit }) {
    try {
      // Fetch API
    } catch (error) {
      console.log(error);
    }
  }
}  

// getters is used to retrieve Data
const getters = {
  questions: (state) => {
    return state.questions
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}