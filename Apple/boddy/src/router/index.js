import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import iPhone from '@/views/iPhone'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/iphone',
            name: 'iPhone',
            component: iPhone
        },
    ]
});