<template>
  <div>
    <v-card class="card" v-for="(item,k) in tableData" :key="k" @click="blogDetail(item)">
      <v-card-title>
        <span class="title font-weight-light">{{item.title}}</span>
      </v-card-title>
      <v-layout row wrap>
        <v-flex xs4>
          <v-img
            :src="item"
            :lazy-src="`https://picsum.photos/10/6?image=${2 * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
            height="133"
            v-for="(item,k) in JSON.parse(item.background)"
            :key="k"
          >
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </v-flex>
        <v-flex xs8>
          <v-layout column wrap>
            <v-card-text>{{item.introduction}}</v-card-text>
            <v-card-actions>
              <v-list-tile class="grow">
                <v-list-tile-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>朱定坤</v-list-tile-title>
                </v-list-tile-content>
                <v-layout align-center justify-end>
                  <i class="iconfont icon-shijian"></i>
                  <span class="subheading mr-2 ml-2">{{moment(item.updatedAt).format("YYYY.MM.DD")}}</span>
                  <i class="iconfont icon-chakan"></i>
                  <span class="subheading mr-2 ml-2">{{item.readNum}}</span>
                  <i class="iconfont icon-like-b"></i>
                  <span class="subheading mr-2 ml-2">{{item.like}}</span>
                </v-layout>
              </v-list-tile>
            </v-card-actions>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "blogList",
  data() {
    return {
      page: 1,
      tableData: [],
      count: 0
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
        this.tableData = data.data.result.data.rows;
        this.count = data.data.result.data.count;
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
.card {
  padding: 0px 20px 20px 20px;
  cursor: pointer;
}
</style>
