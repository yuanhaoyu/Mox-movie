<template>
  <div id="content">
    <ul>
      <li v-for="list in lists">
        <div class="img" :style="{backgroundImage: 'url(' + list.images.large + ')'}"></div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState,mapActions } from 'vuex'

  export default {
    name: 'Content',
    computed:{
    ...mapState({
      lists:state=>state.home.homeMsg.body,
      test:state=>state.gobal
    })
    },
    methods:{
      ...mapActions([
        'getHomeMsg'
      ])
    },
    created(){
      this.getHomeMsg()
    }
  }  
</script>


<style scoped>
#content{
  width: 100%;
  padding-bottom: calc((49 / 14) * 1.2rem);
  overflow: hidden;
}
#content ul{
  width:100%;
}
#content ul li{
  width: 30%;
  float: left;
  margin-left: 2%;
  margin-top:10px;
}
#content ul li:nth-child(3n+1){
  margin-left: 3%;
}
#content .img{
  width: 100%;
  padding-top: 150%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>