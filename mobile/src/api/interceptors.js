import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.56.1:3333/api';

axios
    .interceptors
    .request
    .use(config => {
        // Do something before request is sent
        return config;
    }, error => {
        // Do something with request error
        return Promise.reject(error);
    });

axios
    .interceptors
    .response
    .use(response => {
        // Do something with response data
        return response.data;
    }, error => {
        // Do something with response error
        return Promise.reject(error);
    });
