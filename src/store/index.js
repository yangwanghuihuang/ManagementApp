// vuex配置

import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state'
// import * as actions from './actions'
// import * as getters from './getters'
// import mutations from './mutations'
import user from './user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// export default new Vuex.Store({
//   state,
//   actions,
//   getters,
//   mutations,
//   strict:debug,
// })
export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
  }
})
