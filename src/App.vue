<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Menu from "./views/Menu.vue";

// export default {
//   name: "App",
// };
</script>

<template>
  <div class="wrapper">
    <Menu></Menu>
    <router-view></router-view>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}
.wrapper {
  display: flex;
}
#sub-container {
  flex: 1;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
