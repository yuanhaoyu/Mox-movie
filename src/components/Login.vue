<template>
    <div id="login">
      <form action="">
        <p>请输入用户名</p>
        <input type="text" v-model="name" >
        <p>请输入密码</p>
        <input type="password" v-model="pwd">
        <br>
        <input type="button" value="确定" class="loginAction" @click="login">        
      </form>
    </div>  
</template>

<script>
import { mapState,mapActions } from 'vuex'

export default {
  name:'Login',
  data:function(){
    return{
      name:"",
      pwd:""
    }
  },
  computed:{
  ...mapState({
      flag:state=>state.user.userMsg.loginFlag,
    })
  },
  methods:{
    ...mapActions([
      'toLogin'
    ]),
    login(){
      this.toLogin({name:this.name,pwd:this.pwd})
    }
  },
  watch:{
    flag:function(val){
      if(val)
        this.$router.push("/mine")
      else
        return
    }
  }
}
</script>

<style>
#login form{
  width: 80%;
  margin: 0 auto;
  text-align: center;
  margin-top: 150px;
}
#login form input{
  width: 80%;
  height: 1.5rem;
}
.loginAction{
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  border: 0;
  height: 2.2rem!important;
  background: red;
}
</style>

