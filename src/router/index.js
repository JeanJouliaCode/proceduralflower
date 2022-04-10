import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import field from "../views/field.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/field",
    name: "field",
    component: field,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
