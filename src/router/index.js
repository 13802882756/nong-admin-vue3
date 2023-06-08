import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: "",
    redirect: { name: "home" },
    meta: { title: "这是首页" },
    children: [
      {
        path: "/vue",
        // component: () => import
      },
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
      {
        // history模式需要通配所有路由，详见vue-router文档
        path: "/app/app-vue3/:pathMatch(.*)*",
        name: "app-vue3",
        meta: {},
        component: () => import("@/views/SubContainer.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
