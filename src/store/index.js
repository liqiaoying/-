import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import errorLog from './modules/errorLog'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import user from './modules/user'
import getters from './getters'

//获取IP信息
import getIp from './modules/getIp'



Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app,
        errorLog,
        permission,
        tagsView,
        user,
        getIp,
      
    },
    getters
})

export default store

// import Vue from 'vue'
// import Vuex from 'vuex'
// import app from './modules/app'
// import errorLog from './modules/errorLog'
// import permission from './modules/permission'
// import tagsView from './modules/tagsView'
// import user from './modules/user'
// import getters from './getters'

// //获取IP信息
// import getIp from './modules/getIp'

// // 1、平台_系统管理
// import sm_user from './modules/systemManage/sm_user' //用户管理

// import sm_permissions from './modules/systemManage/sm_permissions' //权限管理

// import sm_role from './modules/systemManage/sm_role' //角色管理

// import sm_ip from './modules/systemManage/sm_ip' //ip管理

// import sm_data from './modules/systemManage/sm_data' //主数据管理

// import sm_buffer from './modules/systemManage/sm_buffer' // 缓存数据管理

// import sm_backstage_function from './modules/systemManage/sm_backstage_function' // 后台功能管理

// import sm_mask from './modules/systemManage/sm_mask' // 定时任务管理

// import sm_admin from './modules/systemManage/sm_admin' // 弹窗修改密码


// // 2、平台_游戏管理
// import ag_userdefine_odd from './modules/agentPlatForm/gameManage/ag_userdefine_odd' // 自定义赔率设置

// import lc_openManage from './modules/lotteryCore/lc_openManage/openManage' // 开盘管理

// import lc_gameControl from './modules/lotteryCore/lc_openManage/gameContrl' // 游戏控制

// import lc_first from './modules/lotteryCore/lc_info/lc_first' // 一级彩种管理

// import lc_second from './modules/lotteryCore/lc_info/lc_second' // 二级彩种管理

// import lc_basic from './modules/lotteryCore/lc_info/lc_basic' // 彩种基本信息配置

// import lc_detail from './modules/lotteryCore/lc_config/lc_detail' // 彩种详细配置管理

// import lc_percentVison from './modules/lotteryCore/lc_percentConfig/percentVisonManage' // 赔率大版本管理

// import lc_everySecondLottery from './modules/lotteryCore/lc_percentConfig/everySecondLotteryManage' // 赔率大版本管理

// import lc_drawALotteryDataRegulation from './modules/lotteryCore/lc_drawALotteryResult/lc_drawALotteryDataRegulation' // 开奖数据确认规则管理

// import lc_historicalLotteryRecordsQuery from './modules/lotteryCore/lc_drawALotteryResult/lc_historicalLotteryRecordsQuery' // 历史开奖记录

// import lc_lotteryConfirmed from './modules/lotteryCore/lc_drawALotteryResult/lc_lotteryConfirmed' // 开奖确认提交

// import lc_lotteryConfirmExamine from './modules/lotteryCore/lc_drawALotteryResult/lc_lotteryConfirmExamine' //  开奖确认审核

// import lc_settlementManage from './modules/lotteryCore/lc_settlementManage/noteTheSingleSettlementManage' // 结算管理   /   各期彩种注单结算管理

// import lc_noteTheSingleDetail from './modules/lotteryCore/lc_settlementManage/noteTheSingleDetailManage' // 结算管理   /   注单结算详情管理

// // import lc_betsValueTest from './modules/lotteryCore/lc_testValueManage/betsValueTest' // 测试验证管理   /   下注值测试

// // import lc_winningTest from './modules/lotteryCore/lc_testValueManage/winningTest' // 测试验证管理   /   中奖测试

// // import lc_percentTest from './modules/lotteryCore/lc_testValueManage/percentTest' // 测试验证管理   /   赔率测试

// import lc_dataProvider from './modules/lotteryCore/lc_DataSupplierManagement/lc_dataProvider' // 数据供应商管理 /  信息管理

// import lc_lotteryData from './modules/lotteryCore/lc_DataSupplierManagement/lc_lotteryData' // 数据供应商管理 /  开奖数据管理（供应商）

// import lc_comprehensiveTest from './modules/lotteryCore/lc_testValueManage/lc_comprehensiveTest' // 综合测试

// import lc_maximumBetsManage from './modules/lotteryCore/lc_info/lc_maximumBetsManage' // 投注上限大版本管理

// import lc_playBetValue from './modules/lotteryCore/lc_info/lc_playBetValue' // 玩法下注值管理 

