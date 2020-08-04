import Axios from "@/config/axios"

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    getLists(_context, payload) {
      return Axios({
        method: "GET",
        url: payload.urlList
      })
    }
  }
}
