/*// const 定义一个常量
const key="VUE-CHAT-v3"
if(!localStorage.getItem(key)){
	let now =new Date();
	let dataNum = {
        // 登录的用户
		user:{
			id:1,
			name:'慧慧',
			img:'dist/images/1.jpg'
		},
        // 用户的列表
        userlist:[
            {
                id:2,
                name:'小李',
                img:'dist/images/2.jpg'
            },
            {
                id:3,
                name:'小王',
                img:'dist/images/3.jpg'
            }
        ],
        // 会话的列表
        sessionList:[
            {
                userId:2,
                messages:[
                    {
                        text:'这是一个Vue es6 webpack 写的聊天室',
                        data:"2017.3.24"
                    },
                    {
                        text:'你好',
                        data:"2017.3.25"
                    }
                ]
            },
            {
                userId:3,
                messages:[]
            }
        ],

	}
	localStorage.setItem(key,JSON.stringify(dataNum))
}
// 导出两个方法
export default{
   fetch() {
        // console.log(JSON.parse(localStorage.getItem(key)))
   		return JSON.parse(localStorage.getItem(key));

        // return dataNum;
   },
   save(store){
        localStorage.setItem(key,JSON.stringify(store));
   }
}
*/
const key = 'VUE-CHAT-v3';

// 虚拟数据
// if (!localStorage.getItem(key)) {
    let now = new Date();

    let data = {
        // 登录用户
        user: {
            id: 1,
            name: 'Coffce',
            img: 'dist/images/1.jpg'
        },

        // 用户列表
        userList: [
            {
                id: 2,
                name: '站长素材',
                img: 'dist/images/2.jpg'
            },
            {
                id: 3,
                name: 'webpack',
                img: 'dist/images/3.jpg'
            }
        ],

        // 会话列表
        sessionList: [
            {
                userId: 2,
                messages: [
                    {
                        text: 'Hello，这是一个基于Vue + Webpack构建的简单chat示例，聊天记录保存在localStorge。简单演示了Vue的基础特性和webpack配置。',
                        date:"21:09"
                    },
                    {
                        text: '很简单的一个例子',
                        date: "20:01"
                    }
                ]
            },
            {
                userId: 3,
                messages: []
            }
        ]
    };

    localStorage.setItem(key, JSON.stringify(data));
// }

export default {
    fetch () {
        return JSON.parse(localStorage.getItem(key));
    },
    save (store) {
        localStorage.setItem(key, JSON.stringify(store));
    }
};


