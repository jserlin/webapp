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
        <transition name="move">
            <div class="silder-wrap" v-if="!flag">
                <ui-slider-nav>

                </ui-slider-nav>
            </div>
        </transition>
        <ui-swipe swipeid="swipe01" :autoplay="1000" effect="cube">
            <div class="swiper-slide slide02" slot="swiper-con">Slide 1</div>
            <div class="swiper-slide slide01" slot="swiper-con">Slide 2</div>
            <div class="swiper-slide slide03" slot="swiper-con">Slide 3</div>
        </ui-swipe>
        <ui-swipe swipeid="swipe021" :loop="false" paginationType="fraction" :autoplay="2000">
            <div class="swiper-slide slide01" slot="swiper-con">Slide 1</div>
            <div class="swiper-slide slide02" slot="swiper-con">Slide 2</div>
            <div class="swiper-slide slide03" slot="swiper-con">Slide 3</div>
        </ui-swipe>
    </div>
</template>

<script type="text/ecmascript-6">
    import uiHeader from '../../uicomponents/header/header.vue';
    import uiSliderNav from '../../uicomponents/sildernav/sildernav.vue';
    import uiSwipe from '../../uicomponents/swipe/swipe.vue';

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
            uiSliderNav,
            uiSwipe
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .silder-wrap {
        position: absolute;
        top: 45px;
        right: 3px
        width: 80px
        transition .5s
        z-index: 99
    }

    .silder-show {
        right: 2px
    }

    .move-enter-active, .move-leave-active {
        /*transition:  .5s*/
    }

    .move-enter, .move-leave-active {
        opacity: 0
        right: -100px
    }

    .swiper-pagination-bullet-active {
        background: #fff;
    }

    .swiper-pagination-switch {
        width: 8px
        height: 8px
        border-radius 50%
        background: #fc6156;
    }

    .slide01 {
        background: #41b883;
        text-align: center;
        line-height: 200px;
        font-size: 30px;
        color: #fff;
    }

    .slide02 {
        background: #364a60;
        text-align: center;
        line-height: 200px;
        font-size: 30px;
        color: #fff;
    }

    .slide03 {
        background: #ea6f5a;
        text-align: center;
        line-height: 200px;
        font-size: 30px;
        color: #fff;
    }
</style>