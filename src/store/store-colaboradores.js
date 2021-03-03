import Vue from 'vue';
import { db } from "boot/firebase";
// state is used for Data
const state = {  
  colaboradores: []  
}

// mutations is used for methods not async
const mutations = {
  addColaborador(state, payload) {     
    let colaboradores = state.colaboradores
    colaboradores.push(payload)
    Object.assign(state, {colaboradores})
  },
  reset(state) {     
    Object.assign(state, {colaboradores:[]})
  }

}

// actions is used for methods async
const actions = {

  reset ({ commit }) {
    commit('reset')
  },
  
  async fbReadData({ commit }) {
    //Faz a leitura dos dados de colaboradores no Banco de Dados
    try {

      const resDB = await db.collection('coworkers').get()

      resDB.forEach(element => {
        
        let payload = {          
          id: element.id,
          nome: element.data().cwkName,
          status: element.data().cwkStatus                     
        }     
        commit('addColaborador', payload)     
      });
      // Trata caso ocorra erro de leitura no Banco
    } catch (error) {
      console.log(error);
    }
  },
  
  async fbAddData({ commit }, payload) {
    try {
      const resDB = await db.collection('coworkers').add(payload)
    } catch (error) {
      console.log(error);
    }
  }
}  

// getters is used to retrieve Data
const getters = {
  colaboradores: (state) => {
    return state.colaboradores
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}