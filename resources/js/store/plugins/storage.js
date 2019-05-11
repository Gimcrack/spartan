import {STORAGE_KEY} from '../state';


export default function(store) {
    store.subscribe(async (mutation,state) => {
        //localStorage[STORAGE_KEY] = JSON.stringify(state.data);
        await s.set(STORAGE_KEY, JSON.stringify(state.data));
    });
}