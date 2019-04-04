import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import moment from 'moment'
// import './loading.js'
axios.defaults.baseURL = 'http://localhost:8000'
Vue.prototype.moment = moment
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')