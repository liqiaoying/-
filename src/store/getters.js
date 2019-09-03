const getters = {
  sidebar: state => state.app.sidebar, // 侧边菜单
  device: state => state.app.device,  // 当前终端
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  errorLogs: state => state.errorLog.logs,
  currentView: state => state.tagsView.currentView, // 当前打开的页面
  alreadyClose: state => state.tagsView.alreadyClose, // 已关闭页面
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  
  dropMenu: state => state.user.dropMenu, // 下拉菜单
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  userType: state => state.user.userType,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
}
export default getters
