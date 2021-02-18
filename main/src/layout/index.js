const modulesArr = {}
const modules = require.context('./modules/', true, /\.vue$/)
modules.keys().forEach(key => {
  const el = modules(key).default
  modulesArr[el.name] = modules(key).default
})

export default {
  ...modulesArr
}
