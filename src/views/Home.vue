<template>
  <div class="home container">
    <button class="btn more-btn" v-on:click="handleClick">Refresh</button>
    <div v-if="collection.length" class="list">
      <Item v-for="(item, key) in collection" :key="key" :img="item"/>
    </div>
    <button class="btn more-btn" v-on:click="handleClick">Refresh</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from '@/components/Item.vue'

import { mapState } from 'vuex';

export default {
  name: 'home',
  components: {
    Item
  },
  computed: {
    ...mapState({
      collection: state => state.collection
    })
  },
  methods: {
    handleClick() {
      this.$store.dispatch('getCollectionData');
    }
  },
  created() {
    this.$store.dispatch('getCollectionData');
  }
}
</script>

<style lang="stylus" scoped>
.more-btn
  margin 20px

.list
  display flex
  flex-wrap wrap
  justify-content center
  align-items center
</style>
