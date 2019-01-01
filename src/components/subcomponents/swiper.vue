<template>
    <div>
        <!--轮播图-->
        <!--谁使用轮播图，谁为我们传递 lunbotuList-->
        <!--此时，lunbotuList 应该是父组件像子组件传值来设置-->
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.img" alt=""
                :class="{'full':isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
    <!--分析为什么商品详情页的轮播图片那么丑-->
    <!--发现因为它的宽和高都使用了 100% 的宽度-->
    <!--分析结果：高度应为100%，宽度为自适应-->
    <!--既然首页轮播图和商品详情的轮播图只有宽度有分歧-->
    <!--那么我们可以手动设置它的宽-->

</template>

<script>
export default {
    props:["lunbotuList","isfull"]
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        text-align: center;
        img{
            height: 100%;
        }
    }
}
.full{
    width: 100%;
}
</style>