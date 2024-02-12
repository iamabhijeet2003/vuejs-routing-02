import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfesoresView from '../views/ProfesoresView.vue'
import IncidenciasView from '../views/IncidenciasView.vue'
 const routes = [
 {
     path: '/',
     name: 'home',
     component: HomeView
 },
 {
     path: '/profesores',
     name: 'profesores',
     component: ProfesoresView
 },
  {
    path: "/incidencias",
    name: 'incidencias',
    component: IncidenciasView
  },
 ]

 const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),routes
 })

 export default router