//1. 入口文件
import Vue from 'vue'

//1.1 导入路由的包
import VueRouter from  'vue-router'

//1.2 安装路由
Vue.use(VueRouter)


//导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

//2.1 导入vue-resource
import VueReSource from 'vue-resource'
//2.2 安装vue-resource
Vue.use(VueReSource)

//设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
// 导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI的组件

import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


// 1.3 导入自己的 router.js 模块
import router from './router.js'

// 导入 App 组件
import app from './App.vue'
var vm =new  Vue({
    el:'#app',
    render: c => c(app),
    router //1.4 挂载路由对象到 VM 实例上
})