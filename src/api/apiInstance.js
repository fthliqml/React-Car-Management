import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  timeout: 10000,
});

/**
 
Example if accessToken is accessible

const token = localStorage.getItem("token");

apiInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
*/

export default apiInstance;
