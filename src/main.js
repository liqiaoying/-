import Vue from 'vue'
import 'babel-polyfill'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // 全局样式
import App from './App'
import store from './store'
import router from './router'
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

import './icons' // svg图标
import './errorLog' // 错误日志
import './permission'  // 权限控制
// import './mock' // 测试数据 
import * as filters from './filters' // 全局filter
import md5 from '@/utils/md5' // 加密
// import vueQuillEditor from 'vue-quill-editor' // 引入富文本工具

Vue.use(Element);
// Vue.use(vueQuillEditor)

String.prototype.HandleString = function() {
  if(this != null && this != '') {
    return this;
  }else {
    return '--'
  }
}

Date.prototype.Format = function (fmt) { //author: meizz
  var obj = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "H+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var key in obj)
    if (new RegExp("(" + key + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (obj[key]) : (("00" + obj[key]).substr(("" + obj[key]).length)));
  return fmt; //返回值是格式化好之后的时间
};

Vue.prototype.dateForm = function (d, t) {
  if (d.toString().indexOf('-') > 0) {
      d = d.replace(/-/g, '/')
  }
  return new Date(d).Format(t ? "yyyy-MM-dd HH:mm:ss" : "yyyy-MM-dd")
};
Vue.prototype.toDay = new Date().Format("yyyy-MM-dd");

Vue.prototype.$md5 = md5 // 加密
// 获取ip地址
// var onSuccess = function(location){
//   if(location){
//     Vue.prototype.cip = location.traits.ip_address || ''
//     Vue.prototype.cname = location.country.names['zh-CN'] || ''
//   }
//   console.log(location.traits.ip_address)
//   vue.$store.dispatch('getIp', location.traits.ip_address)
//   vue.$store.dispatch('getIpAddress', location.country.names['zh-CN'])
// };
// var onError = function(error){ 
//   if(returnCitySN){
//     vue.$store.dispatch('getIp', returnCitySN['cip'])
//     vue.$store.dispatch('getIpAddress', returnCitySN['cname'])
//   }
//   console.log( "Error:nn" + JSON.stringify(error, undefined, 4) ) 
// }; 
// // if(returnCitySN){
// //   Vue.prototype.cip = returnCitySN['cip'] || ''
// //   Vue.prototype.cname = returnCitySN['cname'] || ''
// // }
// // if(Vue.prototype.cip == '' || Vue.prototype.cname == ''){
// geoip2.city(onSuccess, onError);

// }

// 注册全局实用程序筛选器。
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

var vue =  new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
