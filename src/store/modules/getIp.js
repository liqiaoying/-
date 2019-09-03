const getIp = {
    state: {
        ip: null,
        ipAddress: null,
        validate:'欢迎使用后台系统，请登录。' // 
    },
    getters: {},
    mutations: {
        SET_IP: (state, data) => {
            state.ip = data
        },
        SET_IPADDRESS: (state, data) => {
            state.ipAddress = data
        }
    },
    actions: {
        getIp({commit}, data) {
            commit('SET_IP', data)
        },
        getIpAddress({commit}, data){
            commit('SET_IPADDRESS', data)
        }
    }
}

export default getIp