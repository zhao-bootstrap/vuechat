<script>
// 调用两个文件
import store from '../store.js'
import card from './card.vue';
import list from "./list.vue";
import message from './message.vue';
import text from './text.vue';
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
            // 会话列表
            sessionList:serverData.sessionList,
            // 搜索key
            search:'',
            //选中的会话
            sessionIndex:0
        };

    },
    computed:{ //计算属性
        session(){
            return this.sessionList[this.sessionIndex]
        }
    },
    watch:{ //监控属性
        // 每当sessionList 改变时，保存到localStorage中
        sessionList:{
            // 深度观察
            deep:true,
            handler (){
                store.save({
                    user:this.user,
                    userList:this.userList,
                    sessionList:this.sessionList
                })
            }
        }
    },
    components:{
    	// 引用的组件 在这里注册 不然不能用
        card,list,message,text
    }

};

</script>

<template>
<!-- 模板里面 组件是驼峰的 在这里要转成 sss-sss -->
    <div class="main">
        <div class="sideBar">
            <card :user="user" :search.sync="search"></card>
            <list :user="user" :user-list="userList" :search="search" :session="session" :session-index="sessionIndex"></list>
        </div>
		<div class="mainContent">
			<message :session="session" :user="user" :user-list="userList"></message>
            <text :session="session"></text>
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
        .m-text {
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
        }
        .m-message {
            height: 440px;
        }
        .mainContent {
            position: relative;
            overflow: hidden;
            background-color: #eee;
        }
		.main{
			margin: 20px auto;
	        width: 800px;
	    	height: 600px;
			overflow: hidden;
			border-radius:3px;

		}

</style>