import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Cateory = () => import('views/category/Category.vue')
const Cart = () => import('views/cart/Cart.vue')
const ProFile = () => import('views/profile/ProFile.vue')
const Detail = () => import('views/detail/Detail.vue')


Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Cateory
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/profile',
        component:ProFile
    },
    {
        path:'/detail/:iid',
        component:Detail
    },
]

export default new VueRouter({
    routes,
    mode:'history'
})