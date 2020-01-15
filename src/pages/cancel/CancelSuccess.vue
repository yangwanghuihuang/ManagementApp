<template>
    <div class="success">
        <div class="header">             
              <i class="iconfont icon-icon_chenggong iconSuccess"></i>
               <h4 id="title"  class="successText">取消登记成功</h4>       
        </div>
        <div class="successContent">
             <p>您已取消意向登记，感谢您对携号转网的支持与关注。</p>
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
       margin-left: 0.2rem;
        width: 80%;
        height: 3rem;
    line-height: 3rem;
    font-size: 1.5rem;
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
      padding-left: 29%;
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
