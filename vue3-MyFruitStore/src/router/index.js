import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //配置path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      //二级路由配置
      children:[
        {
          //默认页组件path置空
          path:'',
          component:Home
        },
        {
          path:'category',
          component:Category
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
