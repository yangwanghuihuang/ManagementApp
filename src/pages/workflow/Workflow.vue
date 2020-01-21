<template>
  <div class="www">
    <!-- <div class="echar"> -->
        <!-- <div id="main" :option="option" style="width: 100%;height:50%;left:5%"></div> -->
    <!-- </div> -->
         <div class="swipPic">
           <van-swipe :autoplay="3000" indicator-color="white">
           <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
          </van-swipe>
         </div>
         <div class="SiderBar">
      
         <van-sidebar v-model="activeKey"  @change="onChange">
            <van-sidebar-item title="故障上报" />
            <van-sidebar-item title="业主公告"  />
            <van-sidebar-item title="投票" disabled/>
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
       images: [
        '/static/images/app_index1.png',
        '/static/images/app_index2.png',
         '/static/images/app_index1.png',
        '/static/images/app_index2.png',

        // 'https://img.yzcdn.cn/vant/apple-1.jpg',
        // 'https://img.yzcdn.cn/vant/apple-2.jpg'
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
             path:"home"
           })
        }
        if(index == 2){
           this.$router.push({
             path:"intent"
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
    .workflowBg {
      height: 100%;
      background-image: url(../../../static/images/bg_workflow.png);
      background-repeat : no-repeat;
      background-size: 100% 100%;
     padding-bottom: 89%;
      // padding-bottom: 20rem;
      // .echar{
      //   width: 100%;
      //   height: 0%;
      // }
      .workflow-top {
        padding-top: 0.8rem;
        padding-left: 1.8rem;
      }

      .workflow-top-text .top {
        font-size: 2rem;
        color: #ffffff;
        margin-bottom: 1rem;
        height: 30%;
      }

      .workflow-top-text div {
        color: #ffffff;
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
      }

      .button {
        display: block;
        text-align: center;
        line-height: 1.8rem;
        background-color: #fff;
        color: blue;
        margin-left: 1.3rem !important;
        height: 1.8rem;
        border-radius: 10%;
        border: none;
        cursor: pointer;
        border-top-right-radius: 0px;
        font-size: 0.8rem !important;
      }

      .workflow-header {
        text-align: center;
        height: 5%;
        font-size: 1.5rem;
       margin-top: 27%;
       font-weight: 700;
      }
      .headerText{
           font-weight: 700;
      }
      .workflow-content {
        height: 90%;
        display: flex;
        flex-direction: column;
        .workflow-content-step1, .workflow-content-step2, .workflow-content-step3 {
          width: 85%;
          height: 30%;
          text-align: left;
          background-color: #fff;
          margin: 1rem auto;
        }
      }

      .title1 {
        display: flex;
        flex-direction: row;
        margin-top: 1rem;
      }

      .text01 {
        width: 7%;
        font-size: 45px;
        color: #666;
        margin-left: 50px;
      }

      .title {
        width: 48%;
        margin-left: 20px;
        line-height: 45px;
        font-weight: 700;
      }

      p {
        margin-left: 20px;
        font-size: 12px !important;
        line-height: 20px;
        margin-top: 0.3rem;
        color: #7d7878;
      }

      .workflow-content-step3 {
        margin-bottom: 6.9rem;
      }
    }
  }

</style>
