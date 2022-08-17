<template>
<div> 
  <!-- 父向子组件传值 -->
  <h1>我是发现<span v-text="username"></span></h1>
  <div 
       v-for='(item,index) in goodsList' :key="index" class="row">
        <!-- v-text="'我是第'+i+'行商品'" -->
        <p   @click="skipToDetail(item.id,item.title)">
          <span>{{item.id}}</span>
          <span>{{item.title}}</span>
          <span>{{item.price}}</span>
        </p>
  </div>
</div>
</template>

<script>
// import { Link } from 'element-ui'
// import router from '../router'
import { mapState,mapActions } from 'vuex'
// import api from '@/utils/api'
export default{
  data(){
    return {
      goodsList:[
        {id:100,title:'金蝉',price:100},
        {id:10023,title:'白酒',price:1000}
      ] 
    }
  },
  computed:{
    ...mapState(['username']),
    ...mapState(['list'])
  },
  mounted(){
    console.log('$store',this.$store);
    this.emitGetMusicList({})
  },
    methods:{
      ...mapActions('music',['emitGetMusicList']),
      skipToDetail(id,title){
        //编程式路由
        //1-使用path字段自行跳转
        // this.$router.push('./find/detail/'+id)
        // //2-使用alias别名进行跳转
        // this.$router.push('/fd'+id)
        //3-使用name命名路由进行跳转
        this.$router.push({name: 'fd',params:{id:String(id),title:title},})//query:{title:title}
      }
    }

}
</script>
 
<style lang="scss" scoped>
.row{
  text-align: center;
  line-height:40px;
  cursor: pointer;
  border-bottom:1px solid #ccc;
}

</style>