import Axios from 'axios';
import baseURL from './../config/url';

const service = Axios.create({ withCredentials: false, baseURL })
// 请求拦截器
service.interceptors.request.use(config => {
  config.headers['token'] = sessionStorage.getItem("token") ? sessionStorage.getItem("token") : ''
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
service.interceptors.response.use(config => {
  return config
}, err => {
  if (err.message.includes('timeout') || err.message.includes('Network Error')) {
    console.log(`网络异常，请重新尝试`)
  }
  return Promise.reject(err)
})

function API (config: any | undefined) {
  const {
    url = '',
    data = null,
    params = null,
    headers = {},
    method = 'get',
    timeout = 3000
  } = config || {}
  return new Promise((resolve, reject) => {
    service({
      method, // 请求方式
      url, // 请求路径
      timeout, // 请求超时
      headers: {
        "content-type": "application/json",
        ...headers
      }, // header体
      data, // body参数
      params //  URL参数
    }).then(res => {
      if (res.data.code) {
        console.log(res.data.message)
      }
      resolve({
        ...res.data,
        headers: res.headers
      })
    }).catch(err => {
      reject(err)
      return err
    })
  })
}

export default API
