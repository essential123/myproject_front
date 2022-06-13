import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

//引入全局css global.css
import './assets/css/global.css'
//把axios放全局
import axios from "axios";
Vue.prototype.$axios=axios
//把settings放全局
import settings from "./assets/js/settings";
Vue.prototype.$settings=settings
//elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'






new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
