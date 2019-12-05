import Vue from 'vue'
import  VueRouter from 'vue-router'

const Home = ()=> import('../views/home/Home')
const Cart = ()=> import('../views/cart/Cart')
const CateGory = ()=> import('../views/category/Category')
const Profile = ()=> import('../views/profile/Profile')


// 1、安装插件
Vue.use(VueRouter)

// 2、创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: CateGory
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router