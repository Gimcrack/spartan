import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

import {STORAGE_KEY} from "../../plugins/storage";
export const MODULE_NAME = 'data';
export const MODULE_STORAGE_KEY = STORAGE_KEY + '.' + MODULE_NAME;

export default {
    namespaced : true,
    state,
    mutations,
    getters,
    actions
}