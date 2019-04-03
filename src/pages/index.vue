<template>
  <v-container grid-list-md fluid>
    <v-layout row wrap>
      <v-flex d-flex xs8>
        <v-layout column>
          <v-flex xs4>
            <v-carousel height="408">
              <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
            </v-carousel>
          </v-flex>
          <v-flex>
            <blogList></blogList>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs4 d-flex>
        <v-layout column>
          <v-flex xs4>
            <v-card>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  <div>asdf</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  <div>asdf</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card class="mx-auto card">
              <v-card-title>
                <v-icon large left>mdi-twitter</v-icon>
                <span class="title font-weight-light">推荐</span>
              </v-card-title>
              <v-img
                class="white--text tuijian"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">Top 10 Australian beaches</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-img
                class="white--text tuijian"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">Top 10 Australian beaches</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import blogList from "../components/blogList.vue";
export default {
  components: {
    blogList
  },
  data: () => ({
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
      }
    ]
  })
};
</script>

<style scoped>

.tuijian {
  margin-bottom: 10px;
}
</style>
