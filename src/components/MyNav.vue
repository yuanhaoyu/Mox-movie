<template>
  <div class="nav">
    <ul>
      <li><router-link to="/home">首页</router-link></li>
      <li><router-link to="/calendar">日历</router-link></li>
      <li><router-link to="/recommend">推荐</router-link></li>      
      <li><router-link to="/mine">我的</router-link></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'MyNav'
  }
</script>

<style scoped>
  .nav{
    width: 100%;
    max-width: 415px;
    height: calc((49 / 14) * 1rem);
    line-height: calc((49 / 14) * 1rem);
    position: fixed;
    bottom: 0;
    border-top: 1px solid #8d8d8d;
    background-color: white;
    z-index: 999;
  }
  .nav ul li{
    float: left;
    width: 25%;
  }
  .nav ul li a{
    width: 100%;
    display: block;
    text-align: center;
  }
</style>