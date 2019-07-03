<template>
  <div class="item">
    <img class="image" :src="img"/>
    <button class="btn fav-btn" v-on:click="addToFav">Add to favorites</button>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    img: String
  },
  computed: {
    getBreed() {
      var arr = this.img.split('/');
      return arr[arr.indexOf('breeds') + 1];
    }
  },
  methods: {
    addToFav() {
      this.$store.dispatch('addFavItem',this.getBreed);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.item
  margin 10px
  position relative
  .image 
    max-height 300px

.fav-btn
  position absolute
  top 0
  left 0
</style>
