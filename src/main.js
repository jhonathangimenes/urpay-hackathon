import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import money from 'v-money';

Vue.use(money, {precision: 4})

import '@fortawesome/fontawesome-free/css/all.css';
import Gravatar from 'vue-gravatar';


Vue.component('v-gravatar', Gravatar);

Vue.use(Vuetify, {
  iconfont: 'fa'
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
