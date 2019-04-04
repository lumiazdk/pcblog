<template>
  <v-layout column>
    <v-flex xs4>
      <v-card class="mx-auto card animated bounceIn">
        <v-card-title>
          <span class="title font-weight-light">推荐</span>
        </v-card-title>
        <v-img
          class="white--text tuijian"
          height="200px"
          v-for="(item,k) in tableData"
          :src="JSON.parse(item.background)[0]"
          :key="k"
          @click="blogDetail(item)"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline blackColor">{{item.title}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    async getlist() {
      let data = await axios({
        method: "post",
        url: "/getRecommend",
        data: {
          page: this.page,
          where: {}
        }
      });
      if (data.data.code == 1) {
        this.tableData = data.data.result.data;
      }
    },
    blogDetail(item) {
      this.$router.push({
        path: "/postDetail",
        query: {
          id: item.id
        }
      });
    }
  },
  created() {
    this.getlist();
  }
};
</script>
<style scoped>
.tuijian {
  margin-bottom: 10px;
  cursor: pointer;
}
.card {
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
}
.blackColor {
  color: #666;
}
</style>