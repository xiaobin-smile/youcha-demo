import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path:"/",
    redirect: '/home'
  },
  { //首页
    path:"/home",
    name:"home",
    component:()=>import('@/views/Home.vue'),
    meta: { title: '首页' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
