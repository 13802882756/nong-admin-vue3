<template>
  <div>
    <el-menu
      :default-active="$route.path"
      mode="horizontal"
      @select="handleMenuSelect"
    >
      <el-menu-item index="/">522test</el-menu-item>
      <el-menu-item index="/micro/app-vue3/">子应用</el-menu-item>
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
