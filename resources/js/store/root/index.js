import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import plugins from './plugins';

/**
 * Firebase persistence
 */
import { vuexfireMutations } from "vuexfire";

export default {
    state,
    getters,
    mutations : {
        ...mutations,
        ...vuexfireMutations
    },
    actions,
    plugins
}