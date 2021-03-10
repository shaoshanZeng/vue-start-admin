import Vue from 'vue'
import VueRouter from 'vue-router'
import knowledge from './modules/knowledge'

const routes = [{
        path: "/login",
        component: () =>
            import ( /* webpackChunkName: "login" */ '@/views/login')
    },
    {
        path: "/",
        component: () =>
            import ( /* webpackChunkName: "home" */ '@/views/home')
    },
]

const newRouter = [...routes, knowledge];
const router = new VueRouter({
    mode: "history",
    routes: newRouter // (缩写) 相当于 routes: routes
})

Vue.use(VueRouter)
export default router;