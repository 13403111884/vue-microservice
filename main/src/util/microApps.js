import vue from 'vue';
import { registerMicroApps, start } from 'qiankun'
import { appInfo } from '../config/url'
import lifeCycles from './lifeCycles'
import modules from './../layout'

const container = '#appContainer'
const initialState = vue.observable({
  parent: 0,
  a: 0
})

const getEntry = (url, prefix) => {
  const env = process.env.NODE_ENV === 'development'
  if (env) {
    return url
  } else {
    const hostname = window.location.hostname
    const urlArr = hostname.split('.')
    urlArr.splice(0, 1, prefix).join('.')
    return urlArr
  }
}

const microApps = (props = {}) => {
  props.modules = modules
  props.Vue.prototype.$appData = initialState
  props.$appData = initialState
  const apps = appInfo.map(item => {
    const route = `/${item.name}`
    item.activeRule = (location) => {
      if (location.pathname.includes(route)) {
        return true
      }
      return false
    }
    item.entry = getEntry(item.dev, `hrss-${item.name}`)
    item.props = props
    item.container = container
    return item
  })

  registerMicroApps(apps, lifeCycles)

  // setDefaultMountApp('app-sbu-a')
  
  start({
    // 是否为单实例
    singular: false,
    //开启沙盒模式
    sandbox: { experimentalStyleIsolation: true },
    // 自定义的子应用请求方法
    // fetch: (url) => {
    //   console.log('fetch: (url)', url)
    // },
  })

  // return actions
}

export default microApps 