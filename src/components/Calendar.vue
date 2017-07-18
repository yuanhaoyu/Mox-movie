<template>
  <div id="Calendar">
    <table>
      <tr>
        <td>星期日</td>
        <td>星期一</td>
        <td>星期二</td>
        <td>星期三</td>
        <td>星期四</td>
        <td>星期五</td>
        <td>星期六</td>
      </tr>
      <tr v-for="lists in listss">
        <td v-for="list in lists">{{list}}</td>
      </tr>
    </table>
  </div>
  
</template>

<script>
  import { mapState,mapActions } from 'vuex'
  
  export default {
    name: 'Calendar',
    computed:{
    ...mapState({
      listss:state=>state.calendar.dateInfo
    })
    },
    methods:{
      ...mapActions([
        'getDateInfo'
      ])
    },
    created(){
      this.getDateInfo()
      document.getElementById("app").scrollTop=0
    },


  }  
</script>


<style scoped>
#Calendar table{
  width: 100%;
  text-align: center;
  line-height: 30px;
}

</style>