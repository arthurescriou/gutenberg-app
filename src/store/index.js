import Vue from 'vue'
import Vuex from 'vuex'
import { getLanguages, getBooksPerLanguage } from '../service/books'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    languages: [],
    books: [],
  },
  mutations: {
    storeLanguages: (state, languages) => {
      state.languages = languages
    },
    storeBooks: (state, books) => {
      state.books = books
    },
  },
  actions: {
    fetchLanguages: async store => {
      const languages = await getLanguages()
      store.commit('storeLanguages', languages)
    },
    fetchBooks: async (store, lang) => {
      const books = await getBooksPerLanguage(lang)
      console.log(books)
      store.commit('storeBooks', books)
    },
  },
  modules: {},
  getters: {},
})
