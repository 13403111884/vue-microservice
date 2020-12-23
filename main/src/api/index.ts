import API from './../plugins/axios'

// 示例
// Interface ({ data, params }) {
//   return API({
//     method: 'post', // 请求方式,不传默认get
//     url: '', // 请求路径，接口地址
//     timeout: 5000, // 请求超时, 不传默认10秒
//     headers: {}, // header体属性, 不传默认 任何请求方式都支持 body和url 传参
//     data, // body参数, 格式 data: { key: value, ... }
//     params // url参数，格式 params: { key: value, ... }
//   })
// }
import serveFiles from 'globby!/@api/serve/*'

const Interface: any = Object.values(serveFiles).reduce((modules: any, module: any) => {
  modules = {
    ...modules,
    ...module(API)
  }
  return modules
}, {})

export default Interface
