<template>
  <div class="goodBye">
    <div> {{msg}} </div>
  </div>
</template>

<script>
export default {
  name: 'GoodByeWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goodBye{
  margin: 0;
}
</style>
