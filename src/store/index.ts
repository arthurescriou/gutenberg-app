import { createStore } from 'vuex'
import { getLanguages, getBooksPerLanguage, getBooks } from '@/service/books'

export default createStore({
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
      if (lang) store.commit('storeBooks', await getBooksPerLanguage(lang))
      else store.commit('storeBooks', await getBooks())
    },
  },
  modules: {},
  getters: {},
})
