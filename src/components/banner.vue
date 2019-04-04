    <template>
  <div>
    <v-carousel height="408">
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
  </div>
</template>
    <script>
import axios from "axios";
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    async getBanner() {
      let data = await axios({
        method: "post",
        url: "/getBanner",
        data: {
          page: 1,
          where: {}
        }
      }).then(res => {
        if (res.data.code == 1) {
          let data = res.data.result.data.rows[0];
          console.log(data);
          let items = JSON.parse(data.bannerPath);
          items.forEach(element => {
            this.items.push({
              src: element
            });
          });
        }
      });
    }
  },
  created() {
    this.getBanner();
  }
};
</script>
    <style scoped>
</style>
    
    