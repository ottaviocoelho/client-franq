import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';
import { isLogged } from './userApi'

const routes = [
  { path: '/', component: Home },
  { path: '/sign-in', component: SignIn },
  { path: '/sign-up', component: SignUp }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if(isLogged()) {
    next()
  } else {
    if(to.path == "/sign-in" || to.path == "/sign-up") {
      next()
    } else {
      next('/sign-in')
    }
  }
});

export default router;