import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = () => import("../views/Home")
const Sort = () => import("../views/Sort")
const ShopCart = () => import("../views/ShopCart")
const Mine = () => import("../views/Mine")

const routes = [
	{
		path:'',
		redirect:'/Home'
	},
	{
		path:'/Home',
		component:Home
	},
	{
		path:'/Sort',
		component:Sort
	},
	{
		path:'/ShopCart',
		component:ShopCart
	},
	{
		path:'/Mine',
		component:Mine
	}
]

const router = new VueRouter({
  routes,
	mode:'history'
})

export default router
