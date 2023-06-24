import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const axiosInstance = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://dropmail.me/api/graphql/${apiKey}`,
});

export default {
  install: (app) => {
    app.config.globalProperties.$axios = axiosInstance;
  },
};
