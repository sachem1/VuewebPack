import Vue from 'vue';
import App from './index.vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations:
    {
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
    store: store,
    render: h => {
        return h(App)
    }
});