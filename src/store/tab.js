export default {
  actions:{

  },
  mutations:{
    collapseMenu(state){
      state.isCollapse = !state.isCollapse
    }
  },
  state:{
    isCollapse: false
  }
}