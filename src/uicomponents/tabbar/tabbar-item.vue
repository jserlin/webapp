<template>
    <div class="ui-tabbar-item"  :class="{'is-active':isActive}" @click="goToRouter">
        <span class="ui-tabbar-item-icon">
			<slot name="icon-normal"></slot>
		</span>
        <span class="ui-tabbar-item-text"><slot></slot></span>
    </div>
</template>

<script>
/*
* @desc 搭配tabbar使用
* @param id -选中后返回的值
* @param isActive -根据父组件的value和当前组件的id判断是否为选中状态
* @param $parent.$emit('input', id)  -触发父组件的自定义事件
* @param {slot} [icon-normal] - icon-默认图标内容嵌入
* @param {slot}  文字内容嵌入
*
*/
  export default {
    props: {
        id: {
            type: String
        },
        isRouter: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        isActive() {
            //￥parent 父实例
            if(this.$parent.value === this.id) {
                return true;
            }
        }
    },
    methods:{
        goToRouter() {
            this.$parent.$emit('input', this.id);
            if (this.isRouter) {
                // 根据id跳转到对应的路由页面
                this.$router.push(this.id);
            }
        }
    }
  }    
</script>

<style lang="stylus">
    @import "../../libs/css/stylus/variable.styl";

    .ui-tabbar-item {
    flex: 1;
    text-align: center;
    .ui-tabbar-item-icon {
        display: block;
        padding-top: 4px;
        margin-bottom: 4px;
    }
    .ui-tabbar-item-text {
        display: block;
        font-size: 10px;
        color: #949494;
    }
&.is-active {
    .iconfont{
        font-size: 26px;
        color:#ff6900;
    }
    .ui-tabbar-item-text {
        color:#ff6900;
    }
}    
}
</style>
