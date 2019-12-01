// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketio from 'vue-socket.io'
import axios from './http'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import AnalogClock from 'vue-analog-clock'

Vue.use(new VueSocketio({
  debug: true,
  connection: 'https://petadise-backend-server.herokuapp.com',
  vuex: {}
}))

Vue.prototype.axios = axios

Vue.use(ElementUI)
Vue.use(AnalogClock)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
