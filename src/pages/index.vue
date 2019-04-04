<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs8>
        <v-layout column>
          <v-flex xs4>
            <banner></banner>
          </v-flex>
          <v-flex>
            <blogList></blogList>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs4 d-flex>
        <recommend></recommend>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import blogList from "../components/blogList.vue";
import banner from "../components/banner.vue";
import recommend from "../components/recommend.vue";

export default {
  components: {
    blogList,
    banner,
    recommend
  },
  data: () => ({})
};
</script>

<style scoped>

</style>
