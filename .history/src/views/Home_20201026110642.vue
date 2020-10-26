<template>
	<div class="home">
		<h1>This is home page</h1>
		<hr />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
	import HelloWorld from '/components/HelloWorld.vue'
	import { onMounted, getCurrentInstance } from 'vue'

	export default {
		components: {
			HelloWorld
		},
		setup(props, context) {
			const { ctx } = getCurrentInstance()

			onMounted(()=>{
				ctx.is_action('app_111')
				ctx.is_action('app_222',{ _id: 1111 })
			})
		}
	}
</script>
