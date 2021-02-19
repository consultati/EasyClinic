import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import auth from './store-auth'
import settings from './store-settings'
import customers from './store-customers'
import anamnese from './store-anamnese'
import colaboradores from './store-colaboradores'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      auth,
      settings,
      customers,
      anamnese,
      colaboradores
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
