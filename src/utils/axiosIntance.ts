import axios, { AxiosInstance, AxiosResponse } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.vatcomply.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  return Promise.resolve(response);
});

export default axiosInstance;
