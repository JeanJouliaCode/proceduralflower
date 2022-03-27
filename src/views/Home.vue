<template>
  <div class="home">
    <Flower msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Flower from "@/components/Flower.vue";

export default {
  name: "Home",
  components: {
    Flower,
  },
};
</script>
