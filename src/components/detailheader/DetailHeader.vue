<template lang="html">
  <header class="detailheader">
    <div class="menu" @click="goBack">
      <van-icon name="arrow-left"></van-icon>
    </div>
    <div class="nickname">
      <h1 :nickname="nickname">{{nickname}}</h1>
    </div>
    <div class="share" @click="sharePerson">
      <van-icon name="weapp-nav"></van-icon>
    </div>
  </header>
</template>

<script>
  import VueRouter from '../../router/routes.js'

  export default {
    props: {
      // nickname: {
      //   type: String
      // }
    },
    data(){
        return{
          nickname:'物业管理'
        }
    },
    watch:{
      '$route':'getPath'
    },
    methods: {
        getPath(){
          if(this.$route.path === '/predealapp/workflow'){
            this.nickname =  "业务办理流程"  
          }else if(this.$route.path === '/predealapp/home'){
            this.nickname =  "物业管理"    
          }else if(this.$route.path === '/predealapp/policy'){
             this.nickname =  "携号转网政策"  
          }else if(this.$route.path === '/predealapp/problem'){
             this.nickname =  "问题反馈"  
          }else{
             this.nickname =  "个人信息"    
          }
           
          
        },
      goBack () {
        window.history.back(-1); 
      },
      sharePerson () {
        alert('分享功能待完善！');
      }
    }
  }
</script>

<style lang="less">
  @header-height:46px;
  @icon-font-size:22px;
  @title-font-size: 18px;
  @baseBorderColor:#3B3B3B;

  .detailheader {
    position: fixed;
    display: flex;
    width: 100%;
    height: @header-height;
    background: #D8D8D8;
    text-align: center;
    line-height: @header-height;
    box-shadow: 0 2px 10px #D8D8D8;
    top:0;
    left: 0;
    z-index: 10;
    .menu {
      flex: 0 0 @header-height;
      font-size: @icon-font-size;
    }
    .nickname {
      flex: 1;
      font-size: @title-font-size;
      
    }
    h1{
      font-size: 1.3rem!important;
    }
    .share {
      flex: 0 0 @header-height;
      font-size: @icon-font-size;
    }

  }
</style>
