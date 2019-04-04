
<template>
  <v-container>
    <v-timeline>
      <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small class=" animated bounceInDown">
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${year.color}--text`"
            v-text="moment(year.createdAt).format('YYYY.MM.DD')"
          ></span>
        </template>
        <div class="py-3">
          <h2 :class="`headline font-weight-light mb-3 ${year.color}--text`">{{year.title}}</h2>
          <div>{{year.introduction}}</div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      years: [],
      count: 0,
      page: 1
    };
  },
  methods: {
    async getlist() {
      let data = await axios({
        method: "post",
        url: "/getPost",
        data: {
          page: this.page,
          where: {}
        }
      });
      if (data.data.code == 1) {
        let color = ["cyan", "green", "pink", "amber", "orange"];
        data.data.result.data.rows.forEach(element => {
          element.color = color[this.sum(0, 4)];
        });
        this.years = data.data.result.data.rows;
        this.count = data.data.result.data.count;
      }
    },
    sum(m, n) {
      var num = Math.floor(Math.random() * (m - n) + n);
      return num;
    }
  },
  created() {
    this.getlist();
  }
};
</script>

<style>
</style>
