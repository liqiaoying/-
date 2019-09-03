import request from '@/utils/request'
import qs from 'qs'

// 通用下拉列表
export function findByCode(data) {  // 
    return request({
      baseURL: '/api', 
      url: '/cp4/system/dropdown/findByCode',
      method: 'post',
      data: qs.stringify(data)
    })
}

// 通用下载接口
export function taskDownload(param) {
  return request({
    baseURL: '/api', 
    url: '/cp4/common/file/taskDownload?model='+param.model+'&taskId='+param.taskId,
    method: 'post'
  })
}

// 其他下拉列表
export function lotteryDropdownList(data) { // 一级、二级彩种下拉列表
    return request({
      baseURL: '/api', 
      url: '/cp4/cpconfig/lottery/dropdownList',
      method: 'post',
      data: qs.stringify(data)
    })
}
// 一级玩法下拉列表
export function findByParentLotteryId(data) { // 根据一级彩种id查询一级玩法【findByParentLotteryId】
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/menuPlayRule/findByParentLotteryId',
    method: 'post',
    data: qs.stringify(data)
  })
}
// 二级玩法下拉列表
export function findByMenuPlayRuleId(data) { // 根据一级玩法id查询二级玩法【findByMenuPlayRuleId】
  return request({
    baseURL: '/api', 
    url: '/cp4/cpconfig/menuPlayRule/findByMenuPlayRuleId',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function playRuleDropdownList(data) { // 玩法下拉列表
    return request({
      baseURL: '/api', 
      url: '/cp4/cpconfig/playRule/dropdownList',
      method: 'post',
      data: qs.stringify(data)
    })
}

export function agentInfoDropdownList() { // 代理商下拉列表
    return request({
      baseURL: '/api', 
      url: '/cp4/operation/agentInfo/dropdownList',
      method: 'post'
    })
}

export function permissionUrlDropdownList() { // 权限地址下拉列表
    return request({
      baseURL: '/api', 
      url: '/cp4/system/dropdown/permissionUrl',
      method: 'post'
    })
}

export function findDropdownList() { // 数据供应商下拉列表
  return request({
    baseURL: '/api', 
    url: '/cp4/supply/supplierInfo/dropdownList',
    method: 'post'
  })
}



