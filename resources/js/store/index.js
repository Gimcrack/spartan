import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import plugins from './plugins';

/**
 * Load our extensions into the Store prototype
 */
import extensions from './extensions';
Object.assign(Vuex.Store.prototype,extensions);

/**
 * Modules
 */
import data from './modules/data';

/**
 * Get the value of str in the same namespace as this
 * @param str
 * @returns {string}
 */
String.prototype.namespace = function(str) {
    let ret = this.split('/').splice(0,1);

    if ( (str || '').trim() )
        ret.push(str);

    return ret.join('/');
};



Vue.use(Vuex);

export default new Vuex.Store({
    modules : {
        data
    },

    state,
    getters,
    mutations,
    actions,
    plugins,
})