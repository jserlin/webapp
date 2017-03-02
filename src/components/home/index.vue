<template>
    <div class="home-wrap">
        <div class="slide-wrap">
            <img src="../../img/slide.jpg">
        </div>
        <ui-navbar>
            <ui-navbar-item>
                <i class="iconfont icon-daipingjia" slot="icon"></i>
                 <span slot="text">领早餐</span>
            </ui-navbar-item>
            <ui-navbar-item>
                <i class="iconfont icon-naozhong" slot="icon"></i>
                 <span slot="text">来抢购</span>
            </ui-navbar-item>
            <ui-navbar-item>
                <i class="iconfont icon-shijian" slot="icon"></i>
                 <span slot="text">闪购</span>
            </ui-navbar-item>
            <ui-navbar-item>
                <i class="iconfont icon-shengxian" slot="icon"></i>
                 <span slot="text">生鲜直供</span>
            </ui-navbar-item>
            <ui-navbar-item>
                <i class="iconfont icon-xinpin" slot="icon"></i>
                 <span slot="text">新品上市</span>
            </ui-navbar-item>
            <ui-navbar-item>
                <i class="iconfont icon-live" slot="icon"></i>
                 <span slot="text">直播</span>
            </ui-navbar-item>
            <ui-navbar-item>
                <i class="iconfont icon-liwu" slot="icon"></i>
                 <span slot="text">登录有奖</span>
            </ui-navbar-item>
            <ui-navbar-item>
                <i class="iconfont icon-yaoqinghaoyou" slot="icon"></i>
                 <span slot="text">邀请好友</span>
            </ui-navbar-item>
            <ui-navbar-item>
                <i class="iconfont icon-wodedingdan" slot="icon"></i>
                 <span slot="text">订单查询</span>
            </ui-navbar-item>
            <ui-navbar-item>
                <i class="iconfont icon-fenlel" slot="icon"></i>
                 <span slot="text">分类</span>
            </ui-navbar-item>
        </ui-navbar>
    </div>
</template>
<script>
    import uiNavbarItem from '../../uicomponents/navigationbar/navbaritem.vue';
    import uiNavbar from '../../uicomponents/navigationbar/navbar.vue';

export default {
    name: 'home-wrap',
    data() {
        return {

        }
    },
    components: {
        uiNavbarItem,
        uiNavbar
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
