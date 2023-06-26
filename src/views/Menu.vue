<template>
  <div>
    <el-menu
      :default-active="$route.path"
      mode="vertical"
      @select="handleMenuSelect"
    >
      <el-menu-item index="/main">Main</el-menu-item>
      <el-menu-item index="/micro/app-vue3-hash">vue3子应用-Hash</el-menu-item>
      <el-menu-item index="/micro/app-vue3-history">vue3子应用-History</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
// import { ElMenu, ElMenuItem } from "element-plus";
export default defineComponent({
  name: "Menu",
  components: {
    // ElMenu,
    // ElMenuItem,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const handleMenuSelect = (index) => {
      router.push(index);
    };

    return {
      handleMenuSelect,
    };
  },
});
</script>

<style>
/* CSS styles for the home page */
</style>
