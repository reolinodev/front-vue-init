<template>
  <b-input-group size="lg">
    <b-input-group-prepend is-text>
      <b-icon icon="search"></b-icon>
    </b-input-group-prepend>
    <b-form-input
      type="text"
      placeholder="input title"
      v-model="searchItem"
    ></b-form-input>
    <b-button variant="success" style="margin-left:3px" @click="search"
      >Search</b-button
    >
  </b-input-group>
</template>

<script>
export default {
  data() {
    return {
      searchItem: this.$store.state.pageKey.searchTxt,
    };
  },
  methods: {
    search() {
      this.$emit('search', this.searchItem);
    },
  },
};
</script>

<style></style>
