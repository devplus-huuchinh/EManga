import axiosClient from "./axiosClient";

const authApi = {
  login: (data) => {
    const url = "/auth/login";
    return axiosClient.post(url, data);
  },

  register: (data) => {
    const url = "/auth/register";
    return axiosClient.post(url, data);
  },

  logout: (data) => {
    const url = "/auth/logout";
    return axiosClient.post(url, data);
  },

  csrfCookie: (data) => {
    const baseURL = "http://localhost/sanctum/csrf-cookie";
    return axiosClient.get(baseURL, data);
  },
};

export default authApi;
