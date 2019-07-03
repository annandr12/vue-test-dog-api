<template>
  <div class="favorites container">
    <h1>Favorites</h1>
    <ListOfFav/>
  </div>
</template>

<script>
import ListOfFav from '@/components/ListOfFav.vue'

export default {
  name: 'favorites',
  components: {
    ListOfFav
  }
}
</script>
