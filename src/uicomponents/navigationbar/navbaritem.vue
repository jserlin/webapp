<template>
    <li class="navbar-item">
        <div class="navbar-item-icon">
            <slot name="icon"></slot>
        </div>
        <span class="navbar-item-text">
          <slot name="text"></slot>
      </span>
    </li>
</template>

<script>

</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../libs/css/stylus/variable.styl";

    .navbar-item {
        flex 20%
        .navbar-item-icon {
            margin: 10px auto 5px
            .iconfont {
                font-size: 26px
            }
        }
        .navbar-item-text {
            color: #999
            font-size: 11px
        }
    }
</style>