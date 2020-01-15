var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
//为了只在开发环境使用mock.js，而打包到生产环境时自动不使用mock.js，做以下配置
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  Moke:true
})
