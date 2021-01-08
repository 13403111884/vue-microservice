export default {
  beforeLoad: [app => {
    // console.log('加载前', app)
  }],
  beforeMount: [app => {
    // console.log('挂载前', app)
  }],
  afterUnmount: [app => {
    // console.log('挂载后', app)
  }],
  afterMount: [app => {
    // console.log('卸载前', app)
  }],
  beforeUnmount: [app => {
    // console.log('卸载后', app)
  }]
}
