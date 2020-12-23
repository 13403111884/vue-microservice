import { createStore } from "vuex";

import modulesFiles from 'globby!/@store/modules/*'

const modules: any = Object.values(modulesFiles).reduce((modules: any, module: any) => {
  modules[module.name] = module
  return modules
}, {})

export default createStore({
  state() {
    return {
      count: 0,
      commonData: {
        // parent: 1
      },
    };
  },
  mutations: {
    increment(state: any) {
      state.count++;
    },
    setCommonData(state, val){
      state.commonData = val;
    }
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
  },
  getters: {
    count: (state) => {
      return state.count
    }
  },
  modules
});
