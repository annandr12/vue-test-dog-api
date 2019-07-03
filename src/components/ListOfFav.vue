<template>
  <div class="fav-list">
    <ul v-if="favorites.length" class="breed-list">
      <li v-for="(breed, i) in favorites" :key="i">
        <span>{{breed}}</span>
        <span>
          <button class="btn" @click="setCurrentFav(breed)">Random pic</button>
          <button class="btn delete" @click="deleteFromFav(breed)">Delete</button>
        </span>
      </li>
    </ul>
    <img class="current-img" v-if="currentFavBreed" :src="currentFavImg"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ListOfFav',
  computed: {
    ...mapState({
      favorites: state => state.favorites,
      currentFavImg: state => state.currentFavImg,
      currentFavBreed: state => state.currentFavBreed
    })
  },
  methods: {
    addToFav() {
      this.$store.dispatch('addFavItem', this.getBreed);
    },
    setCurrentFav(breed) {
      this.$store.dispatch('getCurrentFav', breed);
    },
    deleteFromFav(breed) {   
      this.$store.dispatch('deleteFavItem', breed);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.fav-list
  text-align start
  display flex
  justify-content space-between
  align-items flex-start 

.delete
  background-color grey
  margin-left 10px

.breed-list
  list-style-type none
  width 50%
  margin 0

  li
    display flex
    justify-content space-between
    border 1px solid gray
    align-items center
    padding 10px
    margin-top 5px
    text-transform capitalize

.current-img
  margin 5px
  max-width 44%
</style>
