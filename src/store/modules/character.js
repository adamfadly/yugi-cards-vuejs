import Axios from "@/config/axios"

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    getSingleCard(_context, payload) {
      return Axios({
        method: "GET",
        // url: "?name=Dark Magician"
        url: `${payload.urlDetail}${payload.name}`
      })
      // .then(({ data }) => {
      //   console.log(data.data[0])
      // })
      // .then(response => {
      //   console.log(response.data.data[0])
      // })
    }
  }
}
