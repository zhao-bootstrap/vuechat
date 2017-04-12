
<script>
import store from "../store.js";
import list from "../components/list.vue";
	export default{
		prop:["userList"],
		data(){
			let serverData = store.fetch();
			return {
				user:serverData.user,
				userList:serverData.userList,
				willShow:true,
				search:'hello'
			}
		},
		methods:{
			showHide(e){
				if(this.willShow){
					this.willShow=false;
				}else{
					this.willShow=true;
				}
			}
		},
		components:{
			list
		}
	}
</script>
<template>
	<div class="main">
		<span v-if="willShow">我要显示</span>
		<input type="text" v-model="search">
		<!-- <div>{{search}}</div> -->
		<span v-else="">隐藏</span>
		<div class="J_main" @click="showHide($event)">点我隐藏</div>
		<list :user-list="userList" :search="search"></list>

	</div>

</template>