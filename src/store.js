import Vue from 'vue'
import Vuex from 'vuex'
import service from './service.js'
import router from './router';
import { CLIENT_RENEG_WINDOW } from 'tls';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    extrato: [],
    users: [],
    loader: false
  },
  mutations: {
    getExtrato: (state, payload) => {
      state.extrato = payload
    },
    getUsers: (state, payload) => {
      state.users = payload
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
    getExtrato: (context, payload, state) => {
      localStorage.getItem('user') == null 
        ? router.push('/login')
        : service.extrato().then(response => {
          context.commit('getExtrato', response.data)
          state.loader = false
          }).catch(e => {
            console.log(e)
          });
    },
    getUsers: (context, payload, state) => {
      service.getUsers().then(response => {
        context.commit('getUsers', response.data)
        }).catch(e => {
          console.log(e)
        });
    },
    transferr: (context, payload) => {
      service.transferencia(payload).then(response => {
        console.log(response)
        }).catch(e => {
          console.log(e)
        });
    }
  }
})
