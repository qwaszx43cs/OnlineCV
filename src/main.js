import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ScrollReveal from 'scrollreveal'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

// 滑动特效 全局属性
Vue.prototype.sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1500,
  reset: true
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
