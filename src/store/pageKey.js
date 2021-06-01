export const pageKey = {
  state: {
    searchTxt: '',
    page: 1,
    pageState: '',
    scrolly: 0,
  },
  mutations: {
    setSearchTxt(state, data) {
      state.searchTxt = data;
    },
    cleaSearchTxt(state) {
      state.searchTxt = '';
    },
    setPageState(state, data) {
      state.pageState = data;
    },
    clearPageState(state) {
      state.pageState = '';
    },
    setPage(state, data) {
      state.page = data;
    },
    clearPage(state) {
      state.page = 1;
    },
    setScrolly(state, data) {
      state.scrolly = data;
    },
    clearScrolly(state) {
      state.scrolly = 0;
    },
  },
};
