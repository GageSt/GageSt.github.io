/*[Devlog]
-Routed Website pages

Error: Is not a module problem for imports not serious, though persistent
*/
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JoinUsView from '../views/JoinUsView.vue'
import InfoView from '../views/InfoView.vue'
import ShopView from '../views/ShopView.vue'
import LocationView from '../views/LocationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/join',
      name: 'join',
      component: JoinUsView
    },
    {
      path: '/info',
      name: 'info',
      component: InfoView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path:'/location',
      name: 'location',
      component: LocationView,
    },
  ]
})

export default router
