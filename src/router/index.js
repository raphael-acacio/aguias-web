import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/login/Login.vue'
import StudentRegistration from '../components/students/StudentRegistration.vue'
import HomeMenu from '@/components/home/HomeMenu.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },
  {path: '/home', name: 'HomeMenu', component: HomeMenu },
  { path: '/register', name: 'StudentRegistration', component: StudentRegistration },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router