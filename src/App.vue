<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Generate Flower</router-link>
      <router-link to="/field">Field of flowers</router-link>
    </div>
    <div class="content-page">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Montserrat:wght@300;500;600;700;800;900&display=swap');

#app{
  font-family: 'Balsamiq Sans', cursive;
  height: 100%;
  width: 100%;
}

#nav {
  height: 20px;
  width: 300px;
  display: flex;
  justify-content: space-around;
  background: white;
}

body{
  height: 100vh;
  width: 100vw;
  margin: 0px;
  background-image: url("assets/i.jpg");
  background-repeat: repeat;
}

.content-page{
    height: calc(100% - 20px);
  width: 100%;
}

.wrapper{
  display: flex;
}
</style>
