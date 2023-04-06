import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import sweats from '../views/sweats.vue'
import Apparel from '../views/Apparel.vue'
import bottoms from '../views/bottoms.vue'
import shirts from '../views/shirts.vue'


const routes = [ 
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Apparel',
    name: 'Apparel',
    component: Apparel,
  },
  {
    path: '/sweats',
    name: 'sweats',
    component: sweats,
  },
  {
    path: '/bottoms',
    name: 'bottoms',
    component: bottoms,
  },
  {
    path: '/shirts',
    name: 'shirts',
    component: shirts,
  },
  {
    path: '/Apparel',
    name: 'Apparel',
    component: Apparel,
  },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })


  export default router