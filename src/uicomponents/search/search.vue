<template>
    <header class="ui-header" :class="{'is-bg': bg,'is-fixed': fixed}">
        <div class="ui-header-button is-left">
            <slot name="left"></slot>
        </div>
        <div class="search-con">
            <div class="icon-wrap">
                <i class="iconfont icon-sousuo"></i>
            </div>
            <input type="text" class="search-input" :placeholder="value">
        </div>
        <div class="ui-header-button is-right">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script>
    export default{
        props: {
            value: {
                type: String,
                default: '休闲坚果'
            },
            bg: {
                type: Boolean,
                default: false
            },
            fixed: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../libs/css/stylus/variable.styl";

    .ui-header {
        display flex
        align-items center
        height 44px
        padding 0 10px
        background #fff;
        color headerDefaultColor
        border-bottom 1px solid #eee;
        a {
            color: headerDefaultColor
        }
        .ui-header-button {
            width 50px
            align-items stretch
            &.is-left {
                font-size: 12px
                text-align left
                .iconfont {
                    margin-left: 3px
                    font-size: 12px
                }
            }
            &.is-right {
                text-align right
            }
            .ui-icon-img {
                width: 20px
                height: 20px
            }
            .margin-right-10 {
                margin-right: 10px
            }
        }
        .search-con {
            position: relative
            padding-left: 30px
            background-color: #f5f5f5;
            flex: 1
            .icon-wrap{
                position: absolute
                left: 20px
                top: 8px
                .iconfont{
                    font-size: 16px
                }
            }
            .search-input {
                display block
                line-height: 30px
                text-indent 1em
                background-color: #f5f5f5;
                border:none
                outline none
            }
        }
        &.is-bg {
            background headerBg
            color #fff
            a {
                color #fff
            }
            .ui-header-title {
                color #fff
            }
        }
        &.is-fixed {
            position: fixed
            left: 0
            right: 0
            top: 0
            z-index: 9
        }
    }
</style>
