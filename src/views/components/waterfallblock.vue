<template>
  <!--瀑布流块组件-->
  <div class="w-box">
    <div class="w-c">
      <div class="w-img"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class WaterfallBlock extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="stylus" scoped>
  .w-box
    width 90%
    height 100%
    margin-left 5%
    margin-right 5%
    background-color grey
</style>
