<template>
  <div id="app" >
    <Topbar name="首页"></Topbar>
    <transition name="slide" mode="out-in">
      <router-view ></router-view>
    </transition>
    <keep-alive>
    <MyNav></MyNav>
    </keep-alive>
  </div>
</template>

<script>
import  './assets/lib/stone.min.css'
import Topbar from './components/Topbar'
import MyNav from './components/MyNav'

export default {
  name: 'app',
  components:{Topbar,MyNav},
  created(){
      this.$router.push("/home")
  }

}
</script>

<style>
html{
  font-size: 14px;
  height: 100%;
}
body{
  height: 100%;
  padding-top: calc((44 / 14) * 1rem);
}
#app{
  /* padding-top: calc((44 / 14) * 1rem); */
  padding-bottom: calc((49 / 14) * 1rem);
  max-width: 415px;
  height: calc(100% - ((49 / 14) * 1rem) - ((44 / 14) * 1rem));
  font-size: 14px;
  margin: 0 auto;
  overflow-x: hidden;
}


 @keyframes slideIn {
    from {
        transform: translate(100%, 0);
    }
    to {
        transform: translate(0, 0);
    }
}

@keyframes slideOut {
    from {
        transform: translate(0, 0);
    }
    to {
        transform: translate(100%, 0);
    }
}

/* .slide-enter-active, .slide-leave-active {
  transition: opacity .6s ease;
  
} */
.slide-enter {
  opacity: 0;
  
}
.slide-leave {
  opacity: 1;
} 

 .slide-enter-active {
    animation: slideIn .8s forwards;
    transition: opacity .8s ease;
}
.slide-leave-active {
    animation: slideOut .8s forwards;
    transition: opacity .8s ease;
} 
</style>
