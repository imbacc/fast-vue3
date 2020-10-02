import Vuex from 'vuex'

// 插件导入
var _modules
if (_modules === undefined) _modules = [{ _none: '' }]

export default Vuex.createStore({
  debug: true,
  state: {
	  title: 'ddd'
  },
  mutations: {
	  /**
	   * @param {Object} info
	   * 0是状态属性名称
	   * 1是赋予状态属性的值
	   */
	  set_vuex(state, info) {
	  	state[info[0]] = info[1]
	  }
  },
  actions: {
	  
  },
  modules: {
	  ..._modules,
  }
})
