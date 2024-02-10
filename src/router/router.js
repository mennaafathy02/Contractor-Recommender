import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/" || "/home" || "/index" || "",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/tenders",
    name: "tenders",
    component: () => import("../views/TendersView.vue"),
  },
  {
    path: "/contractors",
    name: "contractors",
    component: () => import("../views/ContractorsView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/register-contractor",
    name: "register-contractor",
    component: () => import("../components/ContractorQuestions.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/logout",
    name: "logout",
  },
  {
    path: "/announce-tender",
    name: "announce-tender",
    component: () => import("../views/AnnounceTenderView.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      top: 0,
    };
  },
});
export default router;
