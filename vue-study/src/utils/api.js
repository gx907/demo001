import axios from './axios'

// 1、url  2、请求方式  3、入参
// axios发请求，
// 如果是GET请求使用params属性入参
// 如果是POST请求使用data属性入参

// 调QQ音乐列表
export function fetchQqList(params) {
  return axios({
    url: '/soso/fcgi-bin/client_search_cp',
    method: 'GET',
    params
  })
}

export default {
  fetchQqList
}