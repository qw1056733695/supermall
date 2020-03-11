<template>
	<div id="tar-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name:'TarBar',
	}
</script>

<style>
	@import url("../../../assets/css/base.css");
	#tar-bar{
		display: flex;
		background-color: #f6f6f6;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 49px;
		
		box-shadow: 0 -3px 1px rgba(100,100,100,.4);
	}
</style>
