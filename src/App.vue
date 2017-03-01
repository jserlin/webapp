<template>
    <div id="app">
        <ui-tabbar v-model="select">
            <ui-tab-item id="home" isRouter>
            <i slot="icon-normal" class="iconfont icon-shouye" ></i>
                    <span>首页</span>
            </ui-tab-item>
            <ui-tab-item id="category" isRouter> 
                 <i slot="icon-normal" class="iconfont icon-sort" ></i>
                    <span>分类</span>
            </ui-tab-item>
            <ui-tab-item id="global" isRouter>
               <i slot="icon-normal" class="iconfont icon-iosworldoutline" ></i>
                    <span>全球尖货</span>
            </ui-tab-item>
            <ui-tab-item id="cart" isRouter>
              <i slot="icon-normal" class="iconfont icon-gouwuche" ></i>
                    <span>购物车</span>
            </ui-tab-item>
            <ui-tab-item id="my" isRouter>
             <i slot="icon-normal" class="iconfont icon-wodejuhuasuan"></i>
                    <span>我的</span>
            </ui-tab-item>
        </ui-tabbar>
        <router-view></router-view>
    </div>
</template>

<script>
import uiTabbar from './uicomponents/tabbar/tabbar';
import uiTabItem from './uicomponents/tabbar/tabbar-item';
    export default {
        name: 'app',

        data() {
            return {
                select: 'home'
            };
        },
        computed: {
        },
        components: {
            uiTabbar,
            uiTabItem
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
    }
    .acitve{
        color: #ff6900;
    }
</style>
