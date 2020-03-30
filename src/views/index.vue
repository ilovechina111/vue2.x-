<template>
  <div class="index">
    <!-- 轮播图 -->
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item
        v-for="(item, index) in items"
        :key="index"
        @click.native="clickHandler(item, index)"
      >
        <img class="banner" :src="item.image" />
      </cube-slide-item>
    </cube-slide>
    <!-- 滚动分类 -->
    <cube-slide ref="slidelists" :data="lists" @change="changePage">
      <cube-slide-item
        v-for="(list, index) in lists"
        :key="index"
      >
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <a :href="item.url">
                    <img :src="item.image" alt="">
                    <p>{{item.label}}</p>
                </a>
            </li>
        </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      lists:[]
    };
  },
  methods: {
    changePage(current) {
      //   console.log("当前轮播图序号为:" + current);
    },
    clickHandler(item, index) {
      console.log(item, index);
    },
    slideData() {
      this.$http.get("/api/banner").then(res => {
        this.items = res.data;
      });
    },
    listData(){
         this.$http.get("/api/rollinglist").then(res => {
        this.lists = res.data;
      });
    }
  },
  async created() {
    try {
      await this.slideData();
      await this.listData();
    } catch (err) {
      console.log(err);
    }
  }
};
</script>
<style lang="less" scoped>
.index .banner {
  display: block;
  width: 100%;
  height: 175px;
}
</style>
