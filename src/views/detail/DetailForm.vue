<template>
  <div class="contents">
    <h1 class="page-header">{{ this.title }}</h1>

    <div class="form-wrapper">
      <b-img thumbnail :src="this.main_img_normal" fluid></b-img>

      <b-form @submit.prevent="submitForm">
        <b-form-group label="Main menu:" label-for="rprsntv_menu">
          <b-form-input
            id="rprsntv_menu"
            v-model="rprsntv_menu"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Location:" label-for="addr1">
          <b-form-input
            id="addr1"
            v-model="addr1"
            type="text"
            disabled
          ></b-form-input>

          <input id="lat" type="hidden" v-model="lat" />
          <input id="lng" type="hidden" v-model="lng" />
        </b-form-group>
        <b-form-group
          label="Opening hours:"
          label-for="usage_day_week_and_time"
        >
          <b-form-input
            id="usage_day_week_and_time"
            v-model="usage_day_week_and_time"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Introduce:" label-for="itemcntnts">
          <b-form-textarea
            id="itemcntnts"
            v-model="itemcntnts"
            rows="3"
            max-rows="6"
            disabled
          ></b-form-textarea>
        </b-form-group>

        <div class="btn-div">
          <b-button variant="info" size="lg" @click="goBack()">BACK</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import { getOpenFood } from '@/api/opens';

export default {
  data() {
    return {
      title: '',
      addr1: '',
      lat: '',
      lng: '',
      rprsntv_menu: '',
      itemcntnts: '',
      usage_day_week_and_time: '',
      main_img_normal: '',
    };
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await getOpenFood(id);
    this.title = data.title;
    this.addr1 = data.addr1;
    this.lat = data.lat;
    this.lng = data.lng;
    this.rprsntv_menu = data.rprsntv_menu;
    this.itemcntnts = data.itemcntnts;
    this.usage_day_week_and_time = data.usage_day_week_and_time;
    this.main_img_normal = data.main_img_normal;
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
