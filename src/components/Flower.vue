<template>
  <div class="container">
    <div class="flower" id="flower"></div>
    <div class="stem" id="stem"></div>
  </div>
</template>

<script>
import StemBuilder from '../builder/stemBuilder'
import FlowerBuilder from '../builder/flowerBuilder'

export default {
  props: {
    options: {
      required: true,
    },
  },
  methods: {
    buildFlower() {
      const flowerDiv = document.getElementById("flower");
      const stemDiv = document.getElementById("stem");

      flowerDiv.innerHTML = "";
      stemDiv.innerHTML = "";

      const flower = new FlowerBuilder({
        centerRadius : this.options.centerRadius ,
        petalNumber1 : this.options.petalNumber1 ,
        petalLength1 : this.options.petalLength1 ,
        petalWidth1 : this.options.petalWidth1 ,
        petalColor1 : this.options.petalColor1 ,
        petalNumber2 : this.options.petalNumber2 ,
        petalLength2 : this.options.petalLength2 ,
        petalWidth2 : this.options.petalWidth2 ,
        petalColor2 : this.options.petalColor2 ,
        centerColor : this.options.centerColor ,
      })
      const flowerSVG = flower.getSVG()

      const stem = new StemBuilder({
        color : this.options.stemColor,
        length : this.options.stemLength,
        width : this.options.stemWidth,
        flowerHeadRadius : flower.flowerHeadRadius,
        frequency : this.options.frequency,
        amplitude : this.options.amplitude,
      })
      const stemSVG = stem.getSVG()

      stemSVG.style.overflow = "visible"

      flowerDiv.appendChild(flowerSVG)
      stemDiv.appendChild(stemSVG)
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

<style scoped>
.container {
  width: 100px;
  overflow: visible;
}

.flower{
  position: relative;
  width: 300px;
  z-index: 2;
}

.stem{
  position: relative;
  z-index: 1;
}
</style>
