import { resolve } from 'path'
function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

const sharedConfig = {
  alias: {
    "/@/": pathResolve("src"),
    "/@api/": pathResolve("src/api"),
    "/@store/": pathResolve("src/store"),
    "/@assets/": pathResolve("src/assets"),
    "/@config/": pathResolve("src/config"),
    "/@plugins/": pathResolve("src/plugins"),
    "/@util/": pathResolve("src/util"),
    "/@libs/": pathResolve("src/libs"),
    "/@m/": pathResolve("src/modules"),
  }
}

module.exports = {
  ...sharedConfig,
  cssPreprocessOptions: {
    stylus: {
      import: resolve(__dirname, './src/assets/style/variables.styl')
    }
  },
  transforms: [require('vite-transform-globby-import')(sharedConfig)]
}