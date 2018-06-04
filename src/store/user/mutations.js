export default {
  setLoggedin (state, payload) {
    state.user.loggedin = payload
  },
  setUserLogout (state) {
    state.user.loggedin = false
    state.user.token = null
    state.user.profile = null
  }
}
