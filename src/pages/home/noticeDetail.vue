<template>
    <div class="notice_detail">
        <div class="detail_top">
            <van-notice-bar left-icon="volume-o"/>
        </div>
        <div class="detail_title">
            {{title}} 
        </div>
        <div class="detail_content">
           {{content}} 
        </div>
    </div>
</template>
<script>
import services from '../../assets/conf/services'
export default{
   data() {
    return {
        data:'',
        title:'',
        content:''
    }
  },
computed: {
    
}, 
mounted(){
    console.dir(this.$route.params.noticeId)
    let tmp={
        notice_id:this.$route.params.noticeId
    }
     this.$http
      .post(services.getNoticeById.getNoticeById,tmp)
      .then(
        res => {
          if (res.data && res) {
            console.dir(res.data)
            this.data=res.data
            this.content=res.data.noticeContent
            this.title=res.data.noticeTitle
            //  this.system_notice_list=res.data
            //进行跳转成功页面
            // 成功后调用服务
            //给父组件传递flag标志，1为关闭当前，打开success。
          } else if (res.data && res.data.resultCode !== "000000") {
            this.$dialog.alert({ message: "服务器调用出错！" });
          }
        },
        res => {
          // error callback
        }
      );
}
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