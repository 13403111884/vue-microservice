import { registerMicroApps, start } from 'qiankun'
import lifeCycles from './lifeCycles'
import { appInfo } from '../config/url'
const container = '#appContainer'

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
  const apps = appInfo.map(item => {
    const route = `/${item.name}`

    props.base = route
    item.activeRule = route
    item.entry = getEntry(item.dev, `hrss-${item.name}`)
    item.props = props
    item.container = container
    console.log(container, process.env.NODE_ENV, item.entry, item.name)
    return item
  })
  registerMicroApps(apps, lifeCycles)
  start({
    // 自定义的子应用请求方法
    // fetch: (url) => {
    //   console.log('fetch: (url)', url)
    // }
  })
}

export default microApps 