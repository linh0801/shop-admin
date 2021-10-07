// src\store\index.ts
import { createStore } from 'vuex'

const store = createStore({
  state: {
    count: 0
  },
  getters: {},
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {},
  modules: {}
})

export default store
