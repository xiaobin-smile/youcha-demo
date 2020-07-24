import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
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
    children:[
      {
        path:"chayoubreed",
        name:"油茶品种信息维护",
        component:()=>import('@/components/pages/chayoubreed.vue')
      },
      {
        path:"plantbody",
        name:"种植主体信息维护",
        component:()=>import('@/components/pages/plantbody.vue'),
      },
      {
        path:"seedlingcompany",
        name:"种苗企业信息维护",
        component:()=>import('@/components/pages/seedlingcompany.vue'),
      },
      {
        path:"farmingproperty",
        name:"农资企业信息维护",
        component:()=>import('@/components/pages/farmingproperty.vue'),
      },
      {
        path:"farmingmachine",
        name:"农机企业信息维护",
        component:()=>import('@/components/pages/farmingmachine.vue'),
      },
      {
        path:"farmingskill",
        name:"农技企业信息维护",
        component:()=>import('@/components/pages/farmingskill.vue'),
      },
      {
        path:"process",
        name:"精深加工企业维护",
        component:()=>import('@/components/pages/process.vue'),
      },
      {
        path:"detection",
        name:"检测机构信息维护",
        component:()=>import('@/components/pages/detection.vue'),
      },
      {
        path:"supervise",
        name:"监管部门信息维护",
        component:()=>import('@/components/pages/supervise.vue'),
      },
      {
        path:"chayoubrand",
        name:"茶油品牌信息维护",
        component:()=>import('@/components/pages/chayoubrand.vue'),
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
