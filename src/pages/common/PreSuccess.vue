<template>
    <div class="success">
        <div class="header">             
              <i class="iconfont icon-icon_chenggong iconSuccess"></i>
               <h4 id="title"  class="successText">携号转网意向登记成功</h4>       
        </div>
        <div class="successContent">
             <p>您携号转网携入移动意向登记已成功，感谢您的信任与支持！如需获得更多帮助，请联系10086客服。</p>
        </div>
        <div class="footer">
           
               <van-button plain hairline type="primary" size="large" class="btn_back"  @click="btn_back()"> <span class="back">返回</span></van-button>

                <van-count-down class="ms" format="(ss秒)" :time="time" @finish="finish()"/>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            time:5*1000
        }
    },
    created(){
    },
    methods:{
        btn_back(){
            //3s后返回首页，并且倒计时消失
            this.$router.push({ path: "home"});
        },
        finish(){
              this.$router.push({ path: "home"});
        },
    }
}
</script>
<style lang="less" scoped>
.success{
    width: 100%;
    height: 100%;
 .header{
     width: 100%;
     height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .successText{
        width: 80%;
        height: 3rem;
    line-height: 3rem;
    font-size: 1.5rem;
        margin-left: 0.2rem;
    }
}
.successContent{
    width: 100%;
    height: 60%;
      color: black!important;
     line-height: 2rem;
     font-size: 1rem;

}
.footer{
      width: 90%;
    height: 20%;
    position: relative;
    margin-left: 5%;
    .back{
            position: absolute;
            top: -1px;
            left: 41%;
            
    }
    .ms{
     position: absolute;
     top: 14px;
      left: 52%;
     color: #fff!important
  }
}
.iconSuccess{   
      width: 9%;
      height: 3rem;
      line-height: 3rem;
      padding-left: 10%;
 }
 .iconfont {
    color: green;
    font-family: "iconfont" !important;
    font-size: 32px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
 p{
     color: black!important;
     font-size: 1rem;
     line-height: 2rem;
     margin: 0 2rem;
     margin-top: 1.5rem;
 }

 .van-button--plain.van-button--primary {
    background-color: #3eb4fa;
    color: #fff!important;
}

}
</style>
