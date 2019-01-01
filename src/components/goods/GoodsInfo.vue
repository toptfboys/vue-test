<template>
    <div class="goodsinfo-container">
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
        <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <!--商品轮播图区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
                </div>
            </div>
        </div>
        <!--商品购买区域-->
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsinfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价:<del>￥{{ goodsinfo.market_price}}</del>&nbsp;&nbsp;
                        销售价:<span class="now_price">￥{{ goodsinfo.sell_price}}</span>
                    </p>
                    <p>购买数量:<numbox @getcount="getSelectedCount"
                    :max="goodsinfo.stock_quantity"></numbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                        <!--同步加入购物车数字-->
                    </p>
                </div>
            </div>
        </div>
        <!--商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号 : {{ goodsinfo.goods_no}}</p>
                    <p>库存情况 : {{ goodsinfo.stock_quantity  }}</p>
                    <p>上架时间 : {{ goodsinfo.add_time | dateFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
    import swiper from '../subcomponents/swiper.vue'
    import numbox from '../subcomponents/goosinfo_numbox.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,//将路由参数对象中的id挂载到data,方便调用
            lunbotu: [], //商品轮播图数组
            goodsinfo:[], // 商品详情数组
            ballFlag: false,// 控制小球隐藏和显示的标识
            selectedCount:1 // 保存用户选中的商品数量 默认值为1
        }
    },
    created() {
        this.getLunbotu();
        this.getGoodsInfo();
    },
    methods: {
        getLunbotu() {
            this.$http.get('api/getthumimages/' + this.id).then(result => {
                if (result.body.status === 0) {
                    // 循环轮播图数组，为item增加 img 属性，以适应轮播图组件的属性
                    result.body.message.forEach(item =>{
                        item.img = item.src;
                    });
                    this.lunbotu = result.body.message;
                }
            })
        },
        getGoodsInfo(){
            this.$http.get('api/goods/getinfo/' + this.id).then(result => {
                if (result.body.status === 0) {
                    this.goodsinfo = result.body.message[0];
                }
            })
        },
        goDesc(id){
            // 点击使用编程式导航跳转到图文介绍页面
            this.$router.push({ name:"goodsdesc",params:{id}});
        },
        goComment(id){
            // 点击跳转到商品评论页面
            this.$router.push({ name:"goodscomment",params:{id}});
        },
        addToShopCar(){
            // 添加到购物车
            this.ballFlag = !this.ballFlag;
        },
        beforeEnter(el){
            el.style.transform="translate(0,0)";
        },
        enter(el,done){
            el.offsetWidth;
            // 小球的位移距离等于末位置最终定位减去初始位置绝对定位
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document.getElementById("badge").getBoundingClientRect();
            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;
            el.style.transform = `translate(${xDist}px,${yDist}px)`;
            el.style.transition = 'all 1s cubic-bezier(.4,-0.4,1,.58)';
            done()
        },
        afterEnter(el){
            this.ballFlag = !this.ballFlag;
        },
        getSelectedCount(count){
            // 父组件向子组件传值
            this.selectedCount = count;
        }
    },
    components:{
        swiper,
        numbox
    }
}
</script>
<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #ccc;
    overflow: hidden;

    .now_price{
        color: red;
        font-size: 16px;
    }
    .mui-card-footer{
        display: block;
        button{
            margin: 15px 0;
        }
    }
    .ball{
        width: 15px;
        height: 15px;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        z-index: 99;
        top: 408px;
        left: 138px;
    }
}
</style>