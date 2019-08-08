import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
// 引入设置rem基准值
import 'amfe-flexible'
// 引入vant
import Vant from 'vant'
// 引入vant样式
import 'vant/lib/index.css'

// vue使用vant
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
