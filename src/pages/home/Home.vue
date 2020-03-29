<template>
  <div class="notice">
      <div v-for="(item, index) in system_notice_list" :key="index">
    
        <div class="itemStyle">
             <div class="left"  @click="itemStyle(item.notice_id)">{{index+1}}</div>
             <div class="right"> 
               {{item.noticeTitle}}
               <div class="r_bottom">{{item.noticeContent}}</div>
             </div>
        </div>
        <van-action-sheet v-model="show" :title="title"  :actions="actions" @select="onSelect" />
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">公告</van-divider>
      </div>
      
    <tabbar></tabbar>
  </div>
</template>

<script>
import services from  "../../assets/conf/services"
import tabbar from "../../components/tobbar.vue"; //引用组件的地址
export default {
  components: {
    tabbar: tabbar
  },
  data() {
    return {
      noticeId:'1',
      height: {
        height: ""
      },
       show: false,
      actions: [
        { name: '公告详情',color: '#07c160',id:'1'},
        { name: '发布时间',disabled: true, subname: '2020-01-01',color: '#07c160' }
      ],
      title:'',
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
      .post(services.getMenu.getMenu)
      .then(
        res => {
          if (res.data && res) {
            console.dir(res.data)
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
    itemStyle(index){
      this.noticeId=index
      this.show = true
      this.use=true
      this.title='标题'
    },
     onSelect(item) {
      // 默认情况下，点击选项时不会自动关闭菜单
      // 可以通过 close-on-click-action 属性开启自动关闭
      console.dir(this.noticeId)
      item.id=this.noticeId
      this.show = false;
      this.$router.push({
         name: "noticeDetail" ,
         params:{
            noticeId:item.id
         }        
         });
    },
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
   .itemStyle{
       width: 100%;
       height: 30%;
       display: flex;
       flex-direction: row;
       .left{
          width: 50%;
          // height: 30%;
    
           font-size: 25px;
          margin-left: 2rem;
          padding-top: 2rem;
          text-align: left;
        }
        .right{
            width: 28%;
            
         padding-top: 2rem;
          //  margin-top: 2rem;
          // height: 100px;
          padding-left: 1.3rem;
          .r_bottom{
            margin-top: 3.5rem;
            font-size: 10px;
            padding-bottom: 1rem;
          }
        }
   }
}
</style>
