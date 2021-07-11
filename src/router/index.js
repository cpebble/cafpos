import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BeerView from '../views/BeerView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/beers',
    name: 'BeerView',
    component: BeerView,
    alias: '/'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
