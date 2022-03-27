<template>
  <div>
    <label for="myRange">{{ label }}</label>
    <input
      type="range"
      min="0"
      :max="max"
      class="slider"
      id="myRange"
      v-model="model"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: this.value,
    };
  },
  props: {
    max: {
      type: Number,
      default: 100,
    },
    value: {
      type: Number,
    },
    label: {
      type: String,
      required: true,
    },
  },
  watch: {
    model(currentValue) {
      this.$emit("input", parseInt(currentValue));
    },
  },
};
</script>

<style></style>
