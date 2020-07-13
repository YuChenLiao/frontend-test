<template>
  <div class="home">
    <found-tab class="app-top"></found-tab>
    <waterfall-block class="w-fall"></waterfall-block>
  </div>
</template>

<script>
import WaterfallBlock from './components/waterfallblock.vue';
import FoundTab from './components/foundTab.vue';

export default {
  name: 'Home',
  components: {
    WaterfallBlock,
    FoundTab,
  },
};
</script>

<style lang="stylus" scoped>
  .home
    background-size 100% 100%
    width 100%
    height 100%
    font-size .5rem
    .app-top
      position fixed
      top 0px
      z-index 99
      width 100%
    .w-fall
      margin-top .5rem
</style>
