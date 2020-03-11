<template>
	<div>
		<TarBar>
			<TarBarItem path='/Home'>
				<img slot="item-icon" src="../../assets/img/首页.svg" alt="">
				<img slot="item-icon-action" src="../../assets/img/首页活跃.svg" alt="">
				<div slot="item-text">首页</div>
			</TarBarItem>
			<TarBarItem path='/Sort'>
				<img slot="item-icon" src="../../assets/img/分类.svg" alt="">
				<img slot="item-icon-action" src="../../assets/img/分类活跃.svg" alt="">
				<div slot="item-text">分类</div>
			</TarBarItem>
			<TarBarItem path='/ShopCart'>
				<img slot="item-icon" src="../../assets/img/购物车.svg" alt="">
				<img slot="item-icon-action" src="../../assets/img/购物车活跃.svg" alt="">
				<div slot="item-text">购物车</div>
			</TarBarItem>
			<TarBarItem path='/Mine'>
				<img slot="item-icon" src="../../assets/img/我的.svg" alt="">
				<img slot="item-icon-action" src="../../assets/img/我的活跃.svg" alt="">
				<div slot="item-text">我的</div>
			</TarBarItem>
		</TarBar>
	</div>
</template>

<script>
	import TarBar from './TabBar.vue'
	import TarBarItem from './TarBarItem.vue'
	
	export default{
		name:'MainTabBar',
		components:{
			TarBar,
			TarBarItem
		}
	}
</script>

<style>
</style>
