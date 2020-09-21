import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.nytimes.com/svc/',
  timeout: 10000,
});

export default api;
