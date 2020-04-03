import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    cartArr:[], // 存储购物车商品的数组
  },
  mutations: {
    // commit调用
    // 设置vuex的token
    settoken(state,token){
      state.token = token
    },
    // 添加商品到购物车
    toCart(state,tag){
      let goods = state.cartArr.find(v=>v.title == tag.label)
      if(goods){
        goods.cartCount += 1;
      }else{
        state.cartArr.push({title:tag.label,cartCount:1})
      }
    }
  },
  actions: {
    // dispatch调用
  },
  // 相当于vue compute
  getters:{
    countsum:state=>{
      let num = 0;
      state.cartArr.forEach(v=>{
        num += v.cartCount
      })
      return num
    }
  },
  modules: {
  }
})
