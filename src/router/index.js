import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: "/main",
    meta: { title: "这是首页" },
    component: Home,
    children: [
      {
        path: "/home",
        name: "home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        component: About,
      },
      // {
      //   path: "/micro/app-vue3/:pathMatch(.*)*",
      //   name: "app-vue3",
      //   meta: {},
      //   component: () => import("@/views/SubContainer.vue"),
      // },
    ],
  },
  {
    path: "/micro/app-vue3-hash/:pathMatch(.*)*",
    name: "app-vue3-hash",
    meta: {},
    component: () => import("@/views/SubContainer.vue"),
  },
  {
    path: "/micro/app-vue3-history/:pathMatch(.*)*",
    name: "nong-micro-vue3-history",
    meta: {},
    component: () => import("@/views/SubContainer.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
