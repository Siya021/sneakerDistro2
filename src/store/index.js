import { createStore } from 'vuex'
const sneakerURL = "https://siya021.github.io/VueJson/sneakers.json"
export default createStore({
  state: {
    nike: null,
    adidas: null,
    new_balance: null,
    converse: null,
    puma: null,
  },
  getters: {},
  mutations: {
    setNike(state, nike) {
      state.nike = nike;
    },
    setAdidas(state, adidas) {
      state.adidas = adidas;
    },
    setNew_balance(state, new_balance) {
      state.new_balance = new_balance;
    },
    setConverse(state, converse) {
      state.converse = converse;
    },
    setPuma(state, puma) {
      state.puma = puma;
    },
  },
  actions: {
    async fetchNike(context) {
      let res = await fetch(sneakerURL);
      let { nike } = await res.json();

      context.commit("setNike", nike);
    },
    async fetchAdidas(context) {
      let res = await fetch(sneakerURL);
      let { adidas } = await res.json();

      context.commit("setAdidas", adidas);
    },
    async fetchNew_balance(context) {
      let res = await fetch(sneakerURL);
      let { new_balance } = await res.json();

      context.commit("setNew_balance", new_balance);
    },
    async fetchConverse(context) {
      let res = await fetch(sneakerURL);
      let { converse } = await res.json();

      context.commit("setConverse", converse);
    },
    async fetchPuma(context) {
      let res = await fetch(sneakerURL);
      let { puma } = await res.json();

      context.commit("setPuma", puma);
    },
  },
  modules: {},
});
