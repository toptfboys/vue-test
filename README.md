## 用（传统方式）命令行把修改过后的代码上传到github
1. git add
2. git commit -m "提交信息"
3. git push

## 制作首页App组件
1.完成 Header区域，使用的是MINIT-UI中的Header组件
2, 制作底部的Tabbar区域，使用MUI 的Tabbar.html
+ 在制作购物车小图标的时候 ，操作会相对多一些
3.要在中间区域放置一个由router-view配置的路由显示的组件


## 改造 tabbar 为 router-link

## 点击 tabbar中的路由连接 展示对应的路由组件

## 制作首页轮播图布局
## 加载首页轮播图数据
1.获取数据用 vue-resource
2.使用vue-resource 的 this.$http.get 获取数据
3.获取到的数据，要保存到 data 身上
4.使用 v-for 循环渲染每个 item 项

## 改造九宫格 区域的样式

## 改造新闻咨询 路有链接
## 新闻资讯 页面制作
1. 绘制页面，使用 media-list
2. 使用 vue-resource 获取数据
3. 展示真实数据

## 实现 新闻资讯列表 点击跳转到新闻详情
1. 把列表中的每一项改造为 router-link，同时在跳转的时候提供唯一的ID
2. 创建新闻详情的组件页面 NewsInfo.vue
3. 在路由模块中，将详情的路由地址和组件页面联系起来

## 实现新闻详情的页面布局和数据渲染

## 单独封装一个 comment.vue 评论子组件
1. 先单独创建一个 comment.vue 组件模板
2. 在需要 comment.vue 的页面导入组件
3.引用

## 获取评论数据 并且显示
1.getComments()


## 实现点击加载更多评论的功能
1.为加载更多按钮绑定加载数据事件，在事件中，请求下一页数据
2.点击加载更多，让 pageIndex+1,获取新一页数据
3. 为了方式新数据覆盖老数据的情况，我们在点击加载更多的时候，每当获取到新数据时，让老数据调用数组的
concat 方法，拼接上新数据

## 发表评论
1. 把文本框做双向数据绑定
2. 为发表按钮绑定一个时间
3. 校验评论内容是否为空，如果为空，则 Toast 提示用户 评论内容不能为空
4. 通过  vue-resource 发送一个请求,把评论内容提交给服务器
5. 当评论 OK 后，重新刷新列表 ，以查看最新的评论
+ 如果调用 getComments 方法重新刷新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到
+ 换一种思路: 当评论成功后，在客户端，手动拼接处一个新的评论对象，然后调用数组的 unshift 方法， 把
最新的评论，追加到 data 中的 comments 的开头; 这样就能完美实现刷新评论表的需求;

## 改造图片分析，按钮为 路由的连接并显示对应的组件页面
## 绘制图片列表 组件页面结构并美化样式
1. 制作 顶部的滑动条
2. 制作 底部的图片列表

## 制作顶部滑动条的坑们：
1. 需要借助于 MUI 中的 tab-top-webview-main.html
2. 需要把 slider 区域的 mui-fullscreen 类去掉
3. 滑动条无法正常触发滑动，通过官方文档，发现这是JS组件，需要被初始化一下
+ 导入 mui.js
+ 调用官方提供的方式来初始化
'''  remove "use_strict" directive
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
'''
4. 我们在初始化 滑动条的时候，导入mui.js, 但是，控制台报错：'Uncaught TypeError: 'caller', 'callee', and 'arguments' properties
 may not be accessed on strict mode functions or the arguments objects for calls to them',
 但是webpack 打包好的 bundle.js 中，默认是启用严格模式的，所以这两者冲突了;
 +解决方案: 1.吧 Mui.js 中的非严格模式的代码改掉；但是不现实；2.把 webpack 打包时候的严格
 模式禁用掉
 +最终，我们选择了第二种方案，解决了
 babel-plugin-transform-remove-strict-mode
5. 刚进入图片分享页面的时候，滑动条无法正常工作，经过分析，发现如果要初始化滑动条，
 必须等DOM元素加载完毕，所以我们把初始化滑动条的代码放到了 mounted 声明周期函数里面
6. 当滑动条 调试OK后，发现， tabbar 无法正常工作了，这时候，我们需要把每个 tabbar 按
钮的样式中的 'mui-tab-item' 重新改一下名字
7. 获取所有分类，并渲染列表;


## 制作图片列表区域
1. 图片列表需要使用冷加载技术，使用 Mint-UI 提供的现成的组件'lazy-load'
2. 根据 'lazy-load'的使用文档，尝试使用
3. 渲染图片列表数据

## 实现了图片列表的懒加载改造和样式美化
1. 在改造 li 成 router-link 的时候，需要使用 tag 属性指定渲染成为 哪种元素

## 实现 详情页面的布局和美化，同时渲染数据

## 实现 图片详情中 缩略图插件
1. 使用 插件 vue-preview 这个缩略图插件
2. 获取到所有的图片列表，然后使用v-for 指令渲染数据
3. 注意: img 标签上的 class 不能去掉
4. 每个图片数据对象中，必须有 w 和 h 属性

## 绘制 商品列表页面 展示基本结构并美化

## 尝试在手机上去进行项目的预览和测试
1. 保证自己的手机可以正常运行
2. 保证手机和开发项目的电脑属于同一个 WIFI 环境中，也就是说手机可以访问到
电脑的 IP
3. 打包自己的项目中 package.json 文件，在 dev 脚本中，添加一个 --host 指令，
把当前电脑的 WIFI IP 地址了，设置为 --host 指令值;
+ 如何查看自己电脑所处的 WIFI 的 IP 呢，在 cmd 中终端中运行 ‘ipconfig',
.