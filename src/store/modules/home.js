import * as types from '../types'
import api from '../../api'


const state = {
  homeMsg:[]
}

const actions = {
  getHomeMsg({commit}){
    api.getHomeMsg().then(res=>{
      if(res.ok){ 
        commit(types.GET_HOME_MSG,{body:{"title":res.body.title,"body":res.body.subjects}})
      }
    })
  }
}


const mutations = {
  [types.GET_HOME_MSG](state,payload){
    state.homeMsg = payload.body
  }
}

export default {
  state,
  actions,
  mutations
}
