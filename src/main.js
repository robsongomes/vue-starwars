import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes'
import VueRouter from 'vue-router'
import store from './store'

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
