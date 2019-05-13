export default {

    dataFetched({commit}, data) {
        commit('setState',data);
    },
}