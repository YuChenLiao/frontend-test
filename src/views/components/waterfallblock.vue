<template>
  <!--瀑布流块组件-->
  <div class="w-box">
    <button @click="getimg()"></button>
    <img :src="temp.url" alt="">
    <div class="w-c">
      <div class="w-img"></div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class WaterfallBlock extends Vue {
  @Prop() private msg!: string;

  imgsrc = [];

  temp = [];

  getimg() {
    axios.get('https://api.thecatapi.com/v1/images/search').then((res) => {
      this.temp = res.data[0];
      console.log(this.temp);
    });
  }
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
