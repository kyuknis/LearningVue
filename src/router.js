import Vue from 'vue'
import Router from 'vue-router'
import Lists from './views/lists/Lists'
import ListsIndex from './views/lists/ListsIndex'
import ListCreate from './views/lists/ListsCreate'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/lists',
      alias: '',
      component: Lists,
      children: [
        {
          path: '',
          component: ListsIndex
        },
        {
          path: 'create',
          component: ListCreate
        }
      ]
    }
    // {
    //   path: '/todolists',
    //   name: 'todolists',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
