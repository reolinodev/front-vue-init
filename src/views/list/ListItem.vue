<template>
  <b-list-group-item href="#" class="flex-column align-items-start">
    <b-card>
      <b-row>
        <b-col cols="4">
          <b-img
            thumbnail
            :src="listItem.main_img_thumb"
            @click="moveDetialPage"
          ></b-img>
        </b-col>
        <b-col cols="8">
          <b-card-title>{{ listItem.main_title }}</b-card-title>
          <b-card-sub-title class="mb-2">{{ listItem.addr1 }}</b-card-sub-title>
          <b-card-sub-title class="mb-2">{{
            listItem.cntct_tel
          }}</b-card-sub-title>
        </b-col>
      </b-row>
    </b-card>
  </b-list-group-item>
</template>

<script>
export default {
  props: {
    listItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    moveDetialPage() {
      this.$store.commit('setScrolly', window.scrollY);
      this.$store.commit('setPageState', 'detail');
      const id = this.listItem.place_id;
      this.$router.push(`/list/${id}`);
    },
  },
  created() {
    window.scrollTo(0, this.$store.state.pageKey.scrolly);
  },
};
</script>

<style scoped></style>