// import lc_eachSecondColorSeedMaximumBets from './modules/lotteryCore/lc_info/lc_eachSecondColorSeedMaximumBets' // 各二级彩种投注上限版本管理

// import lc_peopleOnline from './modules/lotteryCore/lc_info/lc_peopleOnlineManage' // 在线人数管理

// import lc_showOnlinePeople from './modules/lotteryCore/lc_info/lc_showPeopleOnlineTimeManage' // 在线人数展示管理





// // 3、平台_运营管理  
// import lc_infoManage from './modules/lotteryCore/lc_agentManage/infoManage' // 代理商管理

// import lc_clientManage from './modules/lotteryCore/lc_agentManage/clientManage' // 消息发送


// // 4、代理商_系统管理
// import ag_sm_permission from './modules/agentPlatForm/systemManage/ag_sm_permission' // 权限管理

// import ag_sm_user from './modules/agentPlatForm/systemManage/ag_sm_user' // 员工管理

// import ag_sm_userdefine_odd from './modules/agentPlatForm/systemManage/ag_sm_userdefine_odd' // 自定义赔率设置 （新）

// import ag_userdefine_bet from './modules/agentPlatForm/gameManage/ag_userdefine_bet' // 自定义投注上限设置

// import ag_userdefine_betlimit from './modules/agentPlatForm/gameManage/ag_userdefine_betlimit' // 投注上限设置

// import ag_configOnlinePeople from './modules/agentPlatForm/systemManage/ag_configOnlinePeople' // 在线人数设置


// // 5、运营管理
// import ag_gameUserManage from './modules/operationManage/ag_gameUserManage' // 游戏用户管理

// import ag_operationDataCenter from './modules/operationManage/ag_operationDataCenter' // 运营数据中心


// // 6、报表管理
// import lc_zhudan from './modules/lotteryCore/lc_reportManage/lc_zhudan' // 注单报表

// import lc_yingkui_agent from './modules/lotteryCore/lc_reportManage/lc_yingkui_agent' // 盈亏报表-代理商

// import lc_yingkui_user from './modules/lotteryCore/lc_reportManage/lc_yingkui_user' // 盈亏报表-用户

// import lc_jiaoyi_record from './modules/lotteryCore/lc_reportManage/lc_jiaoyi_record' // 交易记录

// import lc_worker_log from './modules/lotteryCore/lc_reportManage/lc_worker_log' // 工作人员登录日志

// import lc_gameuser_log from './modules/lotteryCore/lc_reportManage/lc_gameuser_log' // 游戏用户登录日志


// Vue.use(Vuex)

// const store = new Vuex.Store({
//     modules: {
//         app,
//         errorLog,
//         permission,
//         tagsView,
//         user,
//         sm_role,
//         sm_admin,
//         sm_user,
//         sm_ip,
//         sm_data,
//         sm_backstage_function, // 后台功能管理
//         sm_buffer,
//         sm_mask,
//         lc_first,
//         lc_second,
//         lc_maximumBetsManage, //投注上限大版本管理
//         lc_eachSecondColorSeedMaximumBets, // 
//         ag_userdefine_betlimit,
//         lc_playBetValue,
//         lc_basic,
//         lc_openManage,
//         lc_gameControl,
//         sm_permissions,
//         ag_sm_permission,
//         ag_sm_user,
//         ag_userdefine_odd, // 自定义赔率设置
//         ag_userdefine_bet, // 自定义投注上限设置
//         ag_operationDataCenter, // 运营数据中心
//         ag_gameUserManage,
//         ag_sm_userdefine_odd,
//         getIp,
//         lc_dataProvider,
//         lc_drawALotteryDataRegulation,
//         lc_lotteryData,
//         lc_lotteryConfirmed,
//         lc_lotteryConfirmExamine,
//         lc_historicalLotteryRecordsQuery,
//         lc_infoManage,
//         lc_clientManage,
//         lc_settlementManage,
//         lc_noteTheSingleDetail,
//         lc_comprehensiveTest,
//         lc_detail,
//         lc_percentVison,
//         lc_everySecondLottery,
//         lc_gameuser_log,
//         lc_worker_log,
//         lc_jiaoyi_record,
//         lc_yingkui_user,
//         lc_yingkui_agent,
//         lc_zhudan,
//         lc_peopleOnline, // 在线人数管理
//         lc_showOnlinePeople, // 在线人数展示管理
//         ag_configOnlinePeople, // 在线人数设置
//     },
//     getters
// })

// export default store