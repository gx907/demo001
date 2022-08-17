import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)


// import Home from './pages/Home.vue'
//路由懒加载,是一种Vue项目的性能的方案
//大约的思路：根据url的层级关系，把同一批用到的组件打包在同一个js文件中
//背后的原理：Vue异步的组件 和 webpack代码分割功能


const Find = ()=>import('./pages/Find-name.vue')
const FindDetail = ()=>import('./pages/FindDetail.vue')
// const user = ()=>import('/pages/user.vue')

import HomeMap from './pages/home/HomeMap.vue'
import Article from './pages/user/Article-name.vue'
import Collection from './pages/user/Collection-name.vue'


const routes = [
    // 当url=/home时，路由系统要找到一个叫default的视图容器来显示Home,
    //还要找到一个名字为abc的视图容器来显示Home
   {
    id:1,
    path:'/home',
    text: '首页',
    isNav:true,
    // component: Home,
    components: {
        map:HomeMap,
        video:HomeMap,
        exact:HomeMap,
        canvas:HomeMap
    }
  },
   {
    id:2,
    path:'/find',
    component: Find,
    text: '发现',
    isNav:true,
   },
   {
    id:3,
    path:'/user',
    component: ()=>import('./pages/user-name.vue'),
    text: '我的',
    isNav:true,
    //嵌套视图  一般用到二级嵌套足够了
    //怎么理解？在一级路由所匹配的的组件中使用<router-view>来显示二级路由所对应的组件
    children: [
        { path:'article',component:Article },
        { path:'collection',component:Collection },
        //{ path:'/user',redirect:'./user/article'}
    ]
   },
   {
    id:4,
    //:xx 是动态路由  一般用于列表页跳转到详情页
    //在详情页如何接收路由参数呢？有两种方式：
    // 1.直接使用this.$route.params.id来接收
    // 2,使用props选项来接收，但要求在路由匹配规则中开启props:true
    path:'/find/detail/:id:?=title' ,
    props:true,
    //别名一般以 / 开头，作用是简化path字段，易记
    alias:'/fd',
    //命名路由：给路由匹配规则加一个名字
    name:'fd',
    component:FindDetail,
    text:'商品详情',
    isNav:false,
    // meta:{title:'title'}
   }
]

//路由实例
const router = new VueRouter({
    //Hash路由和History路由有什么区别？
    //前者有#，后者没有#
    //实现原理不同:前者是锚点路由(hashchange),后者是浏览器路由（popstate）
    //部署结果不同，前者在部署上线没有任何问题，后者部署上线后会出现404（需要
    //后端服务器做重定向处理）
    
   routes: [
    ...routes,
    //重定向  一般放路由规则放在最后
    // { path:'/*',redirect:'/home'}
   ]
    
  
})


//要把关联起来  导出一个文件 在入口文件接收
export default router

 export { routes }

//在es6模块中，最多只能有一个 export default
//但可以有多个 export