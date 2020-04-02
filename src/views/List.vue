<template>
  <div class="panelsBox">
    <cube-scroll class="panelsLeft">
      <ul>
        <li
          v-for="(list, index) in tabsLabel"
          :key="index"
          @click="selectList(index)"
          :class="list.active ? 'active' : ''"
        >
          {{ list.label }}
        </li>
      </ul>
    </cube-scroll>
    <cube-scroll class="panelsRight">
      <ul>
        <li v-for="(tag, index) in tags" :key="index">
          <img :src="tag.image" alt="" />
          <p>{{ tag.label }}</p>
        </li>
      </ul>
    </cube-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        } else {
          v.active = false;
        }
        this.getClassity(index);
      });
    },
    //   获取分类数据
    async getClassity(index) {
      const result = await this.$http.get("/api/classify", {
        params: { type: index }
      });
      this.tags = result.data;
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
