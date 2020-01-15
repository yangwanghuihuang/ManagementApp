
技术栈
------

前端：Vue2 + Vuex + Vue-Router2 + Axios + Webpack + ES6/7 + Less + vant



# 安装依赖
npm install

```

项目运行
--------

npm run dev
```

项目编译打包
------------

```bash
npm run build

```

项目结构
--------

```
|-- api                            // 项目接口定义  module.exports = apiRoutes;
|
|-- build                            // webpack配置文件
|
|-- config                           // 项目配置文件
|
|-- dist                            // 项目打包文件
|
|-- src                              // 源码目录
|   |-- assets                       // 项目公共资源
|   |-- components                   // 组件库
|   |-- pages                        // 项目页面模块
|   |-- router                       // 路由文件
|   |-- store                        // vuex的状态管理
|   |-- App.vue                      // 页面入口文件
|   |-- http.js                      // axios封装
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|
|-- static                          //一些静态资源，不会被webpack编译
|
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 代码编写规格
|-- .gitignore                       // 忽略的文件
|-- index.html                       // 入口html文件
|-- package.json                     // 项目及工具的依赖配置文件
|-- README.md                        // 说明
```
