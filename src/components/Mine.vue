<template>
  <div id="mine">
    <div><p>Hello</p></div>
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'

export default {
  name : 'Mine',
  computed:{
  ...mapState({
      flag:state=>state.user.userMsg.loginFlag,
    })
  },
  created(){
    if(!this.flag)
        this.$router.push("/login")
  }
}
</script>

<style>

</style>
