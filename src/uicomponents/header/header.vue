<template>
    <header class="ui-header" :class="{'is-bg': bg,'is-fixed': fixed}">
        <div class="ui-header-button is-left">
           <slot name="left"></slot>
        </div>
        <h1 class="ui-header-title" v-text="title"></h1>
        <div class="ui-header-button is-right">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script>
  export default{
        props: {
            title:{
                type: String,
                default:''
            },
            bg:{
                type:Boolean,
                default: false
            },
            fixed:{
                type:Boolean,
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
            &.isleft {
                text-align center
            }
            &.isright {
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
        .ui-header-title {
            flex: 1
            text-align center
            font-size: 16px
            text-overflow ellipsis
            white-space nowrap
            overflow: hidden
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