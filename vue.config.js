const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  },
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        'styles': '@/assets/styles'
      }
    }
  }
}
