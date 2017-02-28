<template>
    <div class="ui-tabbar">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    //该传值很关键
    props: ['value']
  }    
</script>

<style lang="stylus">
.ui-tabbar {
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    height: 50px;
    background: #fff;
    border-top: 1px solid #e4e4e4;
}
</style>
