import axios from 'axios';

export const api = axios.create({
  baseURL: `http://175.10.128.52:3333/api`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})