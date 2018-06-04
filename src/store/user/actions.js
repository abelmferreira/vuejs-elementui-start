export default {
  setLoggedin ({commit}, payload) {
    commit('setLoggedin', payload)
  },
  userLogin ({commit}, payload) {
    commit('setLoadingMessage', 'Autenticando usuário')
    setTimeout(() => {
      commit('setLoggedin', true)
      commit('setLoadingMessage')
    }, 1500)
  },
  userLogout ({commit}) {
    commit('setUserLogout')
  }
}
