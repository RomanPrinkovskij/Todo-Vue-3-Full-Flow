import { createRouter, createWebHistory } from 'vue-router';
import SplashScreen from '../pages/SplashScreen.vue';
import TodosScreen from '../pages/Todos.vue';
import AddTaskScreen from '../pages/AddTaskScreen.vue';
import EditTaskScreen from '../pages/EditTaskScreen.vue';

const routes = [
  { path: '/', name: 'Splash', component: SplashScreen },
  { path: '/todo', name: 'Todos ', component: TodosScreen },
  { path: '/add-task', name: 'AddTask', component: AddTaskScreen },
  { path: '/edit-task/:id', name: 'EditTask', component: EditTaskScreen },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
