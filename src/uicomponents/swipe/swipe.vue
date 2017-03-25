<template>
    <div class="swiper-container" :class="swipeid">
        <div class="swiper-wrapper">
            <slot name="swiper-con"></slot>
        </div>
        <!-- 分页器 -->
        <div :class="{'swiper-pagination':pagination}" :style="{'text-align':paginationDirection}"></div>
    </div>
</template>

<script>
    import Swiper from './swiper';
    export default {
        props: {
            swipeid: {
                type: String,
                default: ''
            },
            effect: {
                type: String,
                default: 'slide'
            },
            loop: {
                type: Boolean,
                default: true
            },
            direction: {
                type: String,
                default: 'horizontal'
            },
            pagination: {
                type: Boolean,
                default: true
            },
            autoplay: {
                type: Number,
                default: 5000,
            },
            paginationType: {
                type: String,
                default: 'bullets'
            },
            paginationDirection:{
                type:String,
                default:'center'
            }
        },
        mounted() {
            this._initSwipe();
        },
        methods: {
            _initSwipe: function () {
                new Swiper('.'+this.swipeid, {
                    //循环
                    loop: this.loop,
                    //分页器
                    pagination: '.swiper-pagination',
                    //分页类型
                    paginationType: this.paginationType, //fraction,progress,bullets
                    //自动播放
                    autoplay: this.autoplay,
                    //方向
                    direction: this.direction,
                    //特效
                    effect: this.effect, //slide,fade,coverflow,cube

                })
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./swiper.min.css";
</style>