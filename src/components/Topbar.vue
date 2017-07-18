<template>
  <div id="topbar">{{name}}</div>
</template>

<script>
  export default {
    name : 'Topbar',
    data:function(){
      return{
        name:"首页",
      }
    },
    watch: {
      '$route': function(val, oldVal){
         switch (val.name) {
           case "calendar":
             this.name="日历"
             break;
           case "home2":
             this.name="首页"
             break;
           case "home":
             this.name="首页"
             break;
           case "mine":
             this.name="我的"
             break;
           case "recommend":
             this.name="推荐"
             break;
           case "login":
             this.name="登录"
             break;
           default:
             break;
         }
      }
    }
  }
</script>

<style scoped>
  #topbar{
    position: fixed;
    top:0;
    width: 100%;
    max-width: 415px;
    height: calc((44 / 14) * 1rem);
    line-height: calc((44 / 14) * 1rem);
    border-bottom: 1px solid #8d8d8d;
    text-align: center;
    font-size: 1.2rem;
    background-color: white;
    z-index: 999;
  }
</style>