import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import hdtail from '@/components/house_detail'
import detail from '@/components/detail'
import feel from '@/components/feel'
import next from '@/components/next'
import introduce from '@/components/introduce'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/hdtail',
      name: 'hdtail',
      component: hdtail
    }, {
      path: '/detail',
      name: 'detail',
      component: detail
    }, {
      path: '/feel',
      name: 'feel',
      component: feel
    }, {
      path: '/next',
      name: 'next',
      component: next
    }, {
      path: '/introduce',
      name: 'introduce',
      component: introduce
    }
  ]
})
