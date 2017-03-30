<script>
// 调用两个文件
import store from '../store.js'
import card from './card.vue';
import list from "./list.vue";
import message from './message.vue';
// export default 等价于 new vue({})
// data 页面中用到的数据
//method 页面的事件
//props
export default{
    data () {
    	// 调用store 的方法
        let serverData = store.fetch();


        return {
        	// 登录的用户
            user:serverData.user,
            // 用户列表
            userList:serverData.userList,
            sessionList:serverData.sessionList
        };

    },
    components:{
    	// 引用的组件 在这里注册 不然不能用
        card,list,message
    }

};

</script>

<template>
<!-- 模板里面 组件是驼峰的 在这里要转成 sss-sss -->
    <div class="main">
        <div class="sideBar">
            <card :user="user"></card>
            <list :user="user" :user-list="userList"></list>
        </div>
		<div class="mainContent">
			<message :session-list="sessionList"></message>
		</div>
    </div>
</template>
<style type="text/less">
		*, *:before, *:after {
            box-sizing: border-box;
        }
        body, html {
            height: 100%;
            overflow: hidden;
        }
        body, ul {
            margin: 0;
            padding: 0;
        }

        ul {
            list-style: none;
        }
		.sideBar{
				height:100%;
				width:200px;
				float: left;
				bottom:0;
				left:0;
				background: #000;
			}
		.main{
			margin: 20px auto;
	        width: 800px;
	    	height: 600px;
			overflow: hidden;
			border-radius:3px;


		}

</style>