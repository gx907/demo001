const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false
})


// 什么是跨域？只要是协议，端口，域名，只有一个不相同就是跨域
//什么是同源策略？只有浏览器中才有，限制ajax跨域请求
//怎么解决跨域问题？

//1，让前后端代码都在同个域上
//2，通过代理的方式，绕过CORS同源策略
// module.exports = {
//   devServer:{
//     proxy:{
//       '/soso':{
//         target:'http://c.y.qq.com',
//         changeOrigin:true
//       }
//     }
//   }

// }