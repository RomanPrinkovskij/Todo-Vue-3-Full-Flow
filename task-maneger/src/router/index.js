import { createRouter, createWebHistory } from 'vue-router';
import SplashScreen from '../pages/SplashScreen.vue';
import HomeScreen from '../pages/HomeScreen.vue';
import AddTaskScreen from '../pages/AddTaskScreen.vue';
import EditTaskScreen from '../pages/EditTaskScreen.vue';

const routes = [
  { path: '/', name: 'Splash', component: SplashScreen },
  { path: '/home', name: 'Home', component: HomeScreen },
  { path: '/add-task', name: 'AddTask', component: AddTaskScreen },
  { path: '/edit-task/:id', name: 'EditTask', component: EditTaskScreen },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
