import { createRouter, createWebHistory } from 'vue-router'
import EstudianteView from '@/views/EstudianteView'

const routes = [
  {
    path: '/estudiante',
    name: 'estudiante',
    component: EstudianteView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
