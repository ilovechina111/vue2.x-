import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    token:'',
    cartArr: JSON.parse(localStorage.getItem('cartArr')) || [], // 存储购物车商品的数组
  },
  mutations: {
    // commit调用
    // 设置vuex的token
    settoken(state,token){
      state.token = token
    },
    // 添加商品到购物车
    addtoCart(state,tag){
      let goods = state.cartArr.find(v => v.title == tag.label)
      if(goods){
        goods.cartCount += 1
      }else{
        state.cartArr.push({title:tag.label,cartCount:1})
      }
    },
    // 购物车数量加一
    cartadd(state,index){
      state.cartArr[index].cartCount++
    },
    //购物车商品数量减一
    cartmove(state,index){
      if(state.cartArr[index].cartCount > 1){
        state.cartArr[index].cartCount--
      }else{
        if(window.confirm('确定从购物车移除该商品吗？')){
          state.cartArr.splice(index,1)
        }
      }
    },
    // 清空购物车
    clearcart(state){
      state.cartArr = []
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
  }
})
  // 监听每次调用mutations的时候,都会进这个方法
store.subscribe((mutations,state)=>{
   localStorage.setItem('cartArr',JSON.stringify(state.cartArr))
})
export default store