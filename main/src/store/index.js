import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    commonData: {
      parent: 1
    },
  },
  mutations: {
    setCommonData(state, val){
      state.commonData.parent = val.parent
    }
  },
  actions: {
  },
  getters: {
    parent (state) {
      return state.commonData.parent
    }
  },
  modules: {
  }
})
