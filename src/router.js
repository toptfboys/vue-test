import VueRouter from 'vue-router'

// 导入对应的路由文件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopContainer from './components/tabbar/ShopContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
      { path:'/',redirect: '/home'  },
      { path:'/home',component: HomeContainer   },
      { path:'/member',component: MemberContainer   },
      { path:'/shopcar',component: ShopContainer  },
      { path:'/search',component:  SearchContainer   },
      { path:'/home/newslist',component:  NewsList },
      { path:'/home/newsinfo/:id',component:  NewsInfo }
   ],
    linkActiveClass:' mui-active' //覆盖默认的路由高亮的类
})

// 把路由对象暴露出去
export default router