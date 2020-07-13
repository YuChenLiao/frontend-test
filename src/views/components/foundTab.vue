<template>
  <!--搜索栏组件-->
  <div>
    这是搜索栏
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

</style>
