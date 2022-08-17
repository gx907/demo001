import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
    //如何理解state
    //凡是定义在state中的数据，在所有Vue组件中都可以访问
    //当state中的数据发生变化时，使用到state数据的组件会自动更新
    state:{
        username:2021
    },
    //如何理解Mutations?
    //它是Vuex中建议的唯一用于修改state的方式
    //所有的mutations方法的的一个参数都是state.第二个参数是用于修改state的源数据
    //（往往来自于组件）
    mutations:{
        changeUN(state,payload){//负载  负荷
          state.username = payload
        }
    },
    //如何理解actions?
    //它是Vuex中建议的唯一用于和后端API进行通信的方式
    //所有的actions方法的第一个参数都是store实例，第二个参数常常是调接口的入参（往往来自于组件）
    actions:{
        fetchUN(state,params){
            setTimeout(()=>{
                console.log(state,params);
                //向后端返回用户信息
              store.commit('changeUN','From Api UserName')
            },2000)
        }
    },
    //如何理解getters?
    //它相当于是Vue中的计算属性，当它所关联的state发生变化时，
    //会重新计算
    getters:{
        unLength(state){
          //复杂的运算
          return state.username.length
        }
    },
    //如何理解modules？
    //这个概念只一种架构思维层面上的概念
    //作用是把根store拆分多个小的基于业务模块的小store

    modules:{}
})

export default store