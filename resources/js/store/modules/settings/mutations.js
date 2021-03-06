export default {
    increment(state) {
        state.count++;
    },

    decrement(state) {
        state.count--;
    },

    changeName(state, e) {
        state.name = e.target.value;
    },

    setState(state, newState) {
        for(let prop in newState) {
            state[prop] = newState[prop];
        }
    },

    addMessage(state, e) {
        state.messages.push(e.target.value);
        e.target.value = '';
    }
}