<template>
    <div class="newsinfo-container">
        <!--大标题-->
        <h3 class="title">{{newsinfo.title}}</h3>
        <!--子标题-->
        <p class="subtitle">
            <span>发表时间: {{newsinfo.add_time | dateFormat}} </span>
            <span>点击: {{ newsinfo.click }}次</span>
        </p>
        <hr>
        <!--内容-->
        <div class="content" v-html="newsinfo.content" ></div>
        <!--评论-->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
    //1.导入评论子组件
    import comment from '../subcomponents/comment.vue'
    import { Toast } from 'mint-ui'
export default {
    data(){
        return{
            id: this.$route.params.id,// 将 URL 地址中传递过来的 Id 值挂载到 data 上，方便以后调用
            newsinfo:{}//新闻对象
        };
    },
    created(){
        this.getNewsInfo();
    },
    methods:{
        getNewsInfo(){ // 获取新闻详情
//            this.$http.get('api/getnew/'+ this.id).then(result => {
//                if(result.body.status === 0){
//                    Toast('获取新闻！');
//                    this.newsinfo = result.body.message[0]//返回数据成功
//                }else{
//                    Toast('获取新闻失败！')  //获取数据失败
//                }
//            })
            this.$http.get('api/getnew/'+this.id).then(result => {
                if(result.body.status === 0){
                    this.newsinfo = result.body.message[0]//返回数据成功
                    console.log(this.newsinfo);
                }else{
                    Toast('获取新闻失败！')  //获取数据失败
                }
            })
            }
        },
    components:{
        'comment-box':comment
    }
}
</script>
<style lang="scss" scoped >
.newsinfo-container{
    padding: 0 4px;
    .title {
        font-size: 16px;
        text-align: center;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color: #336aff;
        display: flex;
        justify-content: space-between;
    }
    .content{
        img{
            width: 100%;

        }
    }
}
</style>