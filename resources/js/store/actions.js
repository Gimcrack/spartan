import sleep from 'sleep-promise';
import {ls,STORAGE_KEY} from './plugins/storage';
import {firestoreAction} from "vuexfire";
import {db} from "./db";

export default {
    async doneWorking({commit}) {
        await sleep(100);
        commit('_doneWorking');
    },
    // async storeState({state}) {
    //     await ls.setItem(STORAGE_KEY, state)
    // },

    bindData: firestoreAction(({bindFirestoreRef}, key) => {
        return bindFirestoreRef(key, db.collection('spartan').doc(key));
    }),
}