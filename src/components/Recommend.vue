<template>
  <div id="recommend">
    <swiper :options="swiperOption"  ref="mySwiper">  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide v-for="item in items">  
                <div class="t"><p>{{item}}</p></div>
            </swiper-slide>  
            <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>  
    </swiper>
    <div class="recommendContent">
      <ul>
        <li v-for="list in lists">{{list}}</li>
      </ul>
    </div>
  </div>  
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'  
export default {
  name:'Recommend',
   components: {  
            swiper,  
            swiperSlide  
        },  
  data() {  
            return {  
                items:[1,2,3,4,5],
                lists:["1.牛逼红灌灌灌灌","2.阿西吧撸啊撸","3.丢丢丢","4.此次次次灌灌灌","5.牛逼红灌灌灌灌"],                
                swiperOption: {  
                //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
                notNextTick: true,  
                //pagination: '.swiper-pagination',  
                slidesPerView: 'auto',  
                //centeredSlides: true,  
                paginationClickable: true,  
                spaceBetween: 30,  
                    onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法  
                        this.page = swiper.realIndex+1;  
                        this.index = swiper.realIndex;  
                    }  
                }  
            }  
        },  
        //定义这个sweiper对象  
        computed: {  
            swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        },  
        mounted () {  
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
            this.swiper.slideTo(0, 0, false);  
        }  
}
</script>
<style>
#recommend{
  padding: 0 10px;
  padding-top: 10px;
}
.t{
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  }
.swiper-slide{
  border: 1px solid black;  
  width: 164px;
  margin-right: 22px!important;
}
.recommendContent{
  width: 100%;
  height: 200px;
  border-top: 1px solid black;
  margin-top: 20px;
}
.recommendContent ul li{
  height: 50px;
  line-height: 50px;
  padding-left: 30px;
  border-bottom: 1px solid grey;
}
</style>
