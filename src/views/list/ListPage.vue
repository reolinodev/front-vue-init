<template>
  <div class="container">
    <div class="search-container">
      <SearchBar @search="searchList"></SearchBar>
    </div>

    <div v-infinite-scroll="loadMore">
      <b-list-group>
        <ListItem
          v-for="listItem in listItems"
          :key="listItem.place_id"
          :listItem="listItem"
        ></ListItem>
      </b-list-group>
      <div class="wrapper">
        <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      </div>
    </div>
  </div>
</template>

<script>
import { getOpenFoods } from '@/api/opens';
import ListItem from '@/views/list/ListItem';
import SearchBar from '@/components/common/SearchBar';
import LoadingSpinner from '@/components/common/LoadingSpinner';

export default {
  components: {
    ListItem,
    SearchBar,
    LoadingSpinner,
  },
  data() {
    return {
      listItems: [],
      page: this.$store.state.pageKey.page,
      title: this.$store.state.pageKey.searchTxt,
      pageState: this.$store.state.pageKey.pageState,
      isLoading: false,
      initState: false,
    };
  },

  methods: {
    loadMore() {
      if (!this.initState) {
        this.initState = true;
      } else {
        setTimeout(() => {
          this.$store.commit('setScrolly', window.scrollY);

          this.page++;
          this.$store.commit('setPage', this.page);
          this.getListItem('ADD');
        }, 1000);
      }
    },

    async getListItem(listState) {
      this.isLoading = true;

      const { data } = await getOpenFoods({
        page: this.page,
        gubun: 'food',
        area: '21',
        title: this.title,
        listState: listState,
      });

      if (listState === 'ALL') {
        this.listItems = data;
      } else {
        this.listItems = this.listItems.concat(data);
      }

      this.isLoading = false;
    },

    searchList(params) {
      this.initPage();

      this.title = params;
      this.$store.commit('setSearchTxt', this.title);

      this.getListItem('ALL');
    },
    initPage() {
      this.listItems = [];
      this.page = 1;
      this.pageState = '';
      this.title = '';
      this.initState = false;

      this.$store.commit('clearPageState');
      this.$store.commit('clearPage');
      this.$store.commit('cleaSearchTxt');
      this.$store.commit('clearScrolly');
    },
  },
  created() {
    const pageState = this.pageState;
    if (pageState === '') {
      this.initPage();
    } else {
      this.initState = false;
      this.$store.commit('clearPageState');
    }

    this.getListItem('ALL');
  },
};
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
  background: #f5f5f5;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-container {
  margin: 5px;
}
</style>
