<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/favorites">Favorites</router-link>
    </div>
    <div v-if="loading" class="loading">Loading...</div>
    <transition name="fade">
      {{error}}
      <ErrorPopup v-if="error" :error="error"/>
    </transition>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ErrorPopup from '@/components/ErrorPopup'

export default {
  name: 'app',
  components: {
    ErrorPopup
  },
  computed: {
    ...mapState({
      loading: state => state.loading,
      error: state => state.error
    })
  }

}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  position relative

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983

.loading
  width 100%
  height 100%
  position absolute
  left 0
  top 0
  opacity 0.8
  background-color white
  z-index 2
  font-size 20px
  font-weight bold
  padding-top 250px
  box-sizing border-box

.container
  max-width 1200px
  margin auto

.btn
  border none
  outline none
  font-size 16px
  font-weight bold
  padding 10px 20px
  cursor pointer
  text-transform uppercase
  background-color #42b983
  color white
  transition background-color .2s linear
  &:hover
    background-color #2c3e50

.fade-enter-active
.fade-leave-active 
  transition opacity .5s

.fade-enter
.fade-leave-to
  opacity 0

</style>
