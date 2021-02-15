import Vue from 'vue';
import { db } from "boot/firebase";
// state is used for Data
const state = {  
  pacientes: [
    
  ]  
}

// mutations is used for methods not async
const mutations = {
  addPaciente(state, payload) {     
    let pacientes = state.pacientes
    pacientes.push(payload)
    Object.assign(state, {pacientes})
  }

}

// actions is used for methods async
const actions = {
  async fbReadData({ commit }) {
    //console.log('start reading data from Firebase');
    try {

      const resDB = await db.collection('clientes').get()

      resDB.forEach(element => {
        
        let payload = {          
          id: element.id,
          nome: element.data().cliName,
          status: element.data().cliStatus,
          ficha: element.data().cliFicha           
          }

        //console.log('payload :', element.id, " ", payload.nome, " ", payload.status);

        commit('addPaciente', payload)
       
      });
      //console.log('object pacientes:',state.pacientes);
    } catch (error) {
      console.log(error);
    }
  },
  
  async fbAddData({ commit }, payload) {
    try {
      const resDB = await db.collection('clientes').add(payload)
    } catch (error) {
      console.log(error);
    }
  }
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