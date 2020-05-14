<template>
  <div>
    <transition :name="transitionName">
      <router-view class="Router"></router-view>
    </transition>
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
      class="botnav"
    >
    </cube-tab-bar>
    <span class="countsum" v-if="countsum != 0">{{countsum}}</span>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "botNav",
  data() {
    return {
      transitionName: "fade-right",
      selectedLabelDefault: "首页",
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home"
        },
        {
          label: "分类",
          icon: "cubeic-tag"
        },
        {
          label: "搜索",
          icon: "cubeic-search"
        },
        {
          label: "购物车",
          icon: "cubeic-mall"
        },
        {
          label: "我的",
          icon: "cubeic-person"
        }
      ]
    };
  },
  computed:{
    ...mapGetters({
      countsum:'countsum'
    })
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
    },
    changeHandler(label) {
      switch (label) {
        case "首页":
          this.$router.push("/bottomNav/index");
          break;
      }
      switch (label) {
        case "分类":
          this.$router.push("/bottomNav/list");
          break;
      }
      switch (label) {
        case "搜索":
          this.$router.push("/bottomNav/search");
          break;
      }
      switch (label) {
        case "购物车":
          this.$router.push("/bottomNav/cart");
          break;
      }
      switch (label) {
        case "我的":
          this.$router.push("/bottomNav/mine");
          break;
      }
    }
  },
  created() {
    switch (this.$route.path) {
      case "/bottomNav/index":
        this.selectedLabelDefault = "首页";
        break;
         case "/bottomNav/list":
        this.selectedLabelDefault = "分类";
        break;
         case "/bottomNav/search":
        this.selectedLabelDefault = "搜索";
        break;
         case "/bottomNav/cart":
        this.selectedLabelDefault = "购物车";
        break;
         case "/bottomNav/mine":
        this.selectedLabelDefault = "我的";
        break;
    }
  }
};
</script>
<style lang="less" scoped>
.cube-tab-bar.botnav {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background: #ffffff;

  /deep/ .cube-tab div {
    font-size: 10px;
    padding-top: 3px;
  }
  /deep/ i {
    font-size: 20px;
  }
}
.Router {
  position: absolute;
  width: 100%;
  transition: all 0.8s ease;
}
.fade-left-enter,
.fade-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.fade-left-leave-active,
.fade-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
.countsum{
  position: fixed;
  bottom: 33px;
  right: 23%;
  z-index: 1111111;
  font-size: 12px;
  width: 16px;
  line-height: 16px;
  background: red;
  color: #fff;
  border-radius: 50%;
}
</style>
