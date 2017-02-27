<template>
    <div id="app">
        <ui-tabbar v-model="selected">
            <ui-tab-item id="首页">
                <router-link to="/index">
                    首页
                </router-link>
            </ui-tab-item>
            <ui-tab-item id="分类">
                <router-link to="/category">
                    分类
                </router-link>
            </ui-tab-item>
            <ui-tab-item id="全球尖货">
                <router-link to="/global">
                    全球尖货
                </router-link>
            </ui-tab-item>
            <ui-tab-item id="购物车">
                <router-link to="/cart">
                    购物车
                </router-link>
            </ui-tab-item>
            <ui-tab-item id="我的">
                <router-link to="/my">
                    我的
                </router-link>
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
                selected: '首页'
            };
        },
        computed: {
            filterResult() {
                return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value))
            }
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
        color: blueviolet;
    }
</style>
