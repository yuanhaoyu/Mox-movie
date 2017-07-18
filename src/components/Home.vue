<template>
  <div id="home">
    
    <Content></Content>    
    
  </div>
</template>

<script>
  import Content from './Content'

  export default {
    name: 'Home',
    components:{Content},
    created(){
      document.getElementById("app").scrollTop=0
      console.log(1)      
    },
    mounted(){
      document.getElementById("app").scrollTop=0
      console.log(2)            
    }
  }
</script>

<style>

</style>
