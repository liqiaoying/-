import { constantRouterMap } from '@/router'
const _import = require('@/router/_import_' + process.env.NODE_ENV) // 获取组件的方法
/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param roles
 */
var ty = 1;
// function filterAsyncRouter(roles) { //遍历后台传来的路由字符串，转换为组件对象
//     const accessedRouters = roles.filter(route => {
//       if (route.component) {
//         route.component = _import(route.component)
//       }
//       if (route.children && route.children.length) {
//         route.children = filterAsyncRouter(route.children)
//       }
//       return true
//     })
//   return accessedRouters
// }

const permission = {
  state: {
    routers: [],
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      let data = []
      routers.forEach(element => {
        if(!element.children){
          element.children = []
        }
        data.push(element)
      });
      // state.addRouters = data
      // state.routers = constantRouterMap.concat(data)
      state.routers = constantRouterMap
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data
        let accessedRouters
        // accessedRouters = filterAsyncRouter(roles)
        commit('SET_ROUTERS', [])
        resolve()
      })
    }
  }
}

export default permission
