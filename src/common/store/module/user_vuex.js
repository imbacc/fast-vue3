const TOKEN = localStorage.getItem('token') || false //获取TOKEN缓存
const USER_INFO = localStorage.getItem('user_info') || false //获取USERINFO缓存
const USER_ROLE = localStorage.getItem('user_role') || false //获取USERINFO缓存

//全局状态
const state = {
	token: TOKEN, // 用户token
	user_info: USER_INFO, // 用户信息
	user_role: USER_ROLE, //用户角色权限
	is_login_page: false, //当前是否是登陆页面
}

//同步方法
const mutations = {
	/**
	 * @param {Object} info
	 * 0是状态属性名称
	 * 1是赋予状态属性的值
	 * 例 this.is_vuex.commit('set_vuex_user', ['token', '值'])
	 */
	set_vuex_user(state, info) {
		console.log(state)
		state[info[0]] = info[1]
	},
	set_token(state, token) {
		state.token = token
		localStorage.setItem("token", token)
	},
	set_userInfo(state, info) {
		state.user_info = info
		localStorage.setItem('user_info', info)
	},
	set_userRole(state, role) {
		state.user_role = role
		localStorage.setItem('user_role', role)
	},
	set_logout(state) {
		state.token = ""
		state.user_info = null
		localStorage.removeItem('userinfo')
		localStorage.removeItem('openId')
		localStorage.removeItem('token')
	},
}

//get方法
const getters = {
	// 用户是否登录
	hasLogin: (state) => {
		return Boolean(localStorage.getItem("token") || state.token || false)
	},
}

//异步方法
const actions = {
	//检查是否登陆状态
	check_login({commit, state, getters, rootState}) {
		// console.log(rootState)
		if (!getters.hasLogin) {
			if (!state.is_login_page) {
				commit('set_logout')
				commit('set_vuex',['is_login_page',true])
				return Promise.resolve(false)
			}
		}
		return Promise.resolve(true)
	},
}

export default {
	state,
	mutations,
	getters,
	actions
}
