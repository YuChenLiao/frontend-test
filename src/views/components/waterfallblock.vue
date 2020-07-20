<template>
  <!--瀑布流块组件-->
  <div class="w-box" v-if="show_wf" ref="WaterfallBlock">
    <div class="w-c">
      <div
      class="w-img"
      v-for="(item,index) in imgsrc"
      :key="index"
      :style="{height:item.height,top: item.top+'px',left:item.left+'px'}"
      >
        <img :src="item.url" alt="" class="i-item">
      </div>
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

  show_wf = 0;
  domWidth = document.body.clientWidth;
  waterfallImgRight = 10;//右边距

  waterfallImgCol = Math.floor((this.domWidth)/(170 + this.waterfallImgRight));//多少列

  waterfallImgBottom = 10;//下边距

  waterfallDeviationHeight = new Array(this.waterfallImgCol)
  created() {
    this.loadNextImage();
  };

  async loadNextImage() {
    for ( let k = 0;k < this.waterfallDeviationHeight.length; k += 1) {
      this.waterfallDeviationHeight[k] = 0;
    }
    for (let i = 1; i <= 40; i += 1) {
      let j = 1;
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
        // 计算缩放后的高度
        pic.height = (160/pic.width)*temp[0].height;
        // 获取高度最低列
        let minIndex = this.waterfallDeviationHeight.indexOf(Math.min.apply(null, this.waterfallDeviationHeight));
        // 获取图片顶部位置
        pic.top = this.waterfallDeviationHeight[minIndex] + 10;
        pic.left = minIndex*(this.waterfallImgRight + 170);
        this.waterfallDeviationHeight[minIndex] += pic.height + this.waterfallImgBottom;
        console.log('-- Image from TheCatAPI.com');
        this.imgsrc.push(pic);
        // console.log('url:', this.imgsrc[i].url);
        console.log(this.imgsrc[i].left);
        console.log(this.domWidth);
        console.log(this.waterfallDeviationHeight.length)
        console.log(minIndex);
        console.log(this.waterfallImgCol);
        j += 1;
      } catch (err) {
        console.log(err);
      }
    }
    this.show_wf = 1;
  };
}
</script>

<style lang="stylus" scoped>
  .w-box
    width 90%
    height 100%
    margin-left 5%
    margin-right 5%
    .w-c
      width 100%
      position relative
      .w-img
        width 1.7rem
        position absolute
        .i-item
          width 100%
          height 100%
</style>
