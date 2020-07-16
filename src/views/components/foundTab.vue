<template>
  <!--搜索栏组件-->
  <div>
    <div class="found-box">
      <div class="f-left">
        <span class="l-item"></span>
        <span class="l-item">
          <el-button class="l-button" type="info" round>主页</el-button>
        </span>
        <span class="l-item">
          <div class="l-text">
            关注
          </div>
        </span>
      </div>
      <div class="f-area">
        <el-input class="i-area"
        v-model="finput" placeholder="请输入内容"
        prefix-icon="el-icon-search"
        @focus="hoton()"
        @blur="hotoff()">
        </el-input>
      </div>
      <div class="f-right">
        <span class="r-item">
          <div class="el-icon-bell bell"></div>
        </span>
        <span class="r-item">
          <div class="el-icon-news bell"></div>
        </span>
        <span class="r-item">
          <div class="r-round">
            <img src="" alt="">
          </div>
        </span>
        <span class="r-item">
          <div class="el-icon-arrow-down bell"></div>
        </span>
      </div>
      <div class="hot-bar" v-show="hot==1">
        <p style="font-size: .1rem;width: 100%;margin-bottom: .1rem">Printerest上的热门</p>
        <div class="img-box">
          <!--记得用v-for修改-->
          <div class="img-c">
            <img class="i-item" src="@/assets/testpic/风景.png" alt="">
          </div>
          <div class="img-c">
            <img class="i-item" src="@/assets/testpic/风景.png" alt="">
          </div>
          <div class="img-c">
            <img class="i-item" src="@/assets/testpic/风景.png" alt="">
          </div>
          <div class="img-c">
            <img class="i-item" src="@/assets/testpic/风景.png" alt="">
          </div>
          <div class="img-c">
            <img class="i-item" src="@/assets/testpic/风景.png" alt="">
          </div>
          <div class="img-c">
            <img class="i-item" src="@/assets/testpic/风景.png" alt="">
          </div>
          <div class="img-c">
            <img class="i-item" src="@/assets/testpic/风景.png" alt="">
          </div>
          <div class="img-c">
            <img class="i-item" src="@/assets/testpic/风景.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FoundTab extends Vue {
  @Prop() private msg!: string;

  finput = '';

  hot = 0;

  hoton() {
    this.hot = 1;
  }

  hotoff() {
    this.hot = 0;
  }
}
</script>

<style lang="stylus" scoped>
  .found-box
    width 100%
    height .5rem
    display flex
    flex-direction row
    background-size contain
    background-color #ffffff
    .f-left
      width 15%
      height 100%
      font-size .2rem
      display flex
      .l-item
        width 33%
        height 100%
        margin auto
        top 0
        left 0
        right 0
        bottom 0
        .l-button
          margin-top .05rem
          padding-left .1rem
          padding-right .1rem
          width 100%
        .l-text
          padding-top .17rem
          width 100%
          text-align center
          font-size 15px
    .f-area
      width 70%
      .i-area
        position absolute
        margin auto
        padding-top .05rem
        left 0
        right 0
        top 0
        bottom 0
        width 70%
        display inline-block
    .f-right
      width 15%
      height 100%
      font-size .2rem
      display flex
      .r-item
        width 25%
        height 100%
        .bell
          width 100%
          text-align center
          padding-top .14rem
        .r-round
          margin auto
          margin-top .14rem
          width .2rem
          text-align center
          border-radius .1rem
          background-color grey
  .hot-bar
    width 66%
    height 280%
    background-color #ffffff
    position absolute
    margin auto
    top .5rem
    left 0
    right 0
    padding .15rem
    .img-box
      width 56%
      height 50%
      .img-c
        margin .5%
        width 22%
        height 50%
        background-color #ffffff
        display inline-table
        border-radius .08rem
        overflow hidden
        .i-item
          width 100%
          height 100%
</style>
