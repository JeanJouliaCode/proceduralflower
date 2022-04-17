<template>
  <div class="container">
    <div class="flower" id="flower" ref="flower"></div>
    <div class="stem" id="stem" ref="stem"></div>
    <div class="pot">
      <img src="../assets/pot.png" alt="pot" class="pot__image" />
    </div>
  </div>
</template>

<script>
import StemBuilder from "../builder/stemBuilder";
import FlowerBuilder from "../builder/flowerBuilder";

export default {
  props: {
    options: {
      default: () => {},
    },
    optionsArray: {
      default: () => [],
    },
  },
  data() {
    return {
      optionsCpy: {},
    };
  },
  methods: {
    downloadSVG() {
      const svg = document.getElementById("flower").innerHTML;
      const blob = new Blob([svg.toString()]);
      const element = document.createElement("a");
      element.download = "w3c.svg";
      element.href = window.URL.createObjectURL(blob);
      element.click();
      element.remove();
    },
    buildFlower() {
      const flowerDiv = this.$refs.flower;
      const stemDiv = this.$refs.stem;

      flowerDiv.innerHTML = "";
      stemDiv.innerHTML = "";

      this.optionsCpy = this.options;

      if (this.optionsArray.length > 0) {
        this.optionsCpy = {
          centerRadius: this.optionsArray[0],
          petalNumber1: this.optionsArray[1],
          petalLength1: this.optionsArray[2],
          petalWidth1: this.optionsArray[3],
          petalColor1: this.optionsArray[4],
          petalNumber2: this.optionsArray[5],
          petalLength2: this.optionsArray[6],
          petalWidth2: this.optionsArray[7],
          petalColor2: this.optionsArray[8],
          centerColor: this.optionsArray[9],
          stemColor: this.optionsArray[10],
          stemLength: this.optionsArray[11],
          stemWidth: this.optionsArray[12],
          amplitude: this.optionsArray[13],
          frequency: this.optionsArray[14],
        };
      }

      const flower = new FlowerBuilder({
        centerRadius: this.optionsCpy.centerRadius,
        petalNumber1: this.optionsCpy.petalNumber1,
        petalLength1: this.optionsCpy.petalLength1,
        petalWidth1: this.optionsCpy.petalWidth1,
        petalColor1: this.optionsCpy.petalColor1,
        petalNumber2: this.optionsCpy.petalNumber2,
        petalLength2: this.optionsCpy.petalLength2,
        petalWidth2: this.optionsCpy.petalWidth2,
        petalColor2: this.optionsCpy.petalColor2,
        centerColor: this.optionsCpy.centerColor,
      });
      const flowerSVG = flower.getSVG();

      const stem = new StemBuilder({
        color: this.optionsCpy.stemColor,
        length: this.optionsCpy.stemLength,
        width: this.optionsCpy.stemWidth,
        flowerHeadRadius: flower.flowerHeadRadius,
        frequency: this.optionsCpy.frequency,
        amplitude: this.optionsCpy.amplitude,
      });
      const stemSVG = stem.getSVG();

      stemSVG.style.overflow = "visible";

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", `-0.5 -0.5 1 ${1 + stem.getStemViewBox()}`);
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

      svg.appendChild(stemSVG);
      svg.appendChild(flowerSVG);

      flowerDiv.appendChild(svg);
      // flowerDiv.appendChild(flowerSVG);
      // stemDiv.appendChild(stemSVG);
    },
  },
  mounted() {
    this.buildFlower();
  },
  watch: {
    options() {
      this.buildFlower();
    },
    optionsArray() {
      this.buildFlower();
    },
  },
};
</script>

<style scoped>
.container {
  overflow: visible;
  width: 300px;
}

.flower {
  position: relative;
  z-index: 2;
}

.stem {
  position: relative;
  z-index: 1;
}

.pot {
  width: 60%;
  margin-left: 20%;
  position: relative;
  z-index: 3;
  margin-top: -20px;
}

.pot__image {
  width: 100%;
}
</style>
