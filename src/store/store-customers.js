import Vue from 'vue';
import { db } from "boot/firebase";
// state is used to Data
const state = {
  pacientes: {
    'ID1': {
      nome: 'Eanes Azurara',
      status: true
    },
    'ID2': {
      nome: 'Priscila Azurara',
      status: false
    },
    'ID3': {
      nome: 'Pedro Azurara',
      status: true
    }
  }

  // pacientes: [
  //   {
  //     id: 1,
  //     nome: 'Eanes Azurara',
  //     status: true
  //   },
  //   {
  //     id: 2,
  //     nome: 'Priscila Azurara',
  //     status: false
  //   },
  //   {
  //     id: 3,
  //     nome: 'Pedro Azurara',
  //     status: true
  //   }
  // ]
  
}

// mutations is used to methods not async
const mutations = {
  addPaciente(state, payload) {
    Vue.set(state.pacientes, payload.id, payload.nome, payload.status)  
  }

}

// actions is used to methods async
const actions = {
  async fbReadData({ commit }) {
    console.log('start reading data from Firebase');
    try {

      const resDB = await db.collection('clientes').get()

      resDB.forEach(element => {
        
        let payload = {          
          id: element.id,
          nome: element.data().cliName,
          status: element.data().cliStatus            
          }

        console.log('payload :', element.id, " ", payload.nome, " ", payload.status);

        commit('addPaciente', payload)

        // const cliente = {
        //   id: element.id,
        //   nome: element.data().cliName, 
        //   cpf: element.data().cliCPF,
        //   status: element.data().cliStatus        
        // }
        // this.pacientes.push(cliente);
        
        // console.log(this.pacientes);
      });
      console.log('object pacientes:',state.pacientes);
    } catch (error) {
      console.log(error);
    }
  },

}  

// getters is used to retrieve Data
const getters = {
  pacientes: (state) => {
    return state.pacientes
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}