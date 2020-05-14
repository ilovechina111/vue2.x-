<template>
  <div>
    <div class="goods" v-for="(item, index) in cartArr" :key="index">
      {{ item.title }}
      <div class="goodNumbers">
        <i class="cubeic-remove" @click="removeCart(index)"></i>
        <span>{{ item.cartCount }}</span>
        <i class="cubeic-add" @click="addCart(index)"></i>
      </div>
    </div>
    <cube-button style="margin:10px 0">下单</cube-button>
    <cube-button @click="clearCart">清空购物车</cube-button>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
        // cartArr:[]
    };
  },
  computed:{
      ...mapState({
          cartArr:state=>state.cartArr
      })
  },
  methods: {
     
    // 减少购物车
    removeCart(index) {
      this.$store.commit('cartmove',index)
    },
    // 增加购物车
    addCart(index) {
      this.$store.commit('cartadd',index)
    },
    // 清空购物车
    clearCart(){
      this.$store.commit('clearcart')
    }
  }
};
</script>

<style lang="less" scoped>
.goods {
  text-align: left;
  .goodNumbers {
    float: right;
    i {
      font-size: 18px;
    }
  }
}
</style>
