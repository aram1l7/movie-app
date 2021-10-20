import axios from 'axios';
import queryString from 'query-string';

import api from './config';

const axiosCall = axios.create({
    baseURL: api.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: api.apiKey})
});

axiosCall.interceptors.request.use(async (config) => config);

axiosCall.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default axiosCall;