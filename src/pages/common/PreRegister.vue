<template>
    <div>
        <div class="register">
            <div class="registerContent">
                 <van-row class="row1">
                     <van-col span="2"  class="phoneIcon">
                             <i class="iconfont icon-shoujihaoma"></i>
                     </van-col>
                      <van-col span="22">
                           <van-field
                            center
                            clearable
                            v-model="serviceNum"
                            :disabled="ifUpdatewww? 'true':'updateEnable'"
                        >
                        </van-field>
                      </van-col>
                 </van-row>
                  <van-row  class="row2">
                     <van-col span="2"  class="phoneIcon">
                             <i class="iconfont icon-yonghuming"></i>
                     </van-col>
                      <van-col span="22">
                           <van-field
                            center
                            clearable
                            placeholder="请输入用户名"
                           v-model="username"
                           :disabled="updateEnable"
                        >
                        </van-field>
                      </van-col>
                 </van-row>
                 <van-row>
                     <van-col>
                         <!-- 引入答题子组件 -->
                        <common-topic :updateEnable="updateEnable" v-if="(queData && queData.length>0) || this.ifData" ref="topic" :keyData="queData"></common-topic>
                     </van-col>
                 </van-row>
            </div>
            <!-- 如果有数据，则是修改和取消按钮；若没数据，则是提交按钮 -->
            <div class="footer" v-if="ifCommit">
                    <van-button class="btn_submit" plain hairline type="primary" size="large" @click="submit()">提交</van-button>
            </div>
            <div class="footer" v-if="ifUpdate">
                    <van-button plain hairline type="primary" size="large" class="updateRegister" @click="updateRegister()">修改登记</van-button>
                    <!-- <van-button plain hairline type="primary" size="large" class="cancelRegister">取消登记</van-button> -->
            </div>
             <div class="footer" v-if="ifCancel">
                    <!-- <van-button plain hairline type="primary" size="large" class="updateRegister" @click="updateRegister()">修改登记</van-button> -->
                    <van-button plain hairline type="primary" size="large" class="cancelRegister" @click="cancelRegister()">取消登记</van-button>
            </div>



        </div>
    </div>
</template>
<script>
  import commonTopic from './topic.vue'
  import services from "../../assets/conf/services";
