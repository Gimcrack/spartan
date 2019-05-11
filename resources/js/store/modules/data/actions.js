import sleep from "sleep-promise";

import {ls} from '../../plugins/storage';
import {MODULE_STORAGE_KEY} from './index';

export default {

    dataFetched({commit}, data) {
        commit('setState',data);
    },

    async getCachedState({commit}) {
        let data = await ls.getItem(MODULE_STORAGE_KEY);

        if ( ! data )
            return;

        commit('setState',data);
    },

    async storeState({state}) {
        await ls.setItem(MODULE_STORAGE_KEY, state)
    },
}