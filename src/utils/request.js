import axios from 'axios';
import store from '../store';
import {
    Message
} from 'element-ui';
console.log(process.env.VUE_APP_BASE_API);

const whiteList = [
    "/sysuser/login",
]

export const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
    }
});

service.interceptors.request.use((config) => {
    // Do something before request is sent
    console.log("axios请求");
    console.log(config)
    if (whiteList.indexOf(config.url) !== -1) {
        return config;
    } else {
        // 登录
        if (store.getters.token) {
            console.log("正常请求");
        } else {
            Message({
                message: '请先登录',
                type: 'warning'
            });
        }
    }

    return config;
}, function(error) {
    // Do something with request error 
    return Promise.reject(error);
});


service.interceptors.response.use((response) => {
    // Do something with response data
    console.log("axios响应");
    const {
        data
    } = response
    return data;
}, function(error) {
    // Do something with response error
    return Promise.reject(error);
});