import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Books from '../views/BooksView.vue'
import Languages from '../views/LanguagesView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/lang',
    name: 'Languages',
    component: Languages,
  },
  {
    path: '/lang/:lang',
    name: 'Books',
    component: Books,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
