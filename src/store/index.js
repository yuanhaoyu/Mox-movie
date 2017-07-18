import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import gobal from './modules/gobal'
import home from './modules/home'
import calendar from './modules/calendar'
import user from './modules/user'




const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    gobal,
    home,
    calendar,
    user
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
