import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes'
import VueRouter from 'vue-router'

const router = new VueRouter({
  routes
})

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
