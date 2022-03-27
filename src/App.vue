<template>
  <div>
    <Flower :options="options"></Flower>
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
  </div>
</template>

<script>
import Flower from "./components/Flower.vue";
import FlowerBuilder from './builder/flowerBuilder'
import Slider from "./components/Slider.vue";

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
      options: null,
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
      };
    },
  },
  components: { Flower, Slider },
  watch:{
    optionJson:{
      handler(newVal){
        console.log('change')
        this.options = new FlowerBuilder(newVal) 
      },
      immediate: true
    }

  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
