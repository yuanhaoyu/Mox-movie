import Vue from 'vue'
import VueResource from 'vue-resource'

const API_ROOT="https://api.douban.com"


Vue.use(VueResource)

export default {
  getHomeMsg : function () {
    return Vue.http.jsonp(API_ROOT+"/v2/movie/in_theaters");
  }
}