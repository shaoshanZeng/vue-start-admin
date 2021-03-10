// import Vue from 'vue';
// import Vuex from 'vuex';
// import getters from '../getters'
// Vue.use(Vuex);
import {
    LOGIN
} from '@/apis/login'

// const store = new Vuex.Store({
//     state: {
//         count: 990,
//         counts: 100,
//         token: ""
//     },
//     mutations: {
//         add(state, num) {
//             state.counts += num;
//         },

//         SET_TOKEN(state, token) {
//             state.token = token;
//         },
//         DELETE_TOKEN(state, token) {
//             state.token = token;
//             console.log(state.token)
//         },
//     },
//     getters,
//     actions: {
//         add1(context, num) {
//             context.commit('add', num)
//         }, 
//         login({
//             commit
//         }, payload) {
//             return new Promise((resolve, reject) => {
//                 LOGIN(payload).then((response) => {
//                     console.log(response);
//                     const { data } = response;
//                     if (data) {
//                         commit('SET_TOKEN', data.token);
//                         setTimeout(() => {
//                             resolve()
//                         }, 2000);
//                     } else {
//                         reject();
//                     }
//                 })

//             })
//         },

//         // 退出登录
//         logout({ commit }) {
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     commit('DELETE_TOKEN', "")
//                     resolve()
//                 }, 1000)
//             })
//         }



//     }
// });

const state = {
    count: 990,
    counts: 100,
    token: ""
}
const mutations = {
    add(state, payload) {
        state.counts += payload;
    },

    SET_TOKEN(state, payload) {
        console.log(state)
        state.token = payload;
    },
    DELETE_TOKEN(state, payload) {
        state.token = payload;
        console.log(state.payload)
    },
}
const actions = {
    add1(context, num) {
        context.commit('add', num)
    },
    login({
        commit
    }, payload) {
        return new Promise((resolve, reject) => {
            LOGIN(payload).then((response) => {
                console.log(response);
                const {
                    data
                } = response;
                if (data) {
                    commit('SET_TOKEN', data.token);
                    setTimeout(() => {
                        resolve()
                    }, 1500);
                } else {
                    reject();
                }
            })

        })
    },

    // 退出登录
    logout({
        commit
    }) {
        return new Promise((resolve) => {
            setTimeout(() => {
                commit('DELETE_TOKEN', "")
                resolve()
            }, 1000)
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}