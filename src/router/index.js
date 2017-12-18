import Vue from 'vue'
import Router from 'vue-router'
import bookshelf from '@/page/bookshelf/bookshelf'
import book from '@/page/book/book'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'bookshelf',
      component: bookshelf
    },
    {
      path: '/book',
      name: 'book',
      component: book
    }
  ]
})
