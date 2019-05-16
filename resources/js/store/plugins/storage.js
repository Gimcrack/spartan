export const THROTTLE_INTERVAL = 5000;


/**
 * Defer to the module's storeState action handler
 *  to handle storing the state data
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

        /**
         * Throttle the dispatched action to prevent spamming any expensive
         * api calls.
         */
        // store.dispatch_throttled(action,THROTTLE_INTERVAL);
        if ( ! store._actions[action])
            return;

        store.dispatch(action);
    });
}