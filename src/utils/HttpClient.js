import axios from "axios";
import join from "url-join";
import { server, apiUrl } from "../constants";

const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

axios.interceptors.request.use(async (config) => {
  if (!isAbsoluteURLRegex.test(config.url)) {
    config.url = join(apiUrl, config.url);
  }

  const userToken = localStorage.getItem(server.TOKEN_KEY);
  if (userToken) {
    config.headers = { "x-access-token": userToken };
  }
  config.timeout = 10000; // 10 Second
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // debugger;
    console.log(error.response);
    if (error.response.status === "401") {
      const refreshToken = localStorage.getItem(server.REFRESH_TOKEN_KEY);
      const refreshUrl = `${apiUrl}/${server.REFRESH_TOKEN_URL}`;
      let result = await axios.post(refreshUrl, { refreshToken });

      const token = result.data.jwt;
      localStorage.setItem(server.TOKEN_KEY, token);
      // debugger;
      return axios.request(error.config);
    } else if (error.response.status === "403") {
      // force logout
      localStorage.removeItem(server.TOKEN_KEY);
      localStorage.removeItem(server.REFRESH_TOKEN_KEY);
    }else{
      console.log(error);
    }

    return Promise.reject(error);
  }
);

export const httpClient = axios;