<template>
  <div class="admin-home">Home</div>
</template>

<script>
import { defineComponent } from "vue";
// import { ElMenu, ElMenuItem } from "element-plus";
export default defineComponent({
  name: "Home",
  components: {
    // ElMenu,
    // ElMenuItem,
  },
  setup() {},
});
</script>

<style>
.admin-home {
  background-image: url("../assets/ct5.jpeg");
  background-repeat: no-repeat;
  background-size: 100%;
  flex: 1;
}
/* CSS styles for the home page */
</style>
