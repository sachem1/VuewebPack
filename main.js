import './style.css';
import Vue from 'vue';
import App from './app.vue';
import vueRouter from 'vue-router'

document.getElementById('app').innerHTML = "Hello Webpack.";

Vue.use(vueRouter);

const Routers=[
    {
        path:'/index',
        component:(resolve)=>require(['./views/index.vue'],resolve)
    },
    {
        path:'/about',
        component: (resolve) => require(['./views/about.vue'], resolve)
    }
]
const RouteeConfig={
    mode:'history',
    routes: Routers
}

var router=new vueRouter(RouteeConfig);
router.beforeEach((to,from,next)=>{
    window.document.title=to.meta.title;
    next();
    //也可以滚动到指定位置
    window.scrollTo(0,0);
    //可以做判断跳转
    if(window.localStorage.getItem('token')){
        next();
    }
    else{
        next('/login')
    }
});

new Vue({
    el: '#app',
    router:router,
    render: h => h(App)
});