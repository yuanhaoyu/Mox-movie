// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'


Vue.config.productionTip = false
Vue.use(router)
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)

// router.beforeEach((to, from, next) => {
//   // 判断该路由是否需要登录权限
//   if (to.meta.requireAuth) {
//     // 通过vuex state获取当前的token是否存在
//     // console.log(isEmptyObject(store.state.user)) 
//     if (store.state.user.userMsg && store.state.user.userMsg.userFlag) {
//       next();
//     } else {
//       next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath
//         } // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   } else {
//     next();
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
}).$mount('#app')
