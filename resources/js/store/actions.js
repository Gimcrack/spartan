import sleep from 'sleep-promise';
import {ls,STORAGE_KEY} from './plugins/storage';

export default {
    async doneWorking({commit}) {
        await sleep(100);
        commit('_doneWorking');
    }
    // async storeState({state}) {
    //     await ls.setItem(STORAGE_KEY, state)
    // },
}