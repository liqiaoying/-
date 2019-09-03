import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
const Layout = () => import("@/views/layout/Layout");

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index'),
        name: 'Home',
        meta: { title: '首页', icon: 'home', noCache: true, affix: true }
      }
    ]
  },
  {
    path: '*',
     component: () => import('@/views/errorPage/404'),
    // （这个地方需要重新配置下跳转页面，目前是跳到404页面的， ） 
    // 用注释的执行代码，记忆功能出现问题，每次关闭页面后不会记录tab的值，再次打开后会把之前的记忆再次执行
    // component: () => import('@/views/home/index'),
    //  redirect: 'home',
     hidden: true,
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})