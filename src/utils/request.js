import axios from 'axios'
import store from '../store'
import { getToken } from '@/utils/auth'

const BASE_URI = 'http://localhost:8080'

// download url
const downloadUrl = url => {
  window.open(url)
}

// 创建axios实例
const service = axios.create({
  baseURL: BASE_URI,
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers.Authorization = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    // 下载文件逻辑
    if (response.headers && response.headers['content-type'] === 'application/octet-stream') {
      downloadUrl(response.request.responseURL)
      return response
    }
    return response
  },
  error => {
    console.log('err' + error)// for debug
    return Promise.reject(error)
  }
)

export default service
