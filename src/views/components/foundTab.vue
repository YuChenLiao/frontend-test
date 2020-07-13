<template>
  <!--搜索栏组件-->
  <div class="found-box">
    <div class="f-left"></div>
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
    background-color blue
    display flex
    flex-direction row
    background-size contain
    .f-left
      width 10%
      height 100%
      font-size .2rem
    .f-area
      width 80%
      background-color grey
      .i-area
        top 1%
        width 100%
        display inline-block
    .f-right
      width 10%
      height 100%
      font-size .2rem
</style>
