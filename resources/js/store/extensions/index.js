export default {

    dispatch_throttled(action, timeout, options) {

        options = Object.assign({}, { falling_edge : true, rising_edge : true}, options || {});

        /**
         * Make sure the action exists and is eligible to dispatch
         */
        if ( ! this._actions[action] || this.state.timeouts[action] != null )
            return;

        if ( options.rising_edge )
            this.dispatch(action);

        /**
         * Set the timeout for dispatching the action
         */
        this.commit('setTimeout', {
            key : action,
            callback : async () => {
                if ( options.falling_edge )
                    await this.dispatch(action);

                this.commit('clearTimeout', action);
            },
            timeout
        });
    }
}