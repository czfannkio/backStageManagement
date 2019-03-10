import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入组件
import login from '../components/login.vue'
import index from '../components/index.vue'

let routes = [{
    path: '/login',
    component: login
}, {
    path: '/index',
    component: index
}]

// 路由对象
let router = new VueRouter({
    routes
})

export default router;