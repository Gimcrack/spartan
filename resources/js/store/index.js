import Vue from 'vue';
import Vuex from 'vuex';

import extensions from './extensions';
import settings from './modules/settings';
import root from './root';

Object.assign(Vuex.Store.prototype,extensions.store);
Object.assign(String.prototype,extensions.string);


Vue.use(Vuex);

export default new Vuex.Store({
    modules : {
        settings
    },

    ...root
})