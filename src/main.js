import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "../src/router/index.js";
import { setDefaultMountApp, start } from "qiankun";

const app = createApp(App);

app.use(createPinia());
app.use(ElementPlus);
app.use(router);
app.mount("#app");

// registerMicroApps(
//   [
//     {
//       name: "VueApp",
//       entry: "//localhost:8083",
//       container: "#qiankun-container",
//       activeRule: "/vue",
//     },
//     {
//       name: "ReactApp",
//       entry: "//localhost:8002",
//       container: "#qiankun-container",
//       activeRule: "/react",
//     },
//   ],
//   {
//     beforeLoad: [
//       (app) => {
//         console.log("before", app);
//       },
//     ],
//     beforeMount: [
//       (app) => {
//         console.log("before mount", app);
//       },
//     ],
//     afterUnmount: [
//       (app) => {
//         console.log("before unmount", app);
//       },
//     ],
//   }
// );

setDefaultMountApp("/app-vue3");

start();
