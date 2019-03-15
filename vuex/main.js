import Vue from 'vue';
import App from './index.vue';
import Vuex from 'vuex';
import Vuerouter from 'vue-router';
import {
    resolve
} from 'url';

Vue.use(Vuex);
Vue.use(Vuerouter);

const Routers = [{
            path: '/index',
            meta: {
                title: '首页'
            },
            component: (resolve) => require(['./views/index.vue'], resolve)
        },
        {
            path: '/about',
            meta: {
                title: '关于'
            },
            component: (resolve) => require(['./views/about.vue'], resolve)
        },
        {
            path: '/user/:id',
            meta: {
                title: '个人主页'
            },
            component: (resolve) => require(['./views/user.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/index'
        }
]
const RouterConfig={
    mode:'history',
    routes:Routers
}

const router =new Vuerouter(RouterConfig);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state, n) {
            state.count += n;
        },
        decrease(state, n) {
            state.count -= n;
        }
    }
})

new Vue({
    el: '#app',
    router:router,
    store: store,
    render: h => {
        return h(App)
    }
});