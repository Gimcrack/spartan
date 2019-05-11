import sleep from 'sleep-promise';

export default {
    incrementAsync({commit}, { delay }) {
        sleep(delay || 3000).then(() => {
            commit('increment');
        })
    }
}