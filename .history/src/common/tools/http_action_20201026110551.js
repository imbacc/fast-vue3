import api_name from '../config/index.js' //导入API
import http_intercept from './http_request.js' //拦截请求
import is_cache from './cache_time.js' //缓存
import md5 from 'js-md5'
import qs from 'qs'

const get_args = (json = {}, cur = [1, 10]) => {
	cur[0] <= 0 ? cur[0] = 1 : false
	cur[1] <= 0 ? cur[1] = 1 : false
	json.pageNum = cur[0]
	json.pageSize = cur[1]
	return json
}

//封装的get post请求
/**
 * @param {api}		请求API地址
 * @param {param}	追加参数(_cache 缓存时间 默认为0 分钟单位) (_page 是否分页)
 * @param {body}	表单数据
 * @param {type}	默认请求类型type为是post请求
 * @param {onec}	外链请求
 */
const http_action = async (api, param = {}, body = {}, req_type = 'POST', onec = false) => {
	let cache_time = 0
	if (api && !onec) {
		if (api.constructor === String && api.length > 0) api = api_name[api]
		if (api.constructor === Array && api.length > 0) {
			const [name, type, time] = api
			if (name) api = name
			if (type) req_type = type
			if (time) cache_time = time
		}
	}

	if (param['_page']) {
		param = get_args(param, param['_page'])
		delete param['_page']
	}

	if (param['_cache']) {
		cache_time = param['_cache']
		delete param['_cache']
	}
	
	if (api && api.indexOf(':id') !== -1) {
		if (param['_id'] === undefined) {
			console.error(`${api} 没有传参数ID 格式 -> param { _id: 10086 } ...`)
			return false
		}
		api = api.replace(':id', param['_id'])
		delete param['_id']
	}

	let key_api = `${api}?${qs.stringify(param)}`
	const body_md5 = md5(qs.stringify(body))
	const sum_body = key_api + 'bodymd5=' + body_md5

	if (key_api.length === key_api.lastIndexOf('?') + 1) key_api = key_api.substring(0, key_api.length - 1)

	if (cache_time > 0) {
		let cache = is_cache.get_cache('cache_' + sum_body)
		console.log('cache service:' + api, cache)
		if (cache) return cache
	}

	let is_http = http_intercept[req_type.toLocaleLowerCase()](key_api, body)

	return await is_http.then((res) => {
		if (res === 'false') return false
		if (cache_time > 0 && res) is_cache.set_cache('cache_' + sum_body, res, cache_time)
		if (cache_time === 0 && res) is_cache.del_cache('cache_' + sum_body)
		console.log('service:' + key_api, res)
		return res || false
	})
	.catch((err) => {
		console.error(err)
		return false
	})
}

export default http_action
