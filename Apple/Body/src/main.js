import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/fonts/stylesheet.css'
import './assets/tailwind.css'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
