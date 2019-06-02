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
      return [
        {
          valor: -325.48,
          pago: "Centauros",
          data: "23/02/2019"
        },
        {
          valor: -3205.69,
          pago: "Kabum",
          data: "09/04/2019"
        },
        {
          valor: 995.78,
          pago: "Maria Silva",
          data: "06/05/2019"
        },
        {
          valor: -1257.25,
          pago: "Amazon",
          data: "13/04/2019"
        }
      ];
  }
}