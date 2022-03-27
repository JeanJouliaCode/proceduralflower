<template>
  <svg class="flower" viewBox="-0.5 -0.5 1 1"></svg>
</template>

<script>
export default {
  props: {
    options: {
      required: true,
    },
  },
  methods: {
    buildFlower() {
      const svgEl = document.querySelector(".flower");
      svgEl.innerHTML = "";
      if(this.options) svgEl.appendChild(this.options.getSVGGroup())
    },
  },
  mounted() {
    this.buildFlower();
  },
  watch: {
    options() {
      this.buildFlower();
    },
  },
};
</script>

<style>
.flower {
  height: 600px;
  overflow: visible;
}
</style>
