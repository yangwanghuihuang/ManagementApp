<template>
  <div class="www">
    <!-- <div class="echar"> -->
        <!-- <div id="main" :option="option" style="width: 100%;height:50%;left:5%"></div> -->
    <!-- </div> -->
         <div class="swipPic">
           <van-swipe :autoplay="3000" >
           <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
          </van-swipe>
          <!-- <img :src="url"/> -->
         </div>
         <div class="SiderBar">     
         <van-sidebar v-model="activeKey"  @change="onChange">
            <van-sidebar-item title="故障上报" />
            <van-sidebar-item title="投诉建议"  />
            <van-sidebar-item title="投票" />
            <van-sidebar-item title="满意度" disabled/>
         </van-sidebar>
          </div>
    <tabbar></tabbar>
  </div>
  
</template>
<script>
  import tabbar from "../../components/tobbar.vue";  //引用组件的地址
  import echarts from 'echarts'
export default {
  data(){
    return{
      // url:'static/images/app_index2.png',
       images: [
        'static/images/app_index1.png',
        'static/images/app_index2.png',
         'static/images/app_index1.png',
        'static/images/app_index2.png',

        'static/images/apple-1.png',
       'static/images/apple-2.jpg',
      ],
      // option: {
      //       title: {
      //           text: '用户故事统计图'
      //       },
      //       tooltip: {},
      //       legend: {
      //           data:['用户故事']
      //       },
      //       xAxis: {
      //           data: ["迭代6","迭代7","迭代8"]
      //       },
      //       yAxis: {},
      //       series: [{
      //           name: '用户故事',
      //           type: 'bar',
      //           data: [3, 14, 10]
      //       }]
      //   },
        activeKey:0,
    }
  },
    mounted(){
      //  const echart=echarts.init(document.getElementById('main'));
      //  echart.setOption(this.option);
      //  window.onresize = function(){
      //   echart.resize();       
      //   }
      // window.onresize=echart.resize;
    },
    components: {
    'tabbar': tabbar
  },
    methods:{
      skip2intent(){
        this.$router.push({ path: "intent"});
      },
       onChange(index) {
        if(index == 0){
           this.$router.push({
             path:"problem"
           })
        }
        if(index == 1){
           this.$router.push({
             //投诉建议
             path:"advice"
           })
        }
        if(index == 2){
           this.$router.push({
             path:"vote"
           })
        }
        if(index == 3){
           this.$router.push({
             path:"intent"
           })
        }
      }
    }
}
</script>
<style lang="less" scoped>
  .www {
    height: 100%;
    .swipPic {
      height: 35%;
      width: 100%;
      //  background-image: url(../../../static/images/bg_workflow.png);
      // background-repeat : no-repeat;
      // background-size: 100% 100%;
    margin-bottom: 15rem;
    }
    .SiderBar{
      height: 60%;
    }
     
  }

</style>
