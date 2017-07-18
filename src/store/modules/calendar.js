import {getFirstDayInfo,createRangeArr} from '../../assets/lib/tool'
import * as types from '../types'


const state={
  dateInfo:[]
}

const actions = {
  getDateInfo({commit}){
    var firstDayInfo=getFirstDayInfo(1)
    if(firstDayInfo==0) firstDayInfo=7
    var result=new Array(firstDayInfo).concat(createRangeArr(1,31))
    commit(types.GET_DATE_INFO,{body:result})
  }
}


const mutations = {
  [types.GET_DATE_INFO](state,payload){
    var result=[]
    while(payload.body.length>0){
          result.push(payload.body.slice(0,7))
          payload.body.splice(0,7)
        }
    state.dateInfo=result
  }
}

export default {
  state,
  actions,
  mutations
}