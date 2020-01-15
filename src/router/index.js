// 引入vue及相关插件
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// 注册插件
Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history'
  })
  router.beforeEach((to, from, next) => {
    //const access_token = store.state.user.access_token
    const access_token =  sessionStorage.getItem('access_token') 
     console.dir(access_token)
     console.dir(to.name)
    // console.dir('route~~~~~~~~~~' + to.name)
    if (!access_token && to.name === 'login') {
        console.dir("!token+login")
      next()
    }
     if (!access_token && to.name === 'home') {
        console.dir("!token+home")
      next('/predealapp/login')
    } 
    if (!access_token && to.name !== 'login' && to.name !== 'home') {
        console.dir("!token+!home+!login")
      next('/predealapp/login')
    } 
    if (access_token && to.name === 'login') {
        console.dir("token+login")
        console.dir(to.name)
      next()
    } 
    if (access_token && to.name !== 'login') {
        console.dir("token+!login")
        console.dir(to.name)
        next()
      }
   
  next()
  })
  
  router.afterEach(to => {
  window.scrollTo(0, 0)
  })
  export default router