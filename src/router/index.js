import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Mine from '../components/Mine'
import Login from '../components/Login'
import Calendar from '../components/Calendar'
import Recommend from '../components/Recommend'
import store from '../store'



Vue.use(Router)

export default new Router({
  routes: [
    {path: '/' , name: 'home' , component: Home},
    {path: '/home', name: 'home2' , component: Home},
    {path: '/mine/:id', name: 'mine2' , component: Mine},
    {path: '/mine', name: 'mine' , component: Mine},
    {path: '/login', name: 'login' , component: Login},
    {path: '/calendar', name: 'calendar' , component: Calendar},
    {path: '/recommend', name: 'recommend' , component: Recommend}      
  ]
})
