<template>
  <div class="page">
    <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{data.title}}</h3>
              <markdown :content="data.content"></markdown>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import markdown from "../components/markdown";
import axios from "axios";
export default {
  components: {
    markdown
  },
  data() {
    return {
      data: {
        content: "# 暂无内容"
      }
    };
  },
  methods: {
    getDetail() {
      axios({
        method: "post",
        url: "/getPost",
        data: {
          page: 1,
          where: {
            id: this.$route.query.id
          }
        }
      }).then(res => {
        let data = res.data.result.data.rows[0];
        this.data = data;
      });
    }
  },
  created() {
    this.getDetail();
  }
};
</script>
<style scoped>
.page {
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: 999;
  bottom: 0px;
}
</style>
