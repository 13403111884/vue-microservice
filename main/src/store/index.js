import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appData: {
      parent: 1
    },
    parent: 1
  },
  mutations: {
    setCommonData(state, val){
      state.appData.parent = val.parent
    }
  },
  actions: {
  },
  getters: {
    parent (state) {
      return state.appData.parent
    }
  },
  modules: {
  }
})
