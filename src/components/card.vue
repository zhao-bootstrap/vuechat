<script>
//props的user  父组件引用子组件的时候 子组件里面的属性user="sa" 在子组件的methods的方法里面可以用this.user 获取到的user是在父组件app.vue定义了。可以用{{user}}获取到这个值
	export default{
		props:['user']
	};
</script>
<template>
	<div class="m-card">
		<header>
			<img class="headImg" width="40" height="40" :src="user.img">
			<p class="nickName">{{user.name}}</p>
		</header>
		<footer>
			<input type="text" class="searchUser" placeholder="查找用户" v-model="search">
		</footer>
	</div>
</template>
<style type="text/less">
	.m-card{
		padding:10px;
		border-bottom:1px solid #dedede;

	}
	header{
		padding-bottom: 10px;
	}
	.headImg{
		border-radius:2px;
	}
	.headImg,.nickName{
		vertical-align: middle;
	}

	.nickName{
		display:inline-block;
		margin-bottom: 15px;
		font-size: 16px;

	}
	.searchUser{
		padding:0 10px;
		width: 100%;
		font-size: 12px;
		color: #fff;
		height: 30px;
		line-height: 30px;
		border-radius:4px;
		outline:none;
		border:0;
		background-color: #26292E;
	}

</style>