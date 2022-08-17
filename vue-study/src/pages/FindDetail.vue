<template>
  <div class="detail">
    <h1>我是商品详情页</h1>
    <h1>我的商品ID是:<span v-text="id"></span></h1>
    <h1>我的商品title是:<span v-text="title"></span></h1>
    <!-- <h1>我的商品ID是:<span>{{goodsID}}</span></h1>
    <h1>我的商品标题:<span>{{goodsTitle}}</span></h1> -->
  </div>
</template>
<script>
export default{
   props:{ //父组件传值到子组件用props  接收
    id:{
      type:String,
      // default:'1'
      require:true
    },
    title:{
      type:String,
      require:true
    }
   },
   data(){
    return{
      goodsID:"",
      goodsTitle:"",
    }
   },
   created(){
    // lu'yo
     this.goodsID = this.$route.params.id
     this.goodsTitle = this.$route.query.title
   },
   mounted(){// dom 创建完成
    console.log('$route',this.$route);  //  表示当前活跃路由   就是现在这个页面的url    
    /*
    
    
    */         
    console.log('props id',this.id);
    //使用id调接口，
   }
}
</script>
<style lang="scss">
.detail{
  line-height:50px;
  text-align: center;
}
</style>