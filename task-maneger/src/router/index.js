import { createRouter, createWebHistory } from 'vue-router';
import SplashScreen from '../pages/SplashScreen.vue';
import Todos from '../pages/Todos.vue';
import AddTaskScreen from '../pages/AddTaskScreen.vue';
import EditTaskScreen from '../pages/EditTaskScreen.vue';

const routes = [
  { path: '/', name: 'SplashScreen', component: SplashScreen },
  { path: '/tasks', name: 'Todos', component: Todos },
  { path: '/tasks/add', name: 'AddTaskScreen', component: AddTaskScreen,props: true  },
  { path: '/tasks/edit/:id', name: 'EditTaskScreen', component: EditTaskScreen, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
