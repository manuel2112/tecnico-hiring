import { createWebHistory, createRouter } from "vue-router";

import TareaHome from "../components/TareaHome";
import TareaCreate from "../components/TareaCreate";
import TareaEdit from "../components/TareaEdit";

const routes = [
  {
    path: "/home",
    name: "tarea.home",
    component: TareaHome,
  },
  {
    path: "/tarea/create",
    name: "tarea.create",
    component: TareaCreate,
  },
  {
    path: "/tarea/:id/edit",
    name: "tarea.edit",
    component: TareaEdit,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;