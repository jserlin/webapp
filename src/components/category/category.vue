<template>
    <div class="category">
        <ui-search title="" :fixed="true">
            <template slot="left">
                <span class="local">上海</span><i class="iconfont icon-xiangxiajiantou"></i>
            </template>
            <template slot="right"><i class="iconfont icon-xiaoxizhongxin"></i></template>
        </ui-search>
    </div>
</template>

<script type="text/ecmascript-6">
    import uiSearch from '../../uicomponents/search/search.vue';
    export default{
        name: 'category',
        data() {
            return {}
        },
        components: {
            uiSearch
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../libs/css/stylus/variable.styl";

</style>