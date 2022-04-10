<template>
  <div class="wrapper">
    <div v-for="(flower , index) in options" :key="index" class="cube" @click="()=>chooseFlower(index)">
      <flower :optionsArray="flower" class="flower"/>
    </div>
  </div>
</template>

<script>
import flower from './../components/Flower.vue'

export default {
  components:{
  flower
  },
  data(){
    return {
      options : this.getOptions()
    }
  },
  methods:{
    getOptions(){
      let flowersList = [] 
      for(let index=0 ; index < 25 ; index++){
        const option = 
           [ Math.random(),
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
           Math.random(),]
        
        flowersList.push(option)
      }
      return flowersList
    },
    async chooseFlower(index){
      let selected = [...this.options[index]]
      this.options = []
      await this.$nextTick()

      for(let index=0 ; index < 25 ; index++){
        const mutation = Math.floor(selected.length* Math.random())
        let selectedCpy = [...selected]
        selectedCpy[mutation] = Math.random()
        this.options.push(selectedCpy)
      }
    }
  }
}
</script>

<style scoped>
  .cube{
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    border: 1px solid black;
    background:rgba(197, 197, 197, 0.781);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  .wrapper{
    margin-top: 70px;
    display: flex;
    width: 750px;
    flex-wrap: wrap;
  }

  .flower{
    width: 80px;
  }
</style>