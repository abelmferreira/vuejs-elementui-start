import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import user from './user'
import shared from './shared/shared'
import messages from './shared/messages'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({storage: window.sessionStorage})],
  modules: {
    shared,
    messages,
    user
  }
})
