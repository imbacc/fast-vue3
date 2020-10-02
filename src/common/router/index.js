import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '/views/Home.vue'

// 插件导入
var _modules
if (_modules === undefined) _modules = [{ _none: '' }]

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('/views/About.vue')
	},
	..._modules,
]

console.log(routes)

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL) || createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
