import Vue from 'vue'
import Vuex from 'vuex'
import service from './service.js'
import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    extrato: [],
    loader: false
  },
  mutations: {
    getExtrato: (state, payload) => {
      state.loader = true
      setTimeout(() => { 
        state.extrato = payload
        state.loader = false
       }, 3000);
    }
  },
  actions: {
    auth: (context, payload) => {
      service.auth(payload.email, payload.password).then(response => {
      localStorage.setItem("user", JSON.stringify(response.data));
      router.push('/')
      }).catch(e => {
        console.log(e)
      });
    },
    register: (context, payload) => {
      service.register(payload).then(response => {
        localStorage.setItem("user", JSON.stringify(response.data));
        router.push('/')
      }).catch(e => {
        console.log(e)
      });
    },
    getExtrato: (context, payload) => {
      context.commit('getExtrato', service.extrato())
    }
  }
})
