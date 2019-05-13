export default {

    dispatch_throttled(action, timeout) {

        /**
         * Make sure the action exists and is eligible to dispatch
         */
        if ( ! this._actions[action] || this.state.timeouts[action] != null )
            return;

        /**
         * Set the timeout for dispatching the action
         */
        this.commit('setTimeout', {
            key : action,
            callback : async () => {
                await this.dispatch(action);
                this.commit('clearTimeout', action);
            },
            timeout
        });
    }
}