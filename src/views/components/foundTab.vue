<template>
  <!--搜索栏组件-->
  <div class="found-box">
    <div class="f-left">
      <span class="l-item">1</span>
      <span class="l-item">
        <el-button class="l-button" type="info">主页</el-button>
      </span>
      <span class="l-item">3</span>
    </div>
    <div class="f-area">
      <el-input class="i-area" v-model="input" placeholder="请输入内容"></el-input>
    </div>
    <div class="f-right"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FoundTab extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="stylus" scoped>
  .found-box
    width 100%
    height .5rem
    display flex
    flex-direction row
    background-size contain
    .f-left
      width 20%
      height 100%
      font-size .2rem
      display flex
      .l-item
        width 33%
        height 100%
        .l-button
          padding-left .1rem
          padding-right .1rem
          width 100%
    .f-area
      width 60%
      .i-area
        position absolute
        margin auto
        padding-top .05rem
        left 0
        right 0
        top 0
        bottom 0
        width 60%
        display inline-block
    .f-right
      width 20%
      height 100%
      font-size .2rem
</style>
