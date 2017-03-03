<template>
    <div class="home-wrap">
        <ui-search title="" :fixed="true">
            <template slot="left">
                <span class="local">上海</span><i class="iconfont icon-xiangxiajiantou"></i>
            </template>
            <template slot="right"><i class="iconfont icon-xiaoxizhongxin"></i></template>
        </ui-search>
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
        <div class="headlines">
            <div class="headline-img">
                <img src="../../img/headlines.png">
            </div>
            <div class="headline-con">
                <ul class="headline-ul">
                    <div class="icon-wrap"><i class="iconfont icon-shengyin"></i></div>
                    <li class="headline-list">风雅吃货的诗和远方</li>
                    <li class="headline-list">开学了皮皮虾我们走</li>
                </ul>
                <div class="headline-more">更多</div>
            </div>
        </div>
        <section class="scene-wrap">
            <div class="scene-left">
                <img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1488078818051_9667_67.jpg" alt="">
            </div>
            <div class="scene-right">
                <div class="scene-list"><img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1488078829942_1732_63.jpg" alt=""></div>
                <div class="scene-list">
                    <div class="scene-list-con"><img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1488078837537_4354_83.jpg" alt=""></div>
                    <div class="scene-list-con"><img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1488078840957_6926_85.jpg" alt=""></div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import uiNavbarItem from '../../uicomponents/navigationbar/navbaritem.vue';
    import uiNavbar from '../../uicomponents/navigationbar/navbar.vue';
    import uiSearch from '../../uicomponents/search/search.vue';

    export default {
        name: 'home-wrap',
        data() {
            return {}
        },
        components: {
            uiNavbarItem,
            uiNavbar,
            uiSearch
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../libs/css/stylus/variable.styl"

    .headlines {
        display: flex;
        justify-content center
        align-content center
        height: 34px;
        padding: 7px 12px;
        overflow: hidden;
        background: bgWhite;
        .headline-img {
            flex 0 63px
            height: 33px
            margin-right: 10px
            /*background: bgGrey;*/
        }
        .headline-ul {
            position: relative
            flex 1
            text-align left
            text-indent 3em
            .icon-wrap{
                position: absolute
                top 1px
                left -28px
                .iconfont{
                    font-size: 14px
                }
            }
        }
        .headline-con {
            display: flex
            flex 1
            border-radius 17px
            font-size: 12px
            line-height: 34px
            color: fontWhite
            background: bgRed;
        }
        .headline-more {
            flex 0 63px
        }
    }
    .scene-wrap{
        margin-top: 16px
        /*overflow: hidden*/
        display: flex
        background: bgWhite;
        /*align-items stretch*/
        .scene-left{
            flex 38%
        }
        .scene-right{
            flex 62%
            .scene-list {
                &:nth-child(2){
                    display: flex
                    .scene-list-con{
                        flex 1
                    }
                }
            }
        }
    }
</style>
