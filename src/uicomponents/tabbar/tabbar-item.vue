<template>
    <a class="ui-tabbar-item">
        <span class="ui-tabbar-item-icon">
			<slot name="icon-normal"></slot>
		</span>
        <span class="ui-tabbar-item-text"><slot></slot></span>
    </a>
</template>

<script>
  export default {}    
</script>

<style lang="stylus">
.ui-tabbar-item {
    flex: 1;
    text-align: center;
    .ui-tabbar-item-icon {
        display: block;
        padding-top: 2px;
        img {
            width: 28px;
            height: 28px;
        }
    }
    .ui-tabbar-item-text {
        display: block;
        font-size: 10px;
        color: #949494;
    }
    &.is-active {
        .ui-tabbar-item-text {
            color: #42bd56;
        }
    }
}
</style>
