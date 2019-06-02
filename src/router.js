import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Registrar from './views/Registrar.vue'
import about from './views/About.vue';
import { CLIENT_RENEG_WINDOW } from 'tls';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: Registrar
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]
});
