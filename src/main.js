import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'

Vue.config.productionTip = false

// 引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';  
Vue.use(ElementUI);

// 本地存储
import local from '@/assets/js/local.js';
Vue.prototype.$local = local;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
