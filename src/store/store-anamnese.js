import Vue from 'vue';
import { db } from "boot/firebase";
// state is used for Data
const state = { 
  
    questions: [

    ]

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
    //       titulo: 'Hepatite',
    //       tipo: 'bool',
    //       value: null
    //     },
    //     {
    //       id: 5,
    //         titulo: 'Vitiligo',
    //         tipo: 'bool',
    //         value: null
    //     },
    //     {
    //       id: 6,
    //         titulo: 'Quelóide',
    //         tipo: 'bool',
    //         value: null
    //     },
    //     {
    //       id: 7,
    //         titulo: 'Tem dores de Cabeça',
    //         tipo: 'bool',
    //         value: null
    //       },
    //       {
    //         id: 8,
    //           titulo: 'Tem intestino preso',
    //           tipo: 'bool',
    //           value: null
    //       },
    //       {
    //         id: 9,
    //           titulo: 'Tem algum tipo de infecção',
    //           tipo: 'bool',
    //           value: null
    //       }, 
    //       {
    //         id: 10,
    //           titulo: 'Cancer',
    //           tipo: 'bool',
    //           value: null
    //         },
    //         {
    //           id:11,
    //             titulo: 'Diabetes',
    //             tipo: 'bool',
    //             value: null
    //         },
    //         {
    //           id: 12,
    //             titulo: 'Problemas cardíacos',
    //             tipo: 'bool',
    //             value: null
    //         },
    //         {
    //           id: 13,
    //             titulo: 'Faz uso de medicamentos? Quais?',
    //             tipo: 'text',
    //             value: ''
    //         },
    //         {
    //           id: 14,
    //             titulo: 'Faz uso de touca ou boné?',
    //             tipo: 'text',
    //             value: ''
    //         },
    //         {
    //           id: 15,
    //             titulo: 'Quantas vezes lava a cabeça por semana?',
    //             tipo: 'text',
    //             value: ''
    //         },
    //         {
    //           id: 16,
    //             titulo: 'Quais os tipos de produtos que você usa?',
    //             tipo: 'text',
    //             value: ''
    //         },
    //         {
    //           id: 17,
    //             titulo: 'Tentou anteriormente algum tratamento? Qual?',
    //             tipo: 'text',
    //             value: ''
    //         },
    //         {
    //           id: 18,
    //             titulo: 'Qual área do couro cabeludo sente mais afetada?',
    //             tipo: 'text',
    //             value: ''
    //         },
    //         {
    //           id: 19,
    //             titulo: 'Temou remédios para emagrecer?',
    //             tipo: 'text',
    //             value: ''
    //         },
    //         {
    //           id: 20,
    //             titulo: 'Há quanto tempo detectou o problema de queda?',
    //             tipo: 'text',
    //             value: ''
    //         }

    // ]
}

// mutations is used for methods not async
const mutations = {
  addQuestion(state, payload) {     
    let questions = state.questions
    questions.push(payload)
    Object.assign(state, {questions})
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