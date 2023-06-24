
<template>
  <div class="bg-zinc-900 text-white flex flex-col p-4 min-h-screen">
    <Header />

    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",

  components: {
    Header,
  },
};
</script>
