import Vue from 'vue'
import Vuex from 'vuex'
import globalProgress from './modules/globalprogress'
import lists from "./modules/list"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    globalProgress,
    lists
  },
  strict: debug
})