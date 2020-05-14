<template>
  <div class="panelsBox">
    <cube-scroll class="panelsLeft">
      <ul>
        <li
          v-for="(list, index) in tabsLabel"
          :key="index"
          @click="selectList(index)"
          :class="list.active ? 'active' : ''"
        >{{ list.label }}</li>
      </ul>
    </cube-scroll>
    <cube-scroll class="panelsRight">
      <ul>
        <li v-for="(tag, index) in tags" :key="index">
          <img :src="tag.image" alt />
          <p>
            {{ tag.label }}
            <i class="cubeic-add" @click="addtoCart($event,tag)"></i>
          </p>
        </li>
      </ul>
    </cube-scroll>
    <div class="ball-wrap">
      <transition @before-enter="beforeEnter" @enter="enter" @afterEnter="afterEnter">
        <div class="ball" v-if="ball.show">
          <div class="inner">
            <i class="cubeic-add"></i>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ball: {
        show: false,
        el: ""
      },
      tabsLabel: [
        {
          label: "热门推荐",
          active: true
        },
        {
          label: "手机数码",
          active: false
        },
        {
          label: "家用电器",
          active: false
        },
        {
          label: "电脑办公",
          active: false
        },
        {
          label: "美妆护肤",
          active: false
        },
        {
          label: "汽车生活",
          active: false
        },
        {
          label: "京东超市",
          active: false
        },
        {
          label: "男装",
          active: false
        },
        {
          label: "男鞋",
          active: false
        },
        {
          label: "女装",
          active: false
        },
        {
          label: "女鞋",
          active: false
        },
        {
          label: "手机数码",
          active: false
        },
        {
          label: "家用电器",
          active: false
        },
        {
          label: "手机数码",
          active: false
        },
        {
          label: "家用电器",
          active: false
        }
      ],
      tags: []
    };
  },
  methods: {
    //   点击不同项切换数据
    selectList(index) {
      this.tabsLabel.forEach((v, i) => {
        if (index == i) {
          v.active = true;
          this.getClassity(index);
        } else {
          v.active = false;
        }
      });
    },
    //   获取分类数据
    async getClassity(index) {
      const result = await this.$http.get("/api/classify", {
        params: { type: index }
      });
      this.tags = result.data;
    },
    addtoCart(e, tag) {
      this.$store.commit("addtoCart", tag);
      // 让小球显示出来
      this.ball.show = true;
      // 获取点击位置
      this.ball.el = e.target;
    },
    beforeEnter(el) {
      const dom = this.ball.el;
      // 获取点击的dom位置
      const rect = dom.getBoundingClientRect();
      console.log(rect);
      const x = rect.left - window.innerWidth * 0.7;
      const y = -(window.innerHeight - rect.top);
      console.log(x, y);
      el.style.display = "block";
      el.style.transform = `translate3d(0,${y}px,0)`;
      const inner = el.querySelector(".inner");
      inner.style.transform = `translate3d(${x}px,0,0)`;
    },
    enter(el, done) {
      // 触发重绘
      document.body.offsetHeight
      // 小球移动回到原点，就是购物车的位置
      el.style.transform = `translate3d(0,0,0)`;
      const inner = el.querySelector(".inner");
      inner.style.transform = `translate3d(0,0,0)`;
      // 过渡完成后执行的事件
      el.addEventListener('transitionend',done)
    },
    afterEnter(el) {
      this.ball.show = false
      el.style.display = 'none'
    }
  },
  mounted() {
    //   设置滚动盒子的高度
    const panelsLeft = document.querySelector(".panelsLeft");
    const panelsRight = document.querySelector(".panelsRight");
    const bodyHeight = document.documentElement.clientHeight;
    panelsLeft.style.height = bodyHeight - 53 + "px";
    panelsRight.style.height = bodyHeight - 53 + "px";
  },
  created() {
    //   获取默认的分类数据
    this.getClassity(0);
  }
};
</script>

<style lang="less" scoped>
.ball-wrap {
  .ball {
    position: fixed;
    left: 70%;
    bottom: 5px;
    z-index: 1000000000000;
    color: red;
    transition: all 1s cubic-bezier(0.49, -0.29, 0.75, 0.41);
    .inner {
      width: 16px;
      height: 16px;
      transition: all 1s linear;
      /deep/ .cubeic-add {
        font-size: 17px;
      }
    }
  }
}
.panelsBox {
  display: flex;
  .panelsLeft {
    width: 30%;
    li {
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      border-bottom: 1px solid #fff;
      color: #333;
      background: #f8f8f8;
    }
    .active {
      background: #fff;
      color: #e93b3d;
    }
  }
  .panelsRight {
    width: 70%;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 50%;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        img {
          width: 80px;
          height: 80px;
        }
        /deep/ .cubeic-add {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
