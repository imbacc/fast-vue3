<template>
	<div>
		<h1>{{ msg }}</h1>
		<h1>inject num = {{numObj.num}}</h1>
	</div>
</template>

<script>
	import { reactive, watchEffect, toRefs } from 'vue'
	
	import { useState } from '../common/di/num.js'
	
	export default {
	  props: {
		msg: String
	  },
	  setup(aa,bb){
		  const numObj = useState()
		  
		  watchEffect(() => {
		    console.log(`watchEffect set num: ${numObj.num}`)
		  })
		  
		  return {
			  numObj
		  }
	  }
	}
</script>
