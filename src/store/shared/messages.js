export default {
  state: {
    loading: null,
    messages: [],
    error: false
  },
  mutations: {
    setLoadingMessage (state, payload) {
      state.loading = (payload || null)
    },
    addMessage (state, payload) {
      state.messages.push(payload)
    },
    removeMessage (state, payload) {
      state.messages = state.messages.filter(message => message.id !== payload.customClass)
    },
    markMessage (state, payload) {
      const index = state.messages.findIndex(message => message === payload)
      state.messages[index].displayed = true
    },
    clearMessages (state) {
      state.messages = []
    },
    setError (state, payload) {
      this.commit('setLoadingMessage', null)
      state.error = payload
    },
    clearError (state) {
      state.error = false
    }
  },
  actions: {
    setError ({commit}, payload) {
      commit('setError', payload)
    },
    setLoadingMessage ({commit}, payload) {
      commit('setLoadingMessage', payload)
    },

    addMessage ({commit}, payload) {
      const msgid = `msg-id-${Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)}`
      if (typeof payload === 'string') {
        payload = { id: msgid, message: payload, type: 'info', timeout: 4000 }
      } else if (typeof payload === 'object') {
        payload.id = msgid
        payload.message = (payload.message || null)
        payload.type = (payload.type || 'info')
        payload.timeout = (payload.timeout || 4000)
      }

      if (payload.type === 'loading') {
        commit('setLoadingMessage', payload.message)
      } else {
        commit('addMessage', payload)
      }
    },

    removeMessage ({commit}, payload) {
      commit('markMessage', payload)
      setTimeout(() => {
        commit('removeMessage', payload)
      }, payload.timeout)
    },

    removeMessageNow ({commit}, payload) {
      commit('removeMessage', payload)
    },

    clearError ({commit}, timeout = 0) {
      if (isNaN(timeout)) timeout = 0
      setTimeout(() => {
        commit('clearError')
      }, timeout)
    },
    clearMessages ({commit}, timeout = 0) {
      if (isNaN(timeout)) timeout = 0
      setTimeout(() => {
        commit('clearMessages')
      }, timeout)
    }
  },
  getters: {
    messages (state) {
      return state
    }
  }
}
