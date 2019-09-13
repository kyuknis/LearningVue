import api from '@/api/lists'

const state = {
    lists: []
}

const getters = {
    getLists(context) {
        console.log("In getLists()")
        return context.state.ists
    }
}

const actions = {

    refresh(context) {
        api.index((lists) => {
            context.commit('setLists', lists)
        })
    },

    save(context, list) {
        api.save((list) => {
            context.commit('addList', list)
        }, list)
    }

}

const mutations = {

    setLists(state, value) {
        state.lists = value
    },

    addList(state, value) {
        state.lists.push(value)
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}