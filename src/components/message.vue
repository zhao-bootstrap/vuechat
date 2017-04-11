<script>
	export default{
		props:['session',"user","userList"],
		//实时的计算 当对象的某一个值发生变化时 会实时的计算
		computed:{
			sessionUser(){
				let users = this.userList.filter(item => item.id === this.session.userId);
				return users[0];
			}
		},
		filters:{
			avatar (item){
				// 如果是自己发送的消息 显示登录者的头像
				let user = item.self ? this.user : this.sessionUser;
				return user && user.img;
			},
			time(data){

				if(typeof data==='string'){
					 data = new Date(data);
					return data.getHours()+":"+data.getMinutes();
				}

			}
		},
		directives:{
			'scroll-bottom' () {
				Vue.nextTick(()=>{
					this.el.scrollTop=this.el.scrollHeight-this.el.clientHeight;
				})
			}
		}
	}
</script>
<template>
<div class="m-message" v-scroll-bottom="session.messages">
	<ul>
		<li v-for="item in session.messages">
			<p class="time"><span>{{item.date | time}}</span></p>
			<div class="mainMessage" :class="{ self: item.self }">
				<img class="avatar" width="30" height="30" :src="item | avatar">
				<div class="text">
					{{ item.text }}
				</div>
			</div>
		</li>
	</ul>
</div>
</template>
<style  type="text/less">
.m-message{
	padding:10px 15px;
	overflow-y: scroll;
}
.m-message li{
	margin-bottom: 15px;
}
.m-message .time{
	margin:7px 0;
	text-align:center;
}
.m-message .time>span{
	display: inline-block;
	padding:0 18px;
	font-size:12px;
	color:#fff;
	border-radius:2px;
	background-color: #dcdcdc;
}
.m-message .avatar{
	float: left;
	margin:0 10px 0 0;
	border-radius:3px;
}
.m-message .text{
	display: inline-block;
    position: relative;
    padding: 0 10px;
    max-width: 500px;
    min-height: 30px;
    line-height: 2.5;
    font-size: 12px;
    text-align: left;
    word-break: break-all;
    background-color: #fafafa;
    border-radius: 4px;

}
.m-message .text:before{
	content: " ";
	position:absolute;
	top:9px;
	right:100%;
	border:6px solid transparent;
	border-right-color:#fafafa;
}
.self {
    text-align: right;
}
.self .avatar {
    float: right;
    margin: 0 0 0 10px;
}
.self .text {
	background-color: #b2e281;
}
.self .text:before {
    right: inherit;
    left: 100%;
    border-right-color: transparent;
    border-left-color: #b2e281;
}
</style>







