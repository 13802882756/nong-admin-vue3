import { registerMicroApps } from "qiankun";

export function registerApps() {
  console.log("注册微应用");
  try {
    registerMicroApps(
      [
        {
          name: "app-vue3", // 微应用之间确保唯一即可，无需要求跟子应用的package name保持一致
          entry: process.env.NODE_ENV === "development" ? "//localhost:8083" : "/self_vue3_hash", // 微应用的入口，可以理解为能够访问微应用独立页面的路径
          container: "#sub-container", // 微应用的挂载节点，见SubContainer.vue中的div容器的id
          // activeRule: process.env.NODE_ENV === "development" ? "/micro/app-vue3" : "/main/app-vue3", 
          activeRule: '/micro/app-vue3-hash' // 注意：activeRule和entry是必须不一样的。如果一样的话，在主应用刷新子应用路由时会直接访问子应用的独立项目。
        },
        {
          name: 'app-vue3-history', // 微应用之间确保唯一即可，无需要求跟子应用的package name保持一致
          entry: process.env.NODE_ENV === 'development' ? '//localhost:8084' : '/self_vue3_history',
          container: '#sub-container',
          activeRule: '/micro/app-vue3-history' 
        }
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
