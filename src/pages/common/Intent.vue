<template>
    <div>
        <div class="pre">
            <div class="phoneNum">
                 <van-row>
                    <van-col span="2" class="phoneIcon">
                          <!-- <van-icon name="phone"/> -->
                          <i class="iconfont icon-shoujihaoma"></i>
                    </van-col>
                    <van-col span="14">
                        <van-field
                            center
                            clearable
                            placeholder="请输入手机号码"
                            use-button-slot
                            v-model="phoneNum"
                            @blur="validatephone(phoneNum)"
                            :error-message="errorMessage"
                        >
                        </van-field>

                    </van-col>
                      <van-col span="8"  v-if="sendValidationCode" >
                          <van-field>
                              <van-button class="getValidate" slot="button" size="small" type="primary" @click="getValidation">获取验证码
                               </van-button>
                          </van-field>
                      </van-col>
                      <van-col span="8" v-if="ifSend">
                             <van-count-down class="timer" format="ss秒后重新发送" :time="time"/>
                      </van-col>
                 </van-row>
            </div>

            <div class="verification">
                 <van-row>
                    <van-col span="2" class="verificationIcon">
                       <i class="iconfont icon-yanzhengma"></i>
                    </van-col>
                    <van-col span="22">
                        <van-field
                            center
                            placeholder="请输入验证码"
                            v-model="verification"
                        >
                        </van-field>
                    </van-col>
                 </van-row>
            </div>
              <van-row class="validation">验证码：{{data}}</van-row>
            <div class="footer">
                 <van-row>
                    <van-col span="24">
                         <van-button  class="btn_next" plain hairline type="primary" size="large" @click="btn_next()">下一步</van-button>
                    </van-col>
                 </van-row>
            </div>
        </div>
    </div>
</template>
<script src="./iconfont.js"></script>
<script>
import services from "../../assets/conf/services";

