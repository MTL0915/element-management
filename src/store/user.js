export default {
  mutations:{
    setToken(state,val){
      state.token = val
      sessionStorage.setItem('token',val)
    },
    clearToken(state){
      state.token = ''
      sessionStorage.removeItem('token')
    },
    getToken(state){
      return state.token || sessionStorage.getItem('token')
    }
  },
  state:{
    token:''
  }
}