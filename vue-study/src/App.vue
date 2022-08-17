<template>
  <div class="gx">
    <!-- 用于承载url所匹配成功时对应的Vue组件 
    命名视图：就是给router-view加个名字
    -->
  <!-- 
    1,一一对应规则怎么定义,定义在哪里
    1,如何改变url
    3.改变url之后找到对应的组件 在哪里进行显示
   -->
    <Menu/>
    <router-view></router-view>
    <div v-show="$route.path==='/home'"  class="container">
      <div>
        <router-view name="map"></router-view>
      </div> 
      <div>
        <router-view name="video"></router-view>
      </div>
      <div>
        <router-view name="exact"></router-view>
      </div>
      <div>
        <router-view name="canvas"></router-view>
      </div>
    </div>
  </div>
  <!-- 以上那么多的div可以放在一个新组件Menu中 -->
</template>


<script>
// 引入新组件
import Menu from './components/Menu-name.vue'
export default {
  //把全局设为局部组件
  components:{
    Menu
  },
  watch:{
    $route(){
      console.log('路由发生变化');
    }
  },
  mounted(){
    console.log('$router',this.$router);

  }
}
</script>

<style lang="scss" >
html,body{padding:0;margin:0;}
.container{
  position:absolute;
  top:60px;
  left:0;
  bottom:0;
  right:0;
  text-align: center;
  line-height:100px;
  &>div{
    border:1px solid #ccc;
  }
  &>div:nth-child(1){
    position:absolute;
    top:0;
    left:0;
    right:50%;
    bottom:50%;
  }
  &>div:nth-child(2){
    position:absolute;
    top:0;
    left:50%;
    right:0;
    bottom:50%;
  }
  &>div:nth-child(3){
    position:absolute;
    top:50%;
    left:0;
    right:50%;
    bottom:0;
  }
  &>div:nth-child(4){
    position:absolute;
    top:50%;
    left:50%;
    right:0;
    bottom:0;
  }
}
</style>
