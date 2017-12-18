<template lang="html">
<div class="box">
  <headers :titleName="'书架'"></headers>
  <div class="content">
    <div class="book-line" v-for="res in bookList">
      <img v-for="item in res" :src="item.src" @touchstart="bookPath(item.src)" alt="...">
      <img class="plus" v-if="res.length<3" src="./plus.jpg" @touchstart="bookPath('plus')" alt="...">
    </div>
  </div>
  <footers></footers>
</div>
</template>

<script>
import headers from '@/common/header'
import footers from '@/common/footer'

export default {
  name: 'bookshelf',
  data() {
    return {
      bookList: []
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      this.bookList = [
        [{
          'src': 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2559880466,1764208247&fm=58'
        }, {
          'src': 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1991166803,4182541530&fm=58'
        }, {
          'src': 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1991166803,4182541530&fm=58'
        }],
        [{
          'src': 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2559880466,1764208247&fm=58'
        }, {
          'src': 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1991166803,4182541530&fm=58'
        }]
      ]
    },
    bookPath(res) {
      console.log(res);
      this.$router.push('/book');
    }
  },
  components: {
    headers,
    footers
  }
}
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    .content {
        width: 100%;
        margin-bottom: 3em;
        .book-line {
            border-bottom: 5px solid #bacd1e;
            display: flex;
            justify-content: space-around;
            height: 188px;
            .plus {
                border: 1px solid;
            }
            img {
                margin-top: 10px;
                margin-bottom: 3px;
                width: 30%;
            }
        }
    }
}
</style>
