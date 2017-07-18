import * as types from '../types'



const state = {
  userMsg:{
    loginFlag:false
  }
}

const actions = {
  toLogin({commit},userInfo){
    if(userInfo.name==="test" && userInfo.pwd==="test")
      commit(types.TO_LOGIN,{body:{"loginFlag":true}})
    else
      commit(types.TO_LOGIN,{body:{"loginFlag":false}})
  }
}


const mutations = {
  [types.TO_LOGIN](state,payload){
    state.userMsg = payload.body
  }
}

export default {
  state,
  actions,
  mutations
}
