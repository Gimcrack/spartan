import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import plugins from './plugins';

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

Vuex.Store.prototype.dispatch_throttled = function(action, timeout) {
    
    /**
     * Make sure the action exists and is eligible to dispatch
     */
    if ( ! this._actions[action] || this.state.timeouts[action] != null )
        return;

    /**
     * Set the timeout for dispatching the action
     */
    this.commit('setTimeout', {
        key : action,
        callback : async () => {
            await this.dispatch(action);
            this.commit('clearTimeout', action);
        },
        timeout
    });
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