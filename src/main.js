// 项目入口，配置全局vue
import Vue from 'vue'
import VueRouter from './router/index.js'
import store from './store'
import { HttpPlugin } from './http'
import './assets/less/index.less'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
 import { Dialog } from 'vant';
 import './assets/iconfont/iconfont.css';
 /* 外面框架结构 */
 require('./assets/conf/moke/index.js');
// 全局注册
Vue.use(Dialog);
Vue.use(Vant);
Vue.use(HttpPlugin);
new Vue({
	router:VueRouter,
	store,
	template:'<App/>',
	components: {App}
}).$mount('#app');

