import Vue from 'vue'
import App from './App.vue'
import './assets/jq'
import './assets/tailwind.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
