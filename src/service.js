import { api } from './config.js';

export default {
  auth(email, password) {
    return api.post('/user/login', {
      email: email,
      password: password
    })
  },
  register(user) {
    return api.post('/user/register', {
      name: user.name,
      email: user.email,
      password: user.password
    })
  },
  extrato() {
    let user = JSON.parse(window.localStorage.getItem('user')) ;
    let id = user.id
    return api.get(`/transactions/${id}`)
  },
  transferencia(transfer) {
    return api.post('/transactions/transfer', {
      transferValue: transfer.valor,
      userCreditId: transfer.userCred,
      userDebitId: transfer.userDeb
    })
  },
  getUsers() {
    return api.get('/user/getAll')
  }
}