export default {

    data(){
        return {
            ifCommit:true,
            ifUpdate:false,
            ifCancel:false,
            id:'',
            serviceNum:'',
            ifShowIntent:false,
            dataMap:new Map(),
            username:'',
            queData:[],
            ifData:false,
            updateEnable:false,
            userInfo:'',
            userflag:null,
          ifUpdatewww: true
        }
    },
    components:{
      "common-topic":commonTopic,
    },
    methods:{
           submit(){

                if(!this.username){
                    this.$dialog.alert({ message: '请输入姓名！'});
                    return;
               }
                if(this.$refs.topic.dataMap.size === 0 || this.$refs.topic.title_list.length !== this.$refs.topic.dataMap.size){

                   this.$dialog.alert({ message: '请完成答题！'});
                      return;
                }
                   if (this.$refs.topic.dataMap) {
                        let data = [];
                        this.$refs.topic.dataMap.forEach(function(value,key){
                        let tmp = {queId: key, optIdList: value};
                        data.push(tmp);
                        });

                    let tmp = {
                        realName: this.username,
                        phoneNum: this.serviceNum,
                        queAndOpt: JSON.stringify(data)
                    };
                         //提交用户登记的信息
                            this.$http.post(services.addAndUpdateRegistUser.addAndUpdateRegistUser,tmp).then(res => {
                            if ( res.data &&res.data.resultCode === "000000") {
                                 this.$router.push({ path: "PreSuccess"});
                            //进行跳转成功页面
                            // 成功后调用服务
                            //给父组件传递flag标志，1为关闭当前，打开success。
                            } else if (res.data && res.data.resultCode !== "000000") {
                            this.data = [];
                              this.$dialog.alert({ message: '服务器调用出错！'});
                            }
                            }, res => {
                            // error callback
                            });


                    }
           },
           updateRegister(){
                if(!this.username){
                    this.$dialog.alert({ message: '请输入姓名！'});
                    return;
               }
                if(this.$refs.topic.dataMap.size === 0 || this.$refs.topic.title_list.length !== this.$refs.topic.dataMap.size){

                     this.$dialog.alert({ message: '请完成答题！'});
                      return;
                }

              let data = [];
                    this.$refs.topic.dataMap.forEach(function(value,key){
                        let tmp = {queId: key, optIdList: value};
                        data.push(tmp);
                    });
                     for(let i=0;i<data.length;i++){

                        if(data[i].optIdList.length === 0 ){
                          this.$dialog.alert({ message: '请完成答题！'});
                            return;
                        }
                    }
              let tmp = {
                        realName: this.username,
                        phoneNum: this.serviceNum,
                        queAndOpt: JSON.stringify(data),
                        id:this.id
                    };
                       //提交用户修改登记的信息
                            this.$http.post(services.addAndUpdateRegistUser.addAndUpdateRegistUser,tmp).then(res => {
                            if ( res.data && res.data.resultCode === "000000") {

                                    //跳转成功界面
                                    this.$router.push({ path: "updateSuccess"});
                                } else if (res.data && res.data.resultCode !== "000000") {
                                this.data = [];
                                this.$dialog.alert({ message: '服务器调用出错！'});
                                }
                            }, res => {
                            // error callback
                            });
           },
           cancelRegister(){
               //调用后台接口，删除该记录
                let tmp={
                id:this.id
                }
                this.$http
                  .post(services.cancelRegistUser.cancelRegistUser, tmp)
                  .then(res => {
                  if (
                      res.data &&
                      res.data.resultCode === "000000"
                    ) {

                        //跳转到取消页面
                         this.$router.push({ path: "cancelSuccess"});
                    } else if (res.data && res.data.resultCode !== "000000") {
                      this.data = [];
                      this.$dialog.alert({ message: '服务器调用出错！'});
                    }
                  });
           }
    },
    mounted(){
        this.userInfo =  JSON.parse(sessionStorage.getItem('userInfo'));
        this.userflag = JSON.parse(sessionStorage.getItem('userflag'))
            this.serviceNum= this.$route.params.phoneNum;
       //路由传递

      if(this.$route.params.phoneNum){
            this.serviceNum= this.$route.params.phoneNum;
            this.username = this.$route.params.username;
             if(this.$route.params.flag ===1 ){

                this.ifData = true
                this.ifCommit = true;
                this.ifUpdate = false;
                this.ifCancel = false
            }
           if(this.$route.params.flag === 2)  {
                 this.queData= this.$route.params.resultData
            this.id = this.$route.params.id
            //还需要判断是不是刷新或者箭头回来的，如果是，需要在session中获取该用户数据（可以用id的有无来判断 ）
             this.ifCommit = false;
             this.ifUpdate = true;
              this.ifCancel = false;
           }
           if(this.$route.params.flag === 3)  {
           this.queData= this.$route.params.resultData
            this.id = this.$route.params.id
             this.ifCommit = false;
             this.ifUpdate = false;
             this.ifCancel = true
             this.updateEnable=true

         }
      }else{

          if( this.userInfo && this.userflag){
               this.username = this.userInfo.realName;
               this.queData = this.userInfo.questionList;
               this.serviceNum = this.userInfo.phoneNum;
               this.id=this.userInfo.id;

               if(this.userInfo && this.userflag &&  this.userflag.flag === 1)  {
                     this.ifCommit = true;
                     this.ifUpdate = false;
                     this.ifCancel = false
                }
               if(this.userInfo && this.userflag &&  this.userflag.flag === 2)  {
                    this.ifCommit = false;
                    this.ifUpdate = true;
                    this.ifCancel = false
                }
                if(this.userInfo && this.userflag &&  this.userflag.flag === 3)  {
                    this.ifCommit = false;
                    this.ifUpdate = false;
                    this.ifCancel = true
                    this.updateEnable=true
                }
          }
      }
    }
}
</script>
<style lang="less" scoped>
.register{
  width: 100%;
  height: 100%;
  .registerContent{
    margin-top: 20%;
    height: 90%;
    width: 100%;
    .phoneIcon{
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #3ebcfa!important;
    }
  }
  .footer{
       width: 90%;
    height: 10%;
    padding: 1rem;
    // .btn_submit{
    //    margin: 3rem 2rem 3rem 2rem !important;
    // }
    // .updateRegister,.cancelRegister{
    //  margin: 3rem 2rem 3rem 2rem !important;
    // }

  }
 

.van-button--plain.van-button--primary {
    background-color: #3eb4fa;
    color: #fff!important;
}
 .row1,.row2{
     border-bottom: 1px solid #e6e6e6;
     margin-left: 1rem;
     margin-right: 1rem;
     margin-bottom: 2rem;
 }
// .updateRegister,.cancelRegister{
//     margin: 3rem 2rem 3rem 2rem !important;
// }
// .van-button--large {
//      margin-left: 2rem;
//     width: 83%!important;
// }

}

</style>
