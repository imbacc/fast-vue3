<template>
  <div class="home">
	  <h1>obj: {{obj.ddd}}</h1>
	  <h1>test count: {{count}}</h1>
	  <h1>count * 2 = {{two_count}}</h1>
	  <h1>vuex: {{vuex}}</h1>
	  <button @click="update">更新vuex</button>
	  <button @click="add">新增count</button>
	  <button @click="add_provide">新增provide的count</button>
	  <hr />
	  <h1>下面是组件部分</h1>
	  <inject msg="我是子组件"></inject>
  </div>
</template>

<script>
	import { 
		ref,
		reactive,
		computed,
		watch,
		getCurrentInstance,
		onBeforeMount,
		onMounted,
		onBeforeUpdate,
		onUpdated,
		onBeforeUnmount,
		onUnmounted,
		onErrorCaptured,
	 } from 'vue'
 
	import { provideState, numObj, numAddFun } from '../common/di/num.js'
	
	import inject from '../components/inject.vue';
	
	export default {
		components: {
			inject
		},
		setup(){
			//data
			const count = ref(0)
			
			provideState()
			
			//响应式属性
			const obj = reactive({ddd:'1111'})
			
			//computed
			const two_count = computed(()=> count.value * 2)
			
			//watch
			watch(()=> count.value,(val)=> console.log(`count is ${val}`))
			
			//router is_vuex = $store
			const { ctx } = getCurrentInstance()
			console.log(ctx.$router.currentRoute.value)
			
			//vuex
			const vuex = computed(() => ctx.is_vuex.state.title)
			
			//methods
			const add = ()=> count.value++
			const update = ()=> ctx.is_vuex.commit('set_vuex',['title','vue3 composition...'+count.value])
			const add_provide = () => {
				numAddFun()
				console.log('provide numobj =',numObj.num)
			}
			
			onBeforeMount(()=>{
				console.log('渲染前...')
			})
			
			onMounted(() => {
			  console.log('渲染时...')
			})
			
			onBeforeUpdate(()=>{
				console.log('更新前...')
			})
			
			onUpdated(() => {
			  console.log('更新时...')
			})
			
			onBeforeUnmount(()=>{
				console.log('销毁前...')
			})
			
			onUnmounted(() => {
			  console.log('销毁时...')
			})
			
			onErrorCaptured(()=>{
				console.log('错误捕获...')
			})
			
			return {
				obj,
				count,
				two_count,
				add,
				vuex,
				update,
				add_provide
			}
		}
	}
</script>