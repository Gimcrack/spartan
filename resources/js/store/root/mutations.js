import sleep from 'sleep-promise/build/cjs';

export default {
    setTimeout(state, {key, callback, timeout}) {
        state.timeouts[key] = setTimeout(callback, timeout);
    },

    clearTimeout(state, key) {
        clearTimeout(state.timeouts[key]);
        delete state.timeouts[key];
    },

    setInterval(state, {key, callback, interval}) {
        key = key || callback.name;
        state.intervals[key] = setInterval(callback, interval);
    },

    clearInterval(state, key) {
        clearInterval(state.intervals[key]);
        delete state.intervals[key];
    },

    working(state) {
        state.busy = true;
    },

    _doneWorking(state) {
        state.busy = false;
    }
}