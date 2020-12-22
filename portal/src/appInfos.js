const genActiveRule = routerPrefix => {
  return location => location.pathname.startsWith(routerPrefix)
}

const appInfos = process.env.NODE_ENV === 'production'
// href 地址 请填写 子项目 package.json里的name 字段
  ? [  // 生产环境 子应用 配置项
    // 整个微服务采用了 browserhistory模式
    // ======= 单独部署 ====== 
    //  填写 项目url 地址 如 https://aistatic.huiqulx.com
    // =======  部署在 主应用下的目录里  ====== 
    // 如 /subapp/sub-app2/ 文件夹内 请填写 /subapp/sub-app2/index.html
    // ------- 修改 vue.config.js 中的publicPath
    // 部署的时候 如果在根目录下 请填写 process.env.VUE_APP_BASE_PATH
    // 如果在二级目录里 请填写 对应的 二级目录  如 /subapp/sub-app2/
    // 如果单独部署 直接填写 url地址 如 https://aistatic.huiqulx.com/ 
    // 单独部署 请注意 是 history 路由模式 请 nginx 支持 
    // 如果 部署在主应用 目录下 如 /subapp/sub-app2/ 文件夹内 请填写 /subapp/sub-app2/index.html
    { name: 'sub-app1', entry: '/subapp/sub-app1/index.html', href: '/sub-app1' },
    { name: 'sub-app2', entry: '/subapp/sub-app2/index.html', href: '/sub-app2' },
    { name: 'sub-app3', entry: 'https://aistatic-dev.huiqulx.com/activity/index.html', href: '/sub-app3' },
    { name: 'sub-app4', entry: 'https://aistatic.huiqulx.com/activity1/index.html', href: '/sub-app4' },
  ]
  : [  // 开发环境 子应用 配置项
    { name: 'sub-app1', entry: '//localhost:8081', href: '/sub-app1' },
    { name: 'sub-app2', entry: '//localhost:8082', href: '/sub-app2' },
    { name: 'sub-app3', entry: '//localhost:8083', href: '/sub-app3' },
    { name: 'sub-app4', entry: '//localhost:8084', href: '/sub-app4' },
  ]
// 如果 编辑  子应用信息异常 抛出 错误
for (let i = 0; i < appInfos.length; i++) {
  if ('/' + appInfos[i].name !== appInfos[i].href) {
    throw  `${appInfos[i].name}子应用: 请保证name字段和href字段 一致 例子 name: sub-app1 href: /sub-app1`
  } else if (!appInfos[i].entry) {
    throw `${appInfos[i].name}子应用: 请填写 entry字段， 如不明白 请联系 csj`
  }
}
const menus = [  // 子应用与菜单
  {
    appName: '第一个子应用',
    appPrefix: '/sub-app1',
    icon: 'el-icon-bell',
    // noDisplay: true,  // 是否具有该权限
    // ...  一些其他的信息
    appMenus: [
      { 
        menuName: '一级菜单首页',
        path: '/',
        icon: 'zht-icon-success',
        // ...  权限等信息 
      },
      {
        menuName: '一级菜单关于',
        path: '/about',
        icon: 'el-icon-user',
        children: [
          { menuName: '二级菜单', path: '/about/index',icon: 'el-icon-user' },
          {
            menuName:'二级菜单',
            path: '/about/index/sub',
            icon: 'el-icon-user',
            hidden: true,
            noDisplay: true
          },
        ]
      },
      {
        menuName: '一级菜单哈哈',
        path: '/home',
        icon: 'el-icon-user',
        noDisplay: true
      },
      {
        menuName: '一级菜单lala',
        path: '/lala',
        icon: 'el-icon-user',
        children: [
          {
            menuName: '二级菜单aaa',
            path: '/lala/aaa',
            icon: 'el-icon-user',
            children: [
              {
                menuName: '三级菜单bbb',
                path: '/lala/aaa/bbb',
                icon: 'el-icon-user'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    appName: '第二个子应用',
    appPrefix: '/sub-app2',
    // noDisplay: true,
    appMenus: [
      {
        menuName: '一级菜单',
        path: '/',
        icon: 'el-icon-user',
        children: [
          {
            menuName: '二级菜单',
            path: '/bbb',
            icon: 'el-icon-user',
          }
        ]
      },
      {
        menuName: '一级菜单',
        path: '/about',
        icon: 'el-icon-user'
      }
    ]
  },
  {
    appName: '第三个子应用',
    appPrefix: '/sub-app3',
    // noDisplay: true,
    appMenus: [
      {
        menuName: '一级菜单',
        path: '/',
        icon: 'el-icon-user'
      },
      {
        menuName: '一级菜单',
        path: '/about',
        icon: 'el-icon-user'
      }
    ]
  },
  {
    appName: '测试重连机制',
    appPrefix: '/sub-app4',
    // noDisplay: true,
    appMenus: [
      {
        menuName: '1111',
        path: '/',
        icon: 'el-icon-user'
      },
      {
        menuName: '2222',
        path: '/about',
        icon: 'el-icon-user'
      }
    ]
  },
]

export { appInfos, genActiveRule, menus }
