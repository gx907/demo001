<template>
<div class="user">
  <div class="tabs">
  <router-link 
  tag="span" 
  to="/user/article"
  exact-active-class="on"
  >
  我的作品
  </router-link>
  <router-link 
  tag="span" 
  to="/user/collection"
  exact-active-class="on"
  >
  我的收藏
  </router-link>
</div>
<router-view></router-view>
<br>
<span>我的</span>
<span v-text="username"></span>
<br>

<input type="text" v-model="newName">
<button @click="changUserName">改变用户名</button>
<br>
<br>
<button @click="changeUserNameAsync">调接口改变用户名</button>
</div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default{
  data(){
    return{
      newName:''
    }
  },
  computed:{
     ...mapState(['username']),
     ...mapGetters(['unLength'])
  },
  methods:{
    ...mapMutations(['changeUN']),
    ...mapActions(['fetchUN']),
    changUserName(){
      //修改state中的username
      //这种直接修改state的做法，是不建议的
      // this.$store.state.username = this.newName
      // this.$store.commit('changeUN',this.newName)
      this.changeUN(this.newName)
      this.newName = ''
    },
     changeUserNameAsync(){
      // this.$store.dispatch('fetchUN',{token:'token'})
      this.fetchUN({token:'token'})
     }
  }
}
</script>

<style lang="scss" scoped>
.user{
  width:80%;
  margin:0 auto;
  .tabs  {
    line-height:60px;
    display: flex;
    text-align:center;
    margin-top: 30px;
    &>span{
      flex:1;
      border:1px solid #ccc;
      cursor: pointer;
      &>span.on{
        color:blue;
      }
    }
  }
  
}


</style>