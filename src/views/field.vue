<template>
  <div class="page">
    <div class="parent">
      <div class="div1">
        <div class="wrapper">
          <div
            v-for="(flower, index) in options"
            :key="index"
            class="cube"
            @click="() => chooseFlower(index)"
          >
            <flower :optionsArray="flower.dna" class="flower" />
          </div>
        </div>
      </div>
      <div class="div2">
        <span class="rule"
          >Choose a flower on the left and try to match the one on the right.
          Keep going and try to get as close as you can</span
        >
        <div class="flowerWrapper">
          <div class="container-flower">
            <h1>Flower to copy</h1>
            <flower :optionsArray="flowerToCopy" class="flowerExemple" />
          </div>
          <span v-if="selectedFlower">
            score : {{ Math.floor((1 - flowerLookLikeScore) * 100) }}%</span
          >
          <div class="container-flower" v-if="selectedFlower">
            <h1>Choosen flower</h1>
            <flower :optionsArray="selectedFlower" class="flowerExemple" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import flower from "./../components/Flower.vue";

export default {
  components: {
    flower,
  },
  data() {
    return {
      options: this.getOptions(),
      flowerToCopy: this.getRandomFlower(),
      selectedFlower: null,
    };
  },
  computed: {
    flowerLookLikeScore() {
      let flowerStates = this.selectedFlower;
      let original = this.flowerToCopy;
      if (!flowerStates || !original) return "";
      let sum = 0;
      flowerStates.forEach((score, index) => {
        sum +=
          Math.abs(original[index] - score) /
          Math.max(original[index], 1 - original[index]);
      });
      return sum / flowerStates.length;
    },
  },
  methods: {
    getOptions() {
      let flowersList = [];
      for (let index = 0; index < 16; index++) {
        const option = this.getRandomFlower();

        flowersList.push({ dna: option, score: 0 });
      }
      return flowersList;
    },
    getRandomFlower() {
      return [
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
      ];
    },
    async chooseFlower(index) {
      let selected = [...this.options[index].dna];
      this.selectedFlower = selected;
      this.options = [];
      let tmpList = [];
      await this.$nextTick();

      for (let index = 0; index < 16; index++) {
        const mutation1 = Math.floor(selected.length * Math.random());
        const mutation2 = Math.floor(selected.length * Math.random());
        let selectedCpy = [...selected];
        selectedCpy[mutation1] = this.getMutation(selectedCpy[mutation1]);
        selectedCpy[mutation2] = this.getMutation(selectedCpy[mutation2]);
        tmpList.push({
          dna: selectedCpy,
          score: this.getFlowerLookLikeScore(selectedCpy, this.flowerToCopy),
        });
        this.options = tmpList; //.sort((a, b) => a.score - b.score);
      }
    },
    getMutation(oldMutation) {
      let mutation = oldMutation + (Math.random() - 0.5) * 0.5;
      if (mutation > 1) mutation = 1;
      if (mutation < 0) mutation = 0;
      return mutation;
    },
    getFlowerLookLikeScore(flowerStates, original) {
      if (!flowerStates || !original) return "";
      let sum = 0;
      flowerStates.forEach((score, index) => {
        sum +=
          Math.abs(original[index] - score) /
          Math.max(original[index], 1 - original[index]);
      });
      return sum / flowerStates.length;
    },
  },
};
</script>

<style scoped>
  .cube{
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border-bottom: 7px solid rgb(255, 178, 90);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin: 20px;
    cursor: pointer;
    box-sizing:content-box;
  }

  .page{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container-flower{
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .wrapper{
    margin-top: 70px;
    display: flex;
    width: 600px;
    flex-wrap: wrap;
  }

  .rule{
    margin: 10px;
  }

  .flower{
    width: 80px;
    margin-bottom: -10px;
  }

  .flowerExemple{
    width: 200px;
  }

  .parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    background: white;
    width: 60%;
    min-width: 1056px;
    border-radius: 20px;
    border: solid 1px black;
  }

  .div1 { 
    grid-area: 1 / 1 / 2 / 2; 
  }
  .div2 {
    grid-area: 1 / 2 / 2 / 3;
  }

  .flowerWrapper{
    display: flex;
    align-items: center;
    align-content: center;
  }
</style>