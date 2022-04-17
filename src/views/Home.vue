<template>
  <div class="page">
    <div class="wrapper">
      <img
        src="../assets/reload.svg"
        alt="refresh"
        class="reload"
        @click="reload"
      />
      <div class="flowerContainer">
        <Flower class="flower" :options="optionJson" ref="flower"></Flower>
        <Button @click="download" class="button">Download svg</Button>
      </div>
      <div class="atributeContainer" :class="{ hide: !showFlower }">
        <div class="seeds-atributes">
          <div class="sliders-wrapper">
            <Slider v-model="radius" label="radius" />
            <Slider v-model="petalColor1" label="petals color" />
            <Slider v-model="petalNumber1" label="number of petals" />
            <Slider v-model="petalLength1" label="petals length" />
            <Slider v-model="petalWidth1" label="petals width" />
            <Slider v-model="petalColor2" label="sub-petals color" />
            <Slider v-model="petalNumber2" label="number of sub-petals" />
            <Slider v-model="petalLength2" label="sub-petals length" />
            <Slider v-model="petalWidth2" label="sub-petals width" />
            <Slider v-model="centerColor" label="center of flower color" />
            <Slider v-model="stemColor" label="stem color" />
            <Slider v-model="stemLength" label="stem length" />
            <Slider v-model="stemWidth" label="stem width" />
            <Slider v-model="stemAmplitude" label="stem amplitude" />
            <Slider v-model="stemFrequency" label="stem frequency" />
          </div>
          <img
            src="../assets/letter.png"
            alt=""
            class="letter"
            @load="showScreen"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Flower from "../components/Flower.vue";
import Slider from "../components/Slider.vue";

export default {
  data() {
    return {
      radius: Math.random() * 100,
      petalNumber1: Math.random() * 100,
      petalLength1: Math.random() * 100,
      petalWidth1: Math.random() * 100,
      petalColor1: Math.random() * 100,
      petalNumber2: Math.random() * 100,
      petalLength2: Math.random() * 100,
      petalWidth2: Math.random() * 100,
      petalColor2: Math.random() * 100,
      centerColor: Math.random() * 100,
      stemColor: Math.random() * 100,
      stemLength: Math.random() * 100,
      stemWidth: Math.random() * 100,
      stemAmplitude: Math.random() * 100,
      stemFrequency: Math.random() * 100,
      showFlower: false,
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
        stemColor: this.stemColor / 100,
        stemLength: this.stemLength / 100,
        stemWidth: this.stemWidth / 100,
        amplitude: this.stemAmplitude / 100,
        frequency: this.stemFrequency / 100,
      };
    },
  },
  methods: {
    showScreen() {
      this.showFlower = true;
    },
    reload() {
      location.reload();
    },
    download() {
      this.$refs.flower.downloadSVG();
    },
  },
  components: { Flower, Slider },
};
</script>

<style scoped>
.hide{
  visibility: hidden;
}

.page{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.wrapper {
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 700px;
  height: 600px;
  border: solid 1px black;
  border-radius: 20px;
  background: rgb(255, 255, 255);
}

.reload{
  width: 30px;
  height: 30px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}

.atributeContainer { 
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.flowerContainer{
  display:flex; 
  flex-direction: column;
  justify-content: center;
}

.seeds-atributes{
  position: relative;
  flex-direction: column;
  align-items: center;
}

.letter{
  width: 320px;
}

.sliders-wrapper{
  position: absolute;
  top: 40px;
  left: 10px;
}

.flower{
  width: 200px;
}

.button{
  padding: 5px;
  background: antiquewhite;
}
</style>
