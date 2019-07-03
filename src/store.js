import Vue from 'vue'
import Vuex from 'vuex'

const API_URL = "https://dog.ceo/api/";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collection: [],
    favorites: [],
    currentFavBreed: null,
    currentFavImg: null,
    loading: false,
    error: null
  },
  mutations: {
    ['SET_COLLECTION'](state, data) {
      state.collection = data;
    },
    ['ADD_FAVORITE'](state, item) {
      state.favorites.push(item);
    },
    ['DELETE_FAVORITE'](state, index) {
      state.favorites.splice(index, 1);
    },
    ['SET_CURRENT_FAV'](state, data) {
      state.currentFavBreed = data;
    },
    ['SET_CURRENT_FAV_IMG'](state, data) {
      state.currentFavImg = data;
    },
    ['SET_LOADING'](state, value) {
      state.loading = value;
    },
    ['SET_ERROR'](state, message) {
      console.dir(message);
      state.error = message;
    }
  },
  actions: {
    async getCollectionData({commit}) {
      try {
        commit('SET_LOADING', true);
        const response = await fetch(API_URL + 'breeds/image/random/20');
        const data = await response.json();
        if(data.status === 'error') {
          throw Error(data.message);
        }
        commit('SET_COLLECTION', data.message);
        setTimeout(() => {
          commit('SET_LOADING', false);
        }, 1000);
      }
      catch(e) {
        commit('SET_ERROR', e.message);
        setTimeout(() => {
          commit('SET_ERROR', null);
        }, 3000);
      }
    },
    addFavItem({state, commit}, item) {
      if(state.favorites.indexOf(item) === -1) {
        commit('ADD_FAVORITE', item);
      } else {
        commit('SET_ERROR', 'Already added');
        setTimeout(() => {
          commit('SET_ERROR', null);
        }, 3000);
      }
    },
    deleteFavItem({state, commit}, item) {
      if(state.favorites.indexOf(item) !== -1) {
        commit('DELETE_FAVORITE', state.favorites.indexOf(item));
      }
      if(state.currentFavBreed === item) {
        commit('SET_CURRENT_FAV', null);
      }
    },
    async getCurrentFav({commit}, breed) {
      try {
        const response = await fetch(API_URL + 'breed/' + breed.replace('-', '/') + '/images/random');
        const data = await response.json();
        if(data.status === 'error') {
          throw Error(data.message);
        }
        commit('SET_CURRENT_FAV', breed);
        commit('SET_CURRENT_FAV_IMG', data.message);
      }
      catch(e) {
        commit('SET_ERROR', e.message);
        setTimeout(() => {
          commit('SET_ERROR', null);
        }, 3000);
      }
    }
  }
})
