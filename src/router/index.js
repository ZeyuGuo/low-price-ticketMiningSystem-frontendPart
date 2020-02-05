import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Flight = () => import('views/flight/Flight')
const Schedule = () => import('views/schedule/Schedule')
const Profile = () => import('views/profile/Profile')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/flight',
    component: Flight
  },
  {
    path: '/schedule',
    component: Schedule
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
