import axios from "axios";
import queryString from "query-string";

import apiConfig from "./apiConfig";

const axiosClientLg = axios.create({
    baseURL: "https://api.ezfrontend.com/",
    headers: {
        "Content-Type": "application/json",
    },
    paramsSerializer: (params) => queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
});
axiosClientLg.interceptors.request.use(async (config) => config);

axiosClientLg.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }

        return response;
    },
    (error) => {
        throw error;
    }
);

export default axiosClientLg;
