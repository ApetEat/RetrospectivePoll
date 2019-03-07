import Vue from 'vue';
import App from './App.vue';
import './assets/scss/main.scss';
import VueRouter from 'vue-router';
import {routes} from './routes.js';
import {store} from './store/store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})