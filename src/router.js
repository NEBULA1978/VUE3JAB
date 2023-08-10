// router.js
import { createRouter, createWebHistory } from 'vue-router';

import Nosotros from './components/Nosotros.vue';
import QuienesSomos from './components/QuienesSomos.vue';
import InicioNoRegistrado from './components/InicioNoRegistrado.vue';

const routes = [
  { path: '/nosotros', component: Nosotros },
  { path: '/quienes-somos', component: QuienesSomos },
  { path: '/', component: InicioNoRegistrado }, // Ruta para la página de inicio no registrada
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
