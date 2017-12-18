<template lang="html">
  <div class="box">
    <div class="toptab" v-if="showSet">
      <span><返回书架</span>
    </div>
    <div class="content" ref="content" @touchstart="setStyle" :class="className">
      {{content}}
    </div>
    <div class="footertab" v-if="showSet">
      <div class="page">
        <span>上一章</span>
        <span>下一章</span>
      </div>
      <div class="set">
        <span>目录</span>
        <span>关灯</span>
        <span @touchstart="option">选项</span>
        <span>更多...</span>
      </div>
    </div>
    <div class="option-set" v-if="showOption">
      <div class="big-small">
        <span class="big" @touchstart="fontChange('big')">大</span>
        <span class="small" @touchstart="fontChange('small')">小</span>
      </div>
      <div class="round-div">
        <span class="round" v-for="item in classList" :class="item" @touchstart="bgstyle(item)"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
      showSet: false,
      showOption: false,
      className: '',
      classList: ['bgcw', 'bgcg', 'bgcye', 'bgcred', 'bgcmo']
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
      this.showSet = true;
    },
    bgstyle(res) {
      this.className = res;
    },
    option() {
      this.showSet = false;
      this.showOption = true;
    },
    fontChange(res){
      switch (res) {
        case 'big':

          break;
        default:

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
.footertab {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    background-color: #ccc;
    .page {
        display: flex;
        justify-content: space-around;
        span {
            line-height: 2em;
        }
    }
    .set {
        display: flex;
        justify-content: space-around;
        span {
            line-height: 2em;
        }
    }
}
.option-set {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    background-color: #ccc;
    padding: 5px 0;
    .big-small {
        display: flex;
        justify-content: space-around;
        margin: 5px;
        span {
            display: inline-block;
            width: 40%;
            text-align: center;
            border: 1px solid #000;
            border-radius: 5px;
        }
    }
    .round-div {
        display: flex;
        justify-content: space-around;
        .round {
            display: inline-block;
            width: 20px;
            height: 20px;
            border-radius: 10px;
        }
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
.bgcred {
    background-color: red;
}
.bgcmo {
    background-color: #eac;
}
</style>
