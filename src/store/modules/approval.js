const state = {
  approvalStore: {}
}
const mutations = {
  update (state, approval) {
    state.approvalStore = approval
  }
}
const actions = {
  init ({commit}, data) {
    // 此处不能用this.$axios因为this不指向vue
    commit('update', data)
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
