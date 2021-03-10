import { service } from '@/utils/request'

// 登录
export const LOGIN = data => {
    return service({
        url: "/sysuser/login",
        method: "POST",
        data
    })
}