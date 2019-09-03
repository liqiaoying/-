import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // getToken from cookie
import Cookies from 'js-cookie' // 设置cookie


NProgress.configure({ showSpinner: false }) // NProgress Configuration
    // 动态改造路由
function mapRouter(roles, n) { // 遍历后台传来的路由字符串，转换为组件对象
    n = n;
    let item_data = [];
    let item = [];
    roles.forEach((route, i) => {
        let component = route.pageUrl
        if (n == 0) { // 第一级遍历
            item = {
                "path": "/lottery" + route.id,
                "component": component,
                "name": 'lottery' + route.id,
                "meta": {
                    "title": route.permissionName,
                    "icon": route.icon
                }
            }
        } else {
            if (component == 'layout/Layout') {
                component = 'home';
            }
            item = {
                "path": 'lottery' + route.id + '/' + route.pageUrl,
                "component": component,
                "name": 'lottery' + route.id,
                "meta": {
                    "title": route.permissionName,
                    "id": route.id
                }
            }
        }

        item_data.push(item);
        if (route.children && route.children.length) {
            item_data[i].children = [];
            n = n + 1;
            let children_data = mapRouter(route.children, n) // 递归循环调用方法
            item_data[i].children = children_data
            n = n - 1;
        }
        return
    })
    return item_data
}

function hasPermission(roles, permissionRoles) { // 权限判断方法
    if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
    if (!permissionRoles) return true
    return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach((to, from, next) => { // 全局守卫
    // console.log('a01-----------------')
    store.dispatch('GetNavBar', to.path)
    NProgress.start() // start progress bar
    if (getToken()) { // determine if there has token
        // console.log('a02-----------------')
        /* has token*/
        if (to.path === '/login') {
            // console.log('a03-----------------')
            next({ path: '/' })
            NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
        } else {
            if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
                // console.log(Cookies.get('SET_NAME'))
                store.dispatch('GetUserInfo', Cookies.get('SET_NAME')).then(res => { // 拉取user_info
                    // console.log('a04-----------------')
                    const roles = mapRouter(res, 0) // 动态设置路由
                    store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
                        router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
                            // res.length = 0;
                        if (res.length > 0) {
                            // console.log('a05-----------------')
                            next({...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                        } else {
                            // console.log('a06-----------------')
                            next()
                        }
                    })

                }).catch((err) => {
                    // console.log('a07-----------------')
                    store.dispatch('FedLogOut').then(() => {
                            // console.log('a08-----------------')
                            Message.error(err)
                                // next({ path: '/' })
                        })
                        // next({ path: '/' })
                })
            } else {
                // console.log('a09-----------------')
                // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
                if (hasPermission(store.getters.roles, to.meta.roles)) {
                    // console.log('a10-----------------')
                    next()
                } else {
                    // console.log('a11-----------------')
                    next({ path: '/401', replace: true, query: { noGoBack: true } })
                }
                // 可删 ↑
            }
        }
    } else {
        /* has no token*/
        // console.log('a12-----------------')
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            // console.log('a13-----------------')
            next()
        } else {
            // console.log('a14-----------------')
            next(`/login`) // 否则全部重定向到登录页
            NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
        }
    }
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})
