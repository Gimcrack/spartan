import sleep from 'sleep-promise/build/cjs';
import {firestoreAction} from "vuexfire";
import {firebase} from "../firebase";

export default {
    async doneWorking({commit}) {
        await sleep(1000);
        commit('_doneWorking');
    },

    bindData: firestoreAction(({bindFirestoreRef}, key) => {
        return bindFirestoreRef(key, firebase.collection('spartan').doc(key));
    }),
}