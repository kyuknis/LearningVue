const state = {
    value: 0,
    total: 0
}

const mutations = {
    setValue(state, value) {
        state.value = value
    },
    setTotal(state, value) {
        state.value = value
    }
}

export default {
    namespaced: true,
    state,
    mutations
}