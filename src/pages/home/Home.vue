<template>
  <div class="notice">
      <div v-for="(item, index) in system_notice_list" :key="index">
        <div class="itemStyle">
             <div class="left">{{item.response.notice.title}}</div>
             <div class="right"> 
               {{item.response.notice.content}}
               <div class="r_bottom">{{item.response.notice.time}}</div>
             </div>
             
              
        </div>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">公告</van-divider>
      </div>
      
    <tabbar></tabbar>
  </div>
</template>

<script>
 import notice from "../../assets/conf/moke/index.js";
import services from  "../../assets/conf/services"
import tabbar from "../../components/tobbar.vue"; //引用组件的地址
export default {
  components: {
    tabbar: tabbar
  },
  data() {
    return {
      height: {
        height: ""
      },
      system_notice_list:[]
    };
  },
  created() {},
  computed:{
    // system_notice_list() {
    //     return notice.system_notice_list
    //     console.dir(notice.system_notice_list)
    //   },
  },
  mounted() {
     //提交用户登记的信息
    this.$http
      .post(services.moke.getNotice)
      .then(
        res => {
          if (res.data && res) {
             this.system_notice_list=res.data
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
  },
  methods: {
    skipToDetail() {
      this.$router.push({ path: "workflow" });
    }
  }
};
</script>
<style lang="less" scoped>
.notice{
  width: 100%;
  height: 100%;
  .left{
    width: 50%;
    height: 100%;
    float: left;
    font-size: 25px;
    margin-left: 2rem;
    text-align: left;
  }
  .right{
     float: left;
      width: 28%;
      padding-top: 3rem;
    margin-top: 2rem;
    height: 100px;
    padding-left: 1.3rem;
    .r_bottom{
      margin-top: 3.5rem;
      font-size: 10px;
    }
  }
  .left,.right{
    padding-top: 2rem;
    margin-top: 2rem;
    height: 100px;
  }
}
</style>
