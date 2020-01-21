/* eslint-disable */
require('eventsource-polyfill')
// 模块热替换，在应用程序运行的过程中替换、添加或删除模块，而无需加载整个页面 
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
