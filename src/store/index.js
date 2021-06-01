import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { pageKey } from './pageKey';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: { pageKey: pageKey },

  plugins: [
    createPersistedState({
      paths: ['pageKey'],
    }),
  ],
});
