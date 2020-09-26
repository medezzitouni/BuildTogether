<template>
  <GoodByeWorld msg="Welcome to our open-source project"/>
</template>

<script>
import GoodByeWorld from './components/GoodByeWorld.vue'

export default {
  name: 'App',
  components: {
    GoodByeWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
