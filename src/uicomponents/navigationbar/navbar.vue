<template>
    <div class="navbar-wrap">
        <ul class="navbar-con">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../libs/css/stylus/variable.styl";

    .navbar-wrap {
        overflow hidden
        border-radius 10px 10px 0 0/10px 10px 0 0
        background: #fff
        .navbar-con {
            display flex
            justify-content space-between
            flex-wrap wrap
        }
    }
</style>