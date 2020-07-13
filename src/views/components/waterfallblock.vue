<template>
  <!--瀑布流块组件-->
  <div>

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

</style>
