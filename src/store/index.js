import { createStore } from 'vuex'

export default createStore({
  state: {
    url_api: process.env.VUE_APP_ROOT_API,
    getter: true,
    MenuConv: [],
    MenuCur: [],
    Links: [],
    Institucion: {},
    InstitucionUpea: {},
    statusImg: true,
  },
  getters: {
  },
  mutations: {
    loadOn() {
      document.querySelector("#contened").style.visibility = "visible";
      window.scrollTo(0, 0);
    },
    loading() {
      document.querySelector("#contened").style.visibility = "hidden";
      document.querySelector("body").classList.add("loaded");
    },
    clickLink(state) {
      window.scrollTo(0, 0);
      state.getter = true
    },
  },
  actions: {
  },
  modules: {
  }
  
})
