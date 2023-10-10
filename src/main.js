import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueAxios from 'vue-axios'
axios.defaults.baseURL = process.env.VUE_APP_ROOT_API
axios.defaults.headers = {
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'application/json',
  'Accept': 'application/json',
  'content-type': 'application/json',
  'Content-Security-Policy': 'frame-ancestors https://serviciopagina.upea.bo'
}
createApp(App).use(store).use(router).use(vueAxios, axios).mount('#app')
