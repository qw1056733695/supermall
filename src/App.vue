<template>
  <div id="app">
		<MainTabBar/>
    <keep-alive>
			<router-view/>
		</keep-alive>
		
  </div>
</template>

<script>

	import MainTabBar from './components/tabbar/MainTabBar.vue'
	export default{
		name:'App',
		components:{
			MainTabBar
		}
	}
</script>

<style>
</style>
