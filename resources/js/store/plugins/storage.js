export const STORAGE_KEY = process.env.APP_NAME || 'spartan';
import ls from 'localforage';

ls.config({
    driver : ls.INDEXEDDB,
    name : STORAGE_KEY,
    storeName : STORAGE_KEY
});

export {ls};

export default function(store) {
    store.subscribe(async (mutation) => {

        /**
         * Determine the namespace of the mutation. We use the namespace
         * to determine which action to fire. For example, if we have
         * a module namespaced to 'data' we call data/storeState
         */
        let action = mutation.type.namespace('storeState');

        store.dispatch_throttled(action,5000);
    });
}