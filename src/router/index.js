import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/home/index'
import Category from 'components/category/category'
import My from 'components/my/my'
import Cart from 'components/cart/cart'
import Global from 'components/global/global'

Vue.use(Router);

export default new Router({

  linkActiveClass:'is-active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/global',
      component: Global
    }
  ]
})
