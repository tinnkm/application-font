import Vue from 'vue'
import Vuex from 'vuex'
import Http from '../assets/script/axiosApi.js'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    approval: {}
  },
  mutations: {
    update (state, approval) {
      state.approval = approval
    }
  },
  actions: {
    init ({commit}) {
      Http.get('/api/createApproval').then(res => {
        console.log(res)
      })
    },
    update ({commit}, approval) {
      commit('update', approval)
    }
  }
})
