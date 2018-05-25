import http from '../../assets/script/http/axiosApi'
const state = {
  approvalStore: {}
}
const mutations = {
  update (state, approval) {
    state.approvalStore = approval
  }
}
const actions = {
  init ({commit}) {
    // 此处不能用this.$axios因为this不指向vue
    http.get('/api/createApproval').then(res => {
      commit('update', res.data)
    })
  },
  update ({commit}, approval) {
    commit('update', approval)
  }
}
export default {
  state,
  mutations,
  actions
}
