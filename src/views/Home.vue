<template>
  <div class="home">
    <Found-tab></Found-tab>
    <waterfall-block></waterfall-block>
    这是主页
  </div>
</template>

<script>
import WaterfallBlock from './components/waterfallblock.vue'
import FuondTab from './components/foundTab.vue';

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
</style>
