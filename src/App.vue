<template>
  <v-app>
    <v-dialog v-model="dialog" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          请求中。。。
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <div>
      <v-toolbar color="cyan" dark tabs app>
        <v-toolbar-title>朱定坤</v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>-->
        <template v-slot:extension>
          <v-tabs v-model="model" centered color="cyan" slider-color="yellow" @change="pageChage">
            <v-tab :href="`#/`">首页</v-tab>
            <v-tab :href="`#/about`">关于我</v-tab>
            <v-tab :href="`#/time`">时间轴</v-tab>
            <v-tab :href="`#/gbook`">留言</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
    </div>
    <v-content v-if="$route.path!='/postDetail'">
      <router-view></router-view>
    </v-content>
    <router-view v-if="$route.path=='/postDetail'"></router-view>

    <v-footer class="pa-3" app>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      model: this.$route.path,
      dialog: true
    };
  },
  methods: {
    pageChage(res) {
      this.$router.push({
        path: res
      });
    }
  },
  created: function() {
    axios.interceptors.request.use(
      config => {
        this.dialog = true;
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

    //http response 拦截器
    axios.interceptors.response.use(
      response => {
        this.dialog = false;
        return response;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }
};
</script>
