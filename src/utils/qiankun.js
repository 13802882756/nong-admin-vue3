import { registerMicroApps } from "qiankun";

export function registerApps() {
  console.log("注册微应用");
  try {
    registerMicroApps(
      [
        {
          name: "app-vue3",
          entry: process.env.NODE_ENV === "development" ? "//localhost:8083" : "/self_vue3",
          container: "#sub-container",
          // activeRule: process.env.NODE_ENV === "development" ? "/micro/app-vue3" : "/main/app-vue3", 
          activeRule: '/micro/app-vue3/'
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
