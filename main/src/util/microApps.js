import vue from 'vue';
import { registerMicroApps, start, initGlobalState  } from 'qiankun'
import { appInfo } from '../config/url'
import lifeCycles from './lifeCycles'
const container = '#appContainer'
const initialState = vue.observable({
  parent: 0
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
  props.Vue.prototype.$appData = initialState
  const apps = appInfo.map(item => {
    const route = `/${item.name}`
    item.activeRule = route
    item.entry = getEntry(item.dev, `hrss-${item.name}`)
    item.props = props
    item.container = container
    return item
  })

  registerMicroApps(apps, lifeCycles)

  const actions = initGlobalState(initialState)
  actions.onGlobalStateChange((state, prev) => {
    Object.keys(state).forEach(key => {
      initialState[key] = state[key]
    })
  })
  actions.setGlobalState({parent: 1})

  // setDefaultMountApp('app-sbu-a')
  
  start({
    //开启沙盒模式
    // sandbox :{strictStyleIsolation: true}
    // 自定义的子应用请求方法
    // fetch: (url) => {
    //   console.log('fetch: (url)', url)
    // }
  })

  return actions
}

export default microApps 