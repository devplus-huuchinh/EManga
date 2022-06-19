import axios from 'axios';
import queryString from 'query-string';
const user = localStorage.getItem('access_token');
const axiosClient = axios.create({
  withCredentials: true,
  baseUrl: 'http://localhost/api/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log(token);
  return config;
});

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
});

export default axiosClient;
