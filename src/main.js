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

// setDefaultMountApp("/app-vue3"); // 设置主应用启动后默认进入的微应用。

start({
  prefetch: true, // boolean | 'all' | string[] 配置为 true 则会在第一个微应用 mount 完成后开始预加载其他微应用的静态资源
  sandbox: {
    strictStyleIsolation: true, // 开启严格的子应用之间的样式隔离,主应用与子应用不隔离。
  },
});
