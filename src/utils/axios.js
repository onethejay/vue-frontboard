import axios from 'axios';

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('user_token');
  config.headers.Authorization = "Bearer " + token;
  return config;
});

axios.interceptors.response.use(function (config) {
  return config
});

export default axios;