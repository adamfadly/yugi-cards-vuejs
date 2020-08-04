import Vue from "vue"
import Vuex from "vuex"
import lists from "./modules/lists"
import character from "./modules/character"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    lists,
    character
  }
})
