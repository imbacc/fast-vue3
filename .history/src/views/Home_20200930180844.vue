<template>
	<div class="home">
		<h1>This is home page</h1>
		<hr />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
	import HelloWorld from '/components/HelloWorld.vue'

	export default {
		components: {
			HelloWorld
		}
	}
</script>
