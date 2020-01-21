<template>
    <div class="notice_detail">
        <div class="detail_top">
            <van-notice-bar :text="text" left-icon="volume-o"/>
        </div>
        <div class="detail_title">123456
            <!-- {{notice.title}} -->
        </div>
        <div class="detail_content">
            popopopddsfghjhtjklktryuhkjlkyukhlktry<br>tjhkj,.rhjhj,etygjkhjtygjkh
            <!-- {{notice.content}} -->
        </div>
    </div>
</template>
<script>
export default{
   data() {
    return {
        text:'inubfuy'
    }
  },
computed: {
    
}, 
}

</script>
<style lang="less" scoped>
   .notice_detail{
       width: 100%;
       height: 100%;
      background-image: url(../../../static/images/bg_workflow.png);
      background-repeat : no-repeat;
      background-size: 100% 100%;
       .detail_title{
           width: 100%;
           height: 20%;
           margin-bottom: 1rem;
           font-size: 25px;
           font-weight: 700;
           text-align: center;
           padding-top: 4rem;
        }
       .detail_content{
           padding-left: 1rem;
           padding-right: 1rem;
           text-indent: 2rem;
           font-size: 1rem;
           height: 2rem;
           line-height: 2rem;
        }
   }
</style> 