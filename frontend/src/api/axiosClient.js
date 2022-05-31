import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  withCredentials: true,
  baseUrl: `${process.env.REACT_APP_NAME}/api/`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    // 'X-CSRF-TOKEN': window.csrf_token,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("id_token");
  if (token) {
    config.headers.Authorization = `Bearer  + ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
});

export default axiosClient;
