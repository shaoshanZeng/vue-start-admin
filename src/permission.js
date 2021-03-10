// 权限 导航守卫
import router from './router'
import store from './store';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';
const whiteList = ['/login'];

router.beforeEach((to, from, next) => {
    console.log(store);
    NProgress.start();
    if (store.getters.token) {
        next();
        NProgress.done();
    } else {
        // 未登录
        if (whiteList.indexOf(to.path) != -1) {
            next();
        } else {
            console.log(to.path);
            next({ path: '/login' });
        }
        NProgress.done();

    }
})