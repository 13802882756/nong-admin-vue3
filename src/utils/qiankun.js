import { registerMicroApps } from "qiankun";

export function registerApps() {
  console.log("注册微应用");
  try {
    registerMicroApps(
      [
        {
          name: "app-vue3",
          entry: process.env.NODE_ENV === "development" ? "//localhost:8083" : "/self_vue3", // 微应用的入口，可以理解为能够访问微应用独立页面的路径
          container: "#sub-container", // 微应用的挂载节点，见SubContainer.vue中的div容器的id
          // activeRule: process.env.NODE_ENV === "development" ? "/micro/app-vue3" : "/main/app-vue3", 
          activeRule: '/micro/app-vue3/' // 注意：activeRule和entry是必须不一样的。如果一样的话，在主应用刷新子应用路由时会直接访问子应用的独立项目。
        },
        // {
        //   name: "ReactApp",
        //   entry: "//localhost:8002",
        //   container: "#qiankun-container",
        //   activeRule: "/react",
        // },
      ],
      {
        beforeLoad: [
          (app) => {
            console.log("before", app);
          },
        ],
        beforeMount: [
          (app) => {
            console.log("before mount", app);
          },
        ],
        afterUnmount: [
          (app) => {
            console.log("before unmount", app);
          },
        ],
      }
    );
  } catch (err) {
    console.log(err);
  }
}
