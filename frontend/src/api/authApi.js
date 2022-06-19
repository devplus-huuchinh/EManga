import axiosClient from './axiosClient';

const authApi = {
  login: (data) => {
    const url = 'http://localhost/api/auth/login';
    return axiosClient.post(url, data);
  },

  register: (data) => {
    const url = 'http://localhost/api/auth/register';
    return axiosClient.post(url, data);
  },

  logout: (data) => {
    const url = 'http://localhost/api/auth/logout';
    return axiosClient.post(url, data);
  },

  csrfCookie: (data) => {
    const baseURL = 'http://localhost/sanctum/csrf-cookie';
    return axiosClient.get(baseURL, data);
  },

  userProfile: (data) => {
    const url = 'http://localhost/api/auth/userProfile';
    return axiosClient.get(url, data);
  },
};

export default authApi;
