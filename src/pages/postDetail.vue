<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
          height="190"
        ></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <markdown :content="data.content"></markdown>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
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
  }
};
</script>
<style scoped>
</style>
