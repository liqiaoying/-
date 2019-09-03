// demo数据
import { param2Obj } from '@/utils'
export default {
    getPermissionsList: config => {  // 权限管理---查询-权限列表数据----
        let data ={
            "msg": "操作成功",
            "total": 3,
            "code": 0,
            "data": [
            {
            "id": 1,
            "parentId": -1,
            "permissionId": "WG_YMQX_ID_0008",
            "permissionName": "平台后台",
            "parentPermissionIds": ",1,",
            "parentPermissionName": "8888彩票核心后台",
            "parentIsnot": "1",
            "permissionStatus": null,
            "treeStatus": null,
            "icon": "lotteryCore",
            "pageUrl": null,
            "sort": "1",
            "dict": [],
            "status": 1,
            "type": 2,
            "deleteFlag": 0,
            "createBy": "admin",
            "createTime": "2019-03-25 00:00:00",
            "updateTime": "2019-03-30 20:09:35",
            "remarks": "888888彩票核心后"
            },
            {
            "id": 2,
            "parentId": 1,
            "permissionId": "WG_YMQX_ID_0009",
            "permissionName": "彩种信息",
            "parentPermissionIds": ",1,2,",
            "parentPermissionName": "平台后台",
            "parentIsnot": "1",
            "permissionStatus": null,
            "treeStatus": null,
            "icon": "",
            "pageUrl": null,
            "sort": "2",
            "dict": [],
            "status": 1,
            "type": 2,
            "deleteFlag": 0,
            "createBy": "admin",
            "createTime": "2019-03-25 00:00:00",
            "updateTime": "2019-03-30 21:00:08",
            "remarks": "彩种信息的说明文档"
            },
            {
            "id": 3,
            "parentId": 1,
            "permissionId": "WG_YMQX_ID_0010",
            "permissionName": "一级彩种_URL",
            "parentPermissionIds": ",1,2,3,",
            "parentPermissionName": "平台后台",
            "parentIsnot": "0",
            "permissionStatus": null,
            "treeStatus": null,
            "icon": "",
            "pageUrl": "lotteryCore/lotteryType/lc_first",
            "sort": "1",
            "dict": [
            {
            "id": 100003,
            "name": "启用",
            "value": "enable",
            "status": 1
            },
            {
            "id": 100003,
            "name": "启用",
            "value": "enable",
            "status": 0
            },
            {
            "id": 100001,
            "name": "查询",
            "value": "search",
            "status": 0
            },
            {
            "id": 100004,
            "name": "禁用",
            "value": "disable",
            "status": 1
            },
            {
            "id": 100002,
            "name": "重置",
            "value": "reset",
            "status": 0
            }
            ],
            "status": 1,
            "type": 2,
            "deleteFlag": 0,
            "createBy": "admin",
            "createTime": "2019-03-25 00:00:00",
            "updateTime": "2019-03-31 22:32:41",
            "remarks": "aeaerfassss阿尔法所所所所所所所所所所所所所所所所所所所sssssssssssssssss"
            }
            ]
            }
      return data;
    },
    getPermissionhandleNodeShow:config=>{ // 权限管理---查询-权限树数据----
        let data = {
            "msg": "success",
            "code": 0,
            "data": [
            {
            "id": 1,
            "parentId": -1,
            "permissionId": "WG_YMQX_ID_0008",
            "permissionName": "平台后台",
            "children": [
            {
            "id": 2,
            "parentId": 1,
            "permissionId": "WG_YMQX_ID_0009",
            "permissionName": "彩种信息",
            "children": [
            {
            "id": 5,
            "parentId": 2,
            "permissionId": "WG_YMQX_ID_0012",
            "permissionName": "基础信息_URL",
            "children": [],
            "status": 1
            }
            ],
            "status": 1
            },
            {
            "id": 3,
            "parentId": 1,
            "permissionId": "WG_YMQX_ID_0010",
            "permissionName": "一级彩种_URL",
            "children": [],
            "status": 1
            },
            {
            "id": 4,
            "parentId": 1,
            "permissionId": "WG_YMQX_ID_0011",
            "permissionName": "二级彩种_URL",
            "children": [],
            "status": 1
            }
            ],
            "status": 1
            }
            ]
            }
        return  data;
    },
    postPermissionSaveOrUpdate:config=>{  // post/1--禁用/2---新增/3--修改/4--删除/5 的接口----
        let data ={"code":0,"msg":"成功"}
        return  data;
    },
    postAccreditData:config=>{  // ---获取树的数据
        let data ={"code":0,"msg":"成功"}
        return  data;
    } ,
    getUserTableDate:config=>{
        let data ={"code":0,"msg":"成功"}
        return  data;
    },
    getUserTreeDate:config=>{  // 获取查看用户详情树
        let data ={"code":0,"msg":"成功"}
        return  data;
    },
    getListAccredit:config=>{   // ---获取列表的数据
        let data ={"code":0,"msg":"成功"}
        return  data;
    },
    getTreesAccredit:config=>{  // ---获取树的数据
        let data ={"code":0,"msg":"成功"}
        return  data;
    },
    postAccreditData:config=>{  // ---获取树的数据
        let data ={"code":0,"msg":"成功"}
        return  data;
    },
    getRoleByUsers:config=>{ // ---查询角色分配的用户
        let data ={"code":0,"msg":"成功"}
        return  data;
    },
    saveRoleUser:config=>{  // ---启用/1--禁用/2---新增/3--修改/4 
        let data ={"code":0,"msg":"成功"}
        return  data;
    },
    setOperationOk:config=>{  
        let data ={"code":0,"msg":"成功"}
        return  data;
    },
    getRoleinfo:config=>{  // ---查询-角色列表数据----
        let data ={"code":0,"msg":"成功"}
        return  data;
    }
}
