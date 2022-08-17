import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import store from './modules/testStore.js'
import music from './modules/musicStore.js'

//根store
const store = new Vuex.Store({
    
    //如何理解modules？
    //这个概念只一种架构思维层面上的概念
    //作用是把根store拆分多个小的基于业务模块的小store
    //你可以把modules对象中的key 理解成子store的命名空间
    //在子store中，记得要动手开启命名空间namespaced:true
    modules:{
        test,
        music
    }
})

export default store

//简述描述一下vuex的流程
// 1,当组件中发生用户行为时,dispatch一个actions,同时传递调接口的入参
// 1,actions收到入参后，与后端发生交互,调接口
// 3、在actions中调接口成功后，commit一个mutations,同时传递业务数据
// 4、mutations收到业务数据后，将其更新到state上
// 5，凡是使用到state上这个业务的组件，都会自动渲染更新
