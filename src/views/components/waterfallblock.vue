<template>
  <!--瀑布流块组件-->
  <div class="w-box">
    <button @click="loadNextImage()"></button>
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

  imgsrc = [
    {
      id: '',
      url: '',
      width: 0,
      height: 0,
      top: 0,
      left: 0,
    },
  ];

  temp = {};

  async loadNextImage() {
    for (let i = 1; i <= 10; i += 1) {
      try {
        axios.defaults.headers.common['x-api-key'] = '40a43cad-bb75-475b-bf26-c6a60506a908'; // Replace this with your API Key
        const res = await axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit: 1, size: 'full' } });
        const temp = res.data;
        const pic = {
          id: temp[0].id,
          url: temp[0].url,
          width: temp[0].width,
          height: temp[0].height,
          top: 0,
          left: 0,
        };
        console.log('-- Image from TheCatAPI.com');
        console.log('url:', pic.url);
        this.imgsrc.push(pic);
      } catch (err) {
        console.log(err);
      }
    }
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
    .w-c
      width 100%
      .w-img
        width 1.6rem
</style>
