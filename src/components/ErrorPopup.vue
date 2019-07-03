<template>
  <div class="error-popup">
    {{error}}
  </div>
</template>

<script>
export default {
  name: 'ErrorPopup',
  props: {
    error: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.error-popup
  position absolute
  border 2px solid red
  border-radius 5px
  padding 10px 15px
  top 0
  right 0
</style>
