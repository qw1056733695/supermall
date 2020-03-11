<template>
	<div class="tab-bar-item" @click="itemclick">
		<div v-if="!isActive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon-action"></slot>
		</div>
		<div :style="activeStytle">
			<slot name="item-text"></slot>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'TarBarItem',
		methods:{
			itemclick(){
				this.$router.replace(this.path)
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path)!==-1
			},
			activeStytle(){
				return this.isActive? {color:this.activecolor,font:"bold"}:{}
			}
		},
		props:{
			path:String,
			activecolor:{
				type:String,
				default:'red'
			}
		}
	}
</script>

<style>
	.active{
		color: red;
	}
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
	}
	.tab-bar-item img{
		width: 24px;
		height: 24px;
		margin-top: 2px;
	}
	
</style>
