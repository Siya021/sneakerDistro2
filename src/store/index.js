import { createStore } from 'vuex'

export default createStore({
  state: {
    data: null
  },
  getters: {
  },
  mutations: {
    setData(state, newData) {
      state.data = newData
    }
  },
  actions: {
    fetchData({commit}) {
      return fetch('https://siya021.github.io/VueJson/sneakers.json')
    }
  },
  modules: {
  }
})
