import { createRouter, createWebHistory } from 'vue-router'
import item from '../views/item.vue'

const routes = [ 
  {
    path: '/',
    name: 'item',
    component: item,
  }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })


  export default router