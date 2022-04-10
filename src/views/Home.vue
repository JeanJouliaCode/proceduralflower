<template>
  <div class="wrapper">
    <Flower class="flower" :options="optionJson"></Flower>
    <div>
      <Slider v-model="radius" label="radius" />
      <Slider v-model="petalColor1" label="petal color 1" />
      <Slider v-model="petalNumber1" label="number petal 1" />
      <Slider v-model="petalLength1" label="petal length 1" />
      <Slider v-model="petalWidth1" label="petal width 1" />
      <Slider v-model="petalColor2" label="petal color 2" />
      <Slider v-model="petalNumber2" label="number petal 2" />
      <Slider v-model="petalLength2" label="petal length 2" />
      <Slider v-model="petalWidth2" label="petal width 2" />
      <Slider v-model="centerColor" label="center color" />
      <Slider v-model="stemColor" label="stem color" />
      <Slider v-model="stemLength" label="stem length" />
      <Slider v-model="stemWidth" label="stem width" />
      <Slider v-model="stemAmplitude" label="stem amplitude" />
      <Slider v-model="stemFrequency" label="stem frequency" />
    </div>
  </div>
</template>

<script>
import Flower from "../components/Flower.vue";
import Slider from "../components/Slider.vue";

export default {
  data() {
    return {
      radius: Math.random()*100,
      petalNumber1: Math.random()*100,
      petalLength1: Math.random()*100,
      petalWidth1: Math.random()*100,
      petalColor1: Math.random()*100,
      petalNumber2: Math.random()*100,
      petalLength2: Math.random()*100,
      petalWidth2: Math.random()*100,
      petalColor2: Math.random()*100,
      centerColor: Math.random()*100,
      stemColor: Math.random()*100,
      stemLength: Math.random()*100,
      stemWidth: Math.random()*100,
      stemAmplitude: Math.random()*100,
      stemFrequency: Math.random()*100,
    };
  },
  computed: {
    optionJson() {
      return {
        centerRadius: this.radius / 100,
        petalNumber1: this.petalNumber1 / 100,
        petalLength1: this.petalLength1 / 100,
        petalWidth1: this.petalWidth1 / 100,
        petalColor1: this.petalColor1 / 100,
        petalNumber2: this.petalNumber2 / 100,
        petalLength2: this.petalLength2 / 100,
        petalWidth2: this.petalWidth2 / 100,
        petalColor2: this.petalColor2 / 100,
        centerColor: this.centerColor / 100,
        stemColor:this.stemColor / 100,
        stemLength:this.stemLength / 100,
        stemWidth:this.stemWidth / 100,
        amplitude:this.stemAmplitude / 100,
        frequency:this.stemFrequency / 100,
      };
    },
  },
  components: { Flower, Slider },
};
</script>

<style scoped>
.wrapper{
  display: flex;
}
</style>
