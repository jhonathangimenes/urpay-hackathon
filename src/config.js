import axios from 'axios';

export const api = axios.create({
  baseURL: `http://devsterpay.herokuapp.com/api`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})