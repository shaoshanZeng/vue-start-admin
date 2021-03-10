import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 权限 导航守卫
import './permission'
// 请求
import axios from '@/utils/request'
Vue.prototype.$axios = axios

// store
import store from '@/store'

// utils
import utils from '@/utils'
Vue.prototype.utils = utils;

Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false



new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')