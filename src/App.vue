<template>
  <div id="app">
		<MainTabBar/>
    <keep-alive>
			<router-view/>
		</keep-alive>
		
  </div>
</template>

<script>

	import MainTabBar from './components/common/tabbar/MainTabBar.vue'
	export default{
		name:'App',
		components:{
			MainTabBar
		}
	}
</script>

<style>
	@import url("assets/css/base.css");
</style>
