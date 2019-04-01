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
                      class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >$14.99</div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
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
                      class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >$14.99</div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
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
                      class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >$14.99</div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
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
                      class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >$14.99</div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
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
                      class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >$14.99</div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
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
                      class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >$14.99</div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
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
                      class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >$14.99</div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
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
                      class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >$14.99</div>
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
      <v-card-text
        class="headline"
      >"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."</v-card-text>
      <v-card-actions>
        <v-tabs v-model="tab" color="cyan" align-with-title>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item">
              <v-card flat>
                <v-card-text>{{ text }}</v-card-text>
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
    items: ["web", "shopping", "videos", "images", "news"],
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  })
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
