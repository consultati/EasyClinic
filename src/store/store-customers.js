import Vue from 'vue';
import { db } from "boot/firebase";
// state is used to Data
const state = {
  pacientes: {

  }

}

// mutations is used to methods not async
const mutations = {
  addTask(state, payload) {
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
        //console.log(element.id);

        let payload = {
          id: element.id,
          nome: element.data().cliName,
          status: element.data().cliStatus
        }
        //console.log('payload :', payload);
        commit('addTask', payload)

        // const cliente = {
        //   id: element.id,
        //   nome: element.data().cliName, 
        //   cpf: element.data().cliCPF,
        //   status: element.data().cliStatus        
        // }
        // this.pacientes.push(cliente);
        
        // console.log(this.pacientes);
      });
      console.log('object :',state.pacientes);
    } catch (error) {
      console.log(error);
    }
  },

}  

// getters is used to retrieve Data
const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}