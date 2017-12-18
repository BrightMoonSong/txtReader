<template lang="html">
  <div class="box">
    <div class="toptab">
      <span><返回书架</span>
    </div>
    <div class="content" @touchstart="setStyle" :class="classList[cindex]">
      {{content}}
    </div>
    <div class="footertab">
      <div class="page">
        <span>上一章</span>
        <span>下一章</span>
      </div>
      <div class="set">
        <span>目录</span>
        <span>关灯</span>
        <span>选项</span>
        <span>更多...</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
      classList: ['bgcw', 'bgcg', 'bgcye'],
      cindex: 0
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      console.log('init');
      this.content = '主轴为水平方向，起点在右端。主轴为水平方向，起点在右端。主轴为水平方向，起点在右端。主轴为水平方向，起点在右端。主轴为水平方向，起点在右端。主轴为水平方向，起点在右端。主轴为水平方向，起点在右端。主轴为水平方向，起点在右端。主轴为水平方向，起点在右端。主轴为水平方向，起点在右端。';
    },
    setStyle() {
      console.log('setStyle');
      if (this.cindex < 2) {
        this.cindex++;
      } else {
        this.cindex = 0;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box,
.content {
    width: 100%;
    height: 100%;
}
.toptab {
    width: 100%;
    padding: 5px;
    background-color: #ccc;
    span {
        font-size: 1em;
        line-height: 2em;
    }
}
.footertab{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: #ccc;
  .page{
    display: flex;
    justify-content: space-around;
  }
  .set{
    display: flex;
    justify-content: space-around;
  }
}
.bgcw {
    background-color: #fff;
}
.bgcg {
    background-color: green;
}
.bgcye {
    background-color: yellow;
}
</style>
