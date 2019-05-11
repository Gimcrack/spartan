export default {
    setTimeout(state, {key, callback, timeout}) {
        state.timeouts[key] = setTimeout(callback, timeout);
    },

    clearTimeout(state, key) {
        clearTimeout(state.timeouts[key]);
    },

    setInterval(state, {key, callback, interval}) {
        key = key || callback.name;
        state.intervals[key] = setInterval(callback, interval);
    },

    clearInterval(state, key) {
        clearInterval(state.intervals[key]);
    },

    increment(state) {
        state.data.count++;
    },

    decrement(state) {
        state.data.count--;
    },

    changeName(state, e) {
        state.data.name = e.target.value;
    }
}