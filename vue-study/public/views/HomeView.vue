<template>
  <div id="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Hello word"/>
    <p
     v-for="(item,index) in array"
     :key="index"
    >
    {{item}}
    {{index}}
    </p>
    姓名：{{ name }}
    <p>姓名：<input type="text" v-model="name">
       <button @click="handel">添加</button>
    </p>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data(){
    return{
      name:'',
      array:[]
    }
  },
  methods: {
     handel() {
      if(this.name){
          this.array.push(this.name)
          this.name = ''
      }
     }
  }
}
</script>
