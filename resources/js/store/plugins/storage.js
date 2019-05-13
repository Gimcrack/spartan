// export const STORAGE_KEY = process.env.APP_NAME || 'spartan';
// import ls from 'localforage';
//
// ls.config({
//     driver : ls.INDEXEDDB,
//     name : STORAGE_KEY,
//     storeName : STORAGE_KEY
// });
//
// export {ls};

export const THROTTLE_INTERVAL = 5000; // 100 ms;


/**
 * Defer to the module's storeState action handler
 *  to determine how to store the state
 * @param store
 */
export default function(store) {
    store.subscribe(async (mutation) => {

        /**
         * Determine the namespace of the mutation. We use the namespace
         * to determine which action to fire. For example, if we have
         * a module namespaced to 'data' we call data/storeState
         */
        let action = mutation.type.namespace('persistLocalState');

        store.dispatch_throttled(action,THROTTLE_INTERVAL,{rising_edge: false, falling_edge: true});
    });
}