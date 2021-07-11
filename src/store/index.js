import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    receipt: [
      {name: "GuldTuborg", amount: 1, price: 18},
      {name: "GuldTuborg", amount: 1, price: 18},
    ]
  },
  mutations: {
    addLineItem (state, payload) {
      state.receipt.push({
        name: payload.name,
        price: payload.price,
        amount: payload.amount
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
