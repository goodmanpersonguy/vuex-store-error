import Vue from 'vue';
import Vuex from 'vuex';

import visitor from './visitor/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    visitor,
  },
});