export default {
         data(){
            return {
                  phoneNum: '',
                  sendValidationCode:true,
                  ifSend:false,
                  time:60 * 1000,
                  errorMessage:'',
                  data:'',
                  verification:'',
                  flag:0
            }

        },
       mounted(){
       },
      methods:{
           /* 手机号码或者电话号码验证 */
        validatephone (value) {
            if (value === '' || value === undefined) {
                this.errorMessage='请输入手机号码'
            return;
            }
            let mobile = /^1[3|4|5|7|8|9]\d{9}$/
            let phone = /^0\d{2,3}-?\d{7,8}$/
            let format = mobile.test(value)
            if (!format) {
             this.errorMessage='手机号格式不正确，请重新输入 '
            return;
            } else {
            this.errorMessage=''
            }
        },
          getValidation(){
                   if(this.errorMessage){
                      this.$dialog.alert({
                        message: '手机号格式不正确，请重新输入'
                        });
                       return;
                   }
                   if(!this.phoneNum){
                       this.$dialog.alert({
                        message: '请重新输入手机号码'
                        });
                       return;
                   }
                      //发送验证码，倒计时
                    this.sendValidationCode=false
                    this.ifSend=true
                    var timetimer =  setInterval(()=>{
                            this.time=this.time-1000;
                            if(this.time<=0){
                                this.sendValidationCode = true;
                                  this.ifSend=false
                                clearInterval(timetimer);
                            }
                        }, 1000);
                         this.time = 60*1000;
                        //调用后台接口，获取验证码
                         let tmp={
                            phoneNum:this.phoneNum
                        }
                        this.$http.post(services.getValidation.getValidation,tmp).then(res => {
                           if (
                            res.data &&
                            res.data.resultCode === "000000" &&
                            res.data.result
                            ) {
                            this.data= res.data.result;
                            } else if (res.data && res.data.resultCode !== "000000") {
                            this.data = '';
                             this.$dialog.alert({ message: '服务调用出错！'});
                            } else if (
                            res.data &&
                            res.data.resultCode === "000000" &&
                            !res.data.result
                            ) {
                            this.data = '';
                            this.$dialog.alert({ message: '无对应的数据！'});

                            }
                        }, res => {
                            this.$dialog.alert({ message: '服务调用出错！'});
                        });
                                    },
         btn_next(){

           if(!this.phoneNum || !this.verification){
              this.$dialog.alert({ message: '请完善表单信息'});
              return;
           }
          //校验验证码
          let tmp ={
               phoneNum:this.phoneNum,
               checkCode:this.verification
          }
          this.$http.post(services.validation.validation,tmp).then(res => {
                if (
              res.data &&
              res.data.resultCode === "000000" && res.data.result && res.data.result !== "000001") {
                    //判断用户是否进行登记过，如果登记过，就展示其之前登记的内容（flag=2）；否则，就直接跳入预约的页面（flag=1）
                  let tmp ={
                    phoneNum:this.phoneNum
                  }
                  this.$http
                  .post(services.getInformationRegistUser.getInformationRegistUser, tmp)
                  .then(res => {
                    if( res.data &&
                      res.data.resultCode === "000000"&&!res.data.result && this.$route.params.flag === 3){
                         this.$dialog.alert({ message: '您还没有登记过，请先登记'});
                       return;
                    }

                    if (
                      res.data &&
                      res.data.resultCode === "000000"&&!res.data.result
                    ) {

                               this.flag=1;
                              //传递标志，1代表立即登记，2代表修改，3代表取消，而是在这里传递当前用户的标识
                            //    let name = {
                            //    flag:1
                            //  }
                            //     sessionStorage.setItem('userflag', JSON.stringify(name));
                                 //传递当前手机号码， //传递标识，flag=1，展示提交按钮
                               this.$router.push({
                                   name: "preRegister",
                                   params:{
                                     phoneNum:this.phoneNum,
                                     flag:1,
                                   }
                                   });

                        } else if (res.data && res.data.resultCode === "000000"&&res.data.result) {
                             sessionStorage.setItem('userInfo', JSON.stringify(res.data.result));
                            if(this.$route.params.flag === 3){
                              let name = {
                                flag:3
                              }
                                  sessionStorage.setItem('userflag', JSON.stringify(name));
                                //取消登记，falg=3
                                this.$router.push({
                                    name: "preRegister",
                                    params:{
                                      phoneNum:this.phoneNum,
                                      flag:3,
                                      id:res.data.result.id,
                                      username:res.data.result.realName,
                                      resultData:res.data.result.questionList
                                    }
                              });
                            }else{
                              let name = {
                                flag:2
                              }
                                  sessionStorage.setItem('userflag', JSON.stringify(name));
                            //用户登记过
                            this.$router.push({
                                    name: "preRegister",
                                    params:{
                                      phoneNum:this.phoneNum,
                                      flag:2,
                                      id:res.data.result.id,
                                      username:res.data.result.realName,
                                      resultData:res.data.result.questionList
                                    }
                              });
                            }


                        }

                //   }else
                   if (res.data && res.data.resultCode !== "000000"){

                      this.$dialog.alert({ message: '服务器调用出错'});
                   // this.$emit('userId',1)
                    }
                  });

            } else if (res.data && res.data.resultCode === "000000" && res.data.result==="000001") {
              this.$dialog.alert({ message: '验证码输入错误，请重新输入！'});
            }else if (res.data && res.data.resultCode !== "000000") {
              this.data = '';
               this.$dialog.alert({ message: '服务调用出错，请重新输入！'});
            }
            }, res => {
                // error callback
            });

         }
          }
      }

</script>
<style lang="less" scoped>
.validation{
  margin-left: 1rem;
  margin-top: 2rem;
}
.van-button--plain.van-button--primary {
    background-color: #3eb4fa;
    color: #fff!important;
}
  .pre{
      width: 90%;
      height: 100%;
      margin-left: 1rem;
       .phoneNum{
      margin-top: 6rem;;
  }
  .phoneIcon,.verificationIcon{
      height: 50px;
      line-height: 50px;
      text-align: center;
       color: #3ebcfa!important;
  }
  .footer{
      margin-bottom: 3rem;
  }
  .btn_next{
      margin-top: 22rem!important;
  }
  .getValidate {
    /* color: #fff; */
    background-color: #fff!important;
    border: 0px!important;
    color: #3ebcfa!important;
}
.verification,.phoneNum{

    border-bottom: 1px solid #e6e6e6;
}
.timer{
      margin-top: 0.8rem;
}

  }

</style>
