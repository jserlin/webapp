<template>
    <div class="global">
        <ui-header title="全球贱货">
            <template slot="left">
                <i class="iconfont icon-xiangzuojiantou"></i>
            </template>
            <template slot="right">
                <i class="iconfont" @click="changeFlag" :class="{ 'icon-icon3': flag,'icon-daohang': !flag}"></i>
            </template>
        </ui-header>
        <div class="silder-wrap" :class="{'silder-show': !flag}">
            <ui-slider-nav>

            </ui-slider-nav>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import uiHeader from '../../uicomponents/header/header.vue';
  import uiSliderNav from '../../uicomponents/sildernav/sildernav.vue';

  export default {
    data(){
      return {
        flag: true
      }
    },
    methods: {
      changeFlag: function () {
        this.flag = !this.flag
      }
    },
    components: {
      uiHeader,
      uiSliderNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .silder-wrap {
        position: absolute;
        top: 45px;
        right: -100px
        width: 80px
        transition .3s
    }
    .silder-show{
        right: 2px
    }
</style>