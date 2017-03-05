<template>
    <ul class="sliderbar">
        <li>
            <a href="javascript:;" class="sliderbar-item">
                <i class="iconfont icon-shouye"></i><span>首页</span>
            </a>
        </li>
        <li>
            <a href="javascript:;" class="sliderbar-item">
                <i class="iconfont icon-shouye"></i><span>消息</span>
            </a>
        </li>
        <li>
            <a href="javascript:;" class="sliderbar-item">
                <i class="iconfont icon-fenxiang"></i><span>分享</span>
            </a>
        </li>
    </ul>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">
    .sliderbar {
        position: relative
        background: #3d3d3d
        width 80px
        border-radius: 5px 5px 0 0 / 5px 5px 0 0
        &::before {
            content: ''
            display: block
            position absolute
            right: 10px
            top: -4px
            width: 8px
            height: 8px
            background: #3d3d3d
            transform: rotate(45deg)
        }
        .sliderbar-item {
            &:frist-child {
                border none
            }
            display: block
            height: 45px
            line-height: 45px
            border-bottom 1px solid #666
            span {
                margin-left: 5px
                color #fff
            }
            .iconfont {
                font-size: 18px
            }
        }
    }
</style>