import Mock from 'mockjs'

import adminList from '@/assets/data/system/sm_admin.json'

export default {
    getAdminList: data => { // 获取用户列表
        return adminList
    }
    
}
