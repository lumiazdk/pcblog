<template>
  <v-app>
    <div>
      <v-toolbar color="cyan" dark tabs app>
        <v-toolbar-title>朱定坤</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        <template v-slot:extension>
          <v-tabs v-model="model" centered color="cyan" slider-color="yellow" @change="pageChage">
            <v-tab :href="`#/`">首页</v-tab>
            <v-tab :href="`#/life`">慢生活</v-tab>
            <v-tab :href="`#/about`">关于我</v-tab>
            <v-tab :href="`#/time`">时间轴</v-tab>
            <v-tab :href="`#/gbook`">留言</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
    </div>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer class="pa-3" app>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      model: this.$route.path
    };
  },
  methods: {
    pageChage(res) {
      this.$router.push({
        path: res
      });
    }
  },
  created: function() {}
};
</script>
