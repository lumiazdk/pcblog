<template>
  <div>
    <v-card>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs3>
            <v-hover>
              <v-card slot-scope="{ hover }" class="mx-auto" color="grey lighten-4" max-width="600">
                <v-img
                  :aspect-ratio="16/9"
                  src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out cyan darken-2 v-card--reveal display-0 white--text"
                      style="height: 100%;font-size:12px"
                    >个人博客，属于我的小世界</div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-flex>
          <v-flex xs3>
            <div class="text">真的猛士，敢于直面惨淡的人生，敢于正视淋漓的鲜血。</div>
          </v-flex>
          <v-flex xs3>
            <v-hover>
              <v-card slot-scope="{ hover }" class="mx-auto" color="grey lighten-4" max-width="600">
                <v-img
                  :aspect-ratio="16/9"
                  src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal display-0 white--text"
                      style="height: 100%;font-size:12px"
                    >时间，就象海棉里的水，只要愿挤，总还是有的。</div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-flex>
          <v-flex xs3>
            <div class="text">时间对于我来说是很宝贵的，用经济学的眼光看是一种财富。</div>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs3>
            <div class="text">哪里有天才，我是把别人喝咖啡的工夫都用在了工作上了。</div>
          </v-flex>
          <v-flex xs3>
            <v-hover>
              <v-card slot-scope="{ hover }" class="mx-auto" color="grey lighten-4" max-width="600">
                <v-img
                  :aspect-ratio="16/9"
                  src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out pink darken-2 v-card--reveal display-0 white--text"
                      style="height: 100%;font-size:12px"
                    >自由固不是钱所能买到的，但能够为钱而卖掉。</div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-flex>
          <v-flex xs3>
            <div class="text">倘能生存，我当然仍要学习。</div>
          </v-flex>
          <v-flex xs3>
            <v-hover>
              <v-card slot-scope="{ hover }" class="mx-auto" color="grey lighten-4" max-width="600">
                <v-img
                  :aspect-ratio="16/9"
                  src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out amber darken-2 v-card--reveal display-0 white--text"
                      style="height: 100%;font-size:12px"
                    >友谊是两颗心真诚相待，而不是一颗心对另一颗心敲打。</div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <v-card>
      <v-card-title>
        <v-icon large left>mdi-twitter</v-icon>
        <span class="title font-weight-light">简介</span>
      </v-card-title>
      <v-card-text>热爱前端开发，追求新技术，代码格式规范强迫症。 熟练掌握前端界面html5css3开发。熟练使用mui，能快速还原UI设计稿。 熟练掌握vue编程 vue-cli vue-router vuex 单页应用(组件)开发。 熟悉es5，es6语法。在两种语境下都有相应的编程经验。</v-card-text>
      <v-card-actions>
        <v-tabs v-model="tab" color="cyan" align-with-title style="width:100%" dark>
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card flat>
                <v-card-text>网名：朱定坤</v-card-text>
                <v-card-text>职业：Web前端工程师</v-card-text>
                <v-card-text>邮箱：1126572821@qq.com</v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>1、web前端页面的开发</v-card-text>
                <v-card-text>2、根据产品需求，配合后端开发人员协作实现前端页面效果和功能</v-card-text>
                <v-card-text>3、能够进行手机端和Pc端Html页面制作</v-card-text>
                <v-card-text>4、熟练使用html5，CSS3，javascript，熟悉页面架构和布局</v-card-text>
                <v-card-text>5、熟练使用Javascript框架</v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>【走进心灵】个人博客，属于我的小世界！</v-card-text>
                <v-card-text>【走进心灵】个人博客，属于我的小世界！</v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>域 名：z-chat.top 创建于2019年02月2日</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    items: ["基本信息", "工作技能", "心路历程", "我的博客"]
  })
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.6;
  position: absolute;
  width: 100%;
}
.text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 14px;
  color: #686868;
}
</style>
