import Vue from 'vue'
import Vuex from 'vuex'
import approval from './modules/approval'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    approval
  }
})
