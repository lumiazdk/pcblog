<template>
  <v-layout row>
    <v-snackbar v-model="snackbar">
      {{snackbarText}}
      <v-btn color="pink" flat @click="snackbar = false">关闭</v-btn>
    </v-snackbar>
    <v-flex xs12>
      <v-card>
        <v-list three-line>
          <template v-for="(item, index) in itemsl">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
            <v-list-tile :key="item.title" avatar>
              <v-list-tile-avatar>
                <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.message"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider :key="index" :inset="true"></v-divider>
          </template>
        </v-list>
      </v-card>
      <v-card>
        <v-card-title>
          <span class="title font-weight-light">说点什么吧</span>
        </v-card-title>

        <form class="form" ref="form">
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="10"
            label="称呼"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-textarea
            name="input-7-1"
            label="留言"
            value
            hint="Hint text"
            v-model="message"
            @input="$v.message.$touch()"
            @blur="$v.message.$touch()"
            required
            :error-messages="messageErrors"
          ></v-textarea>

          <v-btn @click="submit">发送</v-btn>
          <v-btn @click="clear">清除</v-btn>
        </form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { validationMixin } from "vuelidate";
import axios from "axios";
import { required, maxLength, email } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    message: { required }
  },
  data() {
    return {
      itemsl: [
        { header: "Today" },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true }
      ],
      name: "",
      email: "",
      message: "",
      snackbar: false,
      snackbarText: "",
      page: 1,
      count: 0
    };
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength && errors.push("称呼不能为空");
      !this.$v.name.required && errors.push("称呼不能为空.");
      return errors;
    },
    messageErrors() {
      const errors = [];
      if (!this.$v.message.$dirty) return errors;
      !this.$v.message.required && errors.push("留言不能为空");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("邮件格式错误");
      !this.$v.email.required && errors.push("邮件不能为空");
      return errors;
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (
        this.nameErrors.length == 0 &&
        this.messageErrors.length == 0 &&
        this.emailErrors.length == 0
      ) {
        axios({
          method: "post",
          url: "/addMessage",
          data: {
            name: this.name,
            email: this.email,
            message: this.message
          }
        }).then(res => {
          if (res.data.code == 1) {
            this.snackbar = true;
            this.snackbarText = "留言成功";
          } else {
            this.snackbar = true;
            this.snackbarText = "留言失败";
          }
        });
      }
    },
    async getMessage() {
      let data = await axios({
        method: "post",
        url: "/getMessage",
        data: {
          page: this.page,
          where: {}
        }
      });
      if (data.data.code == 1) {
        this.itemsl = data.data.result.data.rows;
        this.count = data.data.result.data.count;
      }
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    }
  },
  created() {
    this.getMessage();
  }
};
</script>

<style scoped>
.form {
  padding: 10px;
}
</style>
