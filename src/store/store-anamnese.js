import Vue from 'vue';
import { db } from "boot/firebase";
// state is used for Data
const state = {   
    questions: []
    // questions: [ 
    //   {
    //   id: 1,
    //     titulo: 'É Fumante',
    //     tipo: 'bool',
    //     value: null
    //   },
    //   {
    //     id: 2,
    //       titulo: 'Usa lentes de contato',
    //       tipo: 'bool',
    //       value: null
    //   },
    //   {
    //     id: 3,
    //       titulo: 'Tem algum tipo de alergia',
    //       tipo: 'bool',
    //       value: null
    //   }, 
    //   {
    //     id: 4,
    //       titulo: 'Faz uso de medicamentos? Quais?',
    //       tipo: 'text',
    //       value: ''
    //   },
    //   {
    //     id: 5,
    //       titulo: 'Faz uso de touca ou boné?',
    //       tipo: 'text',
    //       value: ''
    //   }
    // ]
}

// mutations is used for methods not async
const mutations = {
  addQuestion(state, payload) {     
    let questions = state.questions
    questions.push(payload)
    Object.assign(state, {questions})
  },
  reset(state) {     
    Object.assign(state, {questions:[]})
  }
}

// actions is used for methods async
const actions = {
  
  // getQuestions({ commit }) {
  //   try {
  //     // Fetch API
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }  
  
  reset ({ commit }) {
    commit('reset')
  },   

  async getQuestions({ commit }) {
    try {

      const resDB = await db.collection('questions').get()

      resDB.forEach(element => {
        
        let payload = {          
          id: element.id,
          titulo: element.data().queTitulo,
          tipo: element.data().queTipo,
          value: element.data().queValor           
          }

        //console.log('payload :', element.id, " ", payload.nome, " ", payload.status);
        
        commit('addQuestion', payload)
       
      });
      //console.log('object pacientes:',state.pacientes);
    } catch (error) {
      console.log(error);
    }
  },
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