import { createRouter, createWebHistory } from 'vue-router'
import EstudianteView from '@/views/EstudianteView'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'

function estaAutenticado(){
  let result =  localStorage.getItem('auth') === 'true'
  console.log(result);
  return result;
}

const routes = [
  {
    path: '/estudiante',
    name: 'estudiante',
    component: EstudianteView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      requiereAutenticacion: true //protegia
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) =>{
  console.log('antes')
  if(to.meta.requiereAutenticacion){
     console.log('auth')
    //Si no esta autenticado
    if(!estaAutenticado()){
       console.log('exito')
      next('/login')
    }else{
      next();
    }
  }else{
    next();
  }
})

export default router
