/**
 * The module name
 * @type {string}
 */
const name = 'settings';

import firebase_actions from "../mixins/firebase_actions";
import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default {
    namespaced : true,
    state,
    mutations,
    getters,
    actions : {
        ...actions,
        ...firebase_actions(name)
    }
}