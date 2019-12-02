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
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(new VueSocketio({
  debug: true,
  connection: 'https://petadise-backend-server.herokuapp.com',
  vuex: {}
}))

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAQe5poi7QuJCNmCwq0EIsPlJ-vneVcUg4',
    libraries: 'places' // necessary for places input
  }
})

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
