<template>
  <div class="www">
    <div id="main" :option="option"></div>
    <div class="workflowBg">
        <div class="workflow-top">
            <div class="workflow-top-text">
                <div class="top">重磅好消息！</div>
                    <div>携号转网要来了！</div>
                <div>您的手机终于要自由了！</div>
                <div>不再被运营商锁住！</div>
            </div>
        <van-button class="button" type="primary" @click="skip2intent()">立即登记</van-button>
        </div>
        <div class="workflow-header">
            <div class="headerText">携号转网办理流程</div>
        </div>
        <div class="workflow-content">
            <div class="workflow-content-step1">
                <div class="title1">
                    <span class="title">资格查询</span>
                    <div class="text01">01</div>

                </div>

                <p>编辑短信“CXXZ#姓名#证件号码”发送至归属<br>运营商，电信10001、联通10010、移动10086，<br>查询是否符合携转条件。</p>
            </div>
            <div class="workflow-content-step2">
                <div class="title1">
                    <span class="title">授权码申请</span>
                <div class="text01">02</div>

                </div>
                <p>编辑短信“SQXZ#姓名#证件号码”<br>发送到归属运营商，电信10001、<br>联通10010、移动10086，获取携<br>转授权码。</p>
            </div>
            <div class="workflow-content-step3">
                <div class="title1">
                    <span class="title">营业厅办理</span>
                <div class="text01">03</div>

                </div>
                <p>带上身份证和授权码到要转入的<br>运营商营业厅办理（授权码有效<br>时间1小时）</p>

            </div>

        </div>
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
      option: {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 50]
            }]
        },
    }
  },
    mounted(){
       const echart=echarts.init(document.getElementById('main'));
       echart.setOption(this.option)
    },
    components: {
    'tabbar': tabbar
  },
    methods:{
          skip2intent(){
        this.$router.push({ path: "intent"});
      },
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
      #main{
        @media screen {
          width:360px;
          height:200px;
        }
      }
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
