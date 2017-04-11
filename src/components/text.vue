<script>
	export default{
		props:['session'],
		data(){
			return {
				text:''
			};
		},
		methods:{
			inputing(e){

				if(e.ctrlKey && e.keyCode ===13 && this.text.length){

					this.session.messages.push({
						text:this.text,
						date:new Date(),
						self:true
					});
					this.text="";
				}else if(!(e.keyCode ===13)){
					alert("请按 Ctrl +Enter")
				}
			}
		}
	}
</script>
<template>
	<div class="m-text">
		<textarea placeholder="按 Ctrl +Enter" v-model="text" @keyup="inputing">  </textarea>
	</div>
</template>
<style type="text/less">
	.m-text{
		height: 160px;
        border-top: solid 1px #ddd;
	}
	textarea {
        padding: 10px;
        height: 100%;
        width: 100%;
        border: none;
        outline: none;
        font-family: "Micrsofot Yahei";
        resize: none;
    }
</style>