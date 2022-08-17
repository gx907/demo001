import axios from 'axios'

const baseURL = 'http://localhost:8080'

// 创建axios实例
const instance = axios.create({
  baseURL,
  timeout: 7000,
  headers: {}
})

// 封装请求拦截器
instance.interceptors.request.use(function (config) {
  // 对config进行二次处理、添加公共的config
  // 一般在这里统一加token
  // console.log('请求拦截器', config)
  return config
}, function (error) {
  return Promise.reject(error)
})

// 封装响应拦截器
instance.interceptors.response.use(function (response) {
  // 根据HTTP状态码来判断请求成功与否
  // 根据业务状态码来判断业务成功与否
  // 数据过滤
  let res = null
  if (response.status === 200) {
    const data = response.data
    if(data.code === 0) {
      // data.data
      res = data.data
    }else{ 
      alert(data.message)
    }
  }else{
    alert('网络异常，稍后再试')
  }
  // console.log('响应拦截器', response)
  return res
}, function (error) {
  return Promise.reject(error)
})

export default instance

