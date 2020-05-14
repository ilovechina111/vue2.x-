<template>
  <div>
    <img
      class="logo"
      src="
https://file.xdclass.net/video/2020/aliyun-3%E6%9C%88/%E8%BD%AE%E6%92%AD%E5%9B%BE.png"
      alt
    />
    <ul>
      <li v-for="item in mineArry" :key="item.label" class="mineItem" @click="itemClick(item)">
        <span class="mineTitle">{{item.label}}</span>
        <i class="cubeic-arrow"></i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mineArry: [
        { label: "商品收藏" },
        { label: "我的足迹" },
        { label: "店铺收藏" },
        { label: "我的订单" },
        { label: "退出", type: "exit" }
      ]
    };
  },
  methods:{
      itemClick(item){
          if(item.type == 'exit'){
              this.$store.commit('settoken','')
              localStorage.removeItem('token')
              this.$router.push({path:'/login'})
          }
      }
  }
};
</script>

<style lang="less" scoped>
.mineItem{
    font-size: 14px;
    text-align: left;
    height: 50px;
    line-height: 50px;
    padding-left: 5%;
    border-bottom: 1px solid #eee;
    .mineTitle{
        display: inline-block;
        width: 90%;
    }
}
.logo {
  height: 150px;
  width: 100%;
}
</style>
