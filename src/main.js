import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vuetify from './plugins/vuetify';

axios.defaults.baseURL = "https://pokeapi.com/api/v2"
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
