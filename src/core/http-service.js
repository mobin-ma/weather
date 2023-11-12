import axios from "axios";

const BASE_URL = "https://api.weatherapi.com/v1";
export const KEY = "3dc6a2698dc149cea28185429230811";

export const httpInterceptedService = axios.create({
  baseURL: BASE_URL,
});

httpInterceptedService.interceptors.request.use(
  async (config) => {
    config.headers = {
      accept: "application/json",
    };
    return config;
  },
  (error) => Promise.reject(error)
);
