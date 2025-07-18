import { createRouter, createWebHistory } from 'vue-router'
import EstudianteView from '@/views/EstudianteView'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import RecursoProhibidoView from '@/views/RecursoProhibidoView.vue'
import NotasIngresoView from '@/views/NotasIngresoView.vue'

import {obtenerPaginasPermitidas} from '../helpers/Autorizacion'

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
    },
  },
   {
    path: '/notas',
    name: 'notas',
    component: NotasIngresoView,
    meta: {
      requiereAutenticacion: true //protegia
    },
  },
   {
    path: '/403',
    name: '403',
    component: RecursoProhibidoView,
    meta: {
      requiereAutenticacion: true //protegia
    },
  },
    {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      requiereAutenticacion: true //protegia
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//Guardian
router.beforeEach((to,from,next) =>{
  console.log('antes')
  //validando si la pagina debe estar autenticada (requeriereAutenticacion : true)
  if(to.meta.requiereAutenticacion){
     console.log('auth')
    //Si no esta autenticado
    if(!estaAutenticado()){
      next('/login')
    }else{
      //autenticado
      //Aqui valido si esta autorizado
      let usuario = localStorage.getItem('usuario');
      let paginas = obtenerPaginasPermitidas(usuario);
      if(paginas.includes(to.path)){
        next();
      }else{
        next('/403');
      }
      next();
    }
  }else{
    next();
  }
})

export default router
