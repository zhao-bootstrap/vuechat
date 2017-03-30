<script>
	export default{
		props:['sessionList'],
		//实时的计算 当对象的某一个值发生变化时 会实时的计算
		computed:{

		},
		filters:{
			avatar (item){
				// let user =
			},
			time(data){
				console.log(data)
				if(typeof data==='string'){
					let dateTime=new Date(data);
				}
				return dateTime.getHours()+":"+dateTime.getMinutes();
			}
		},
		directives:{
			'scroll-bottom' () {

			}
		}
	}
</script>
<template>
<div class="m-message">
	<ul>
		<li v-for="item in sessionList">

			<!-- <p class="time"><span>{{item.date | time}}</span></p>
			<div class="main">
				<img :src="item | avatar">
				<div class="text">
					{{ item.text }}
				</div>
			</div> -->
		</li>
	</ul>
</div>
</template>