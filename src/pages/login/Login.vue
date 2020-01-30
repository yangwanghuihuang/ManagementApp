<template>
   <div class="loginPage">
      <div class="registerContent">
                 <van-row class="row1">
                     <van-col span="2"  class="phoneIcon">
                             <i class="iconfont icon-shoujihaoma"></i>
                     </van-col>
                      <van-col span="22">
                           <van-field
                            center
                            clearable
                            placeholder="请输入用户名"
                            v-model="serviceNum"
                        >
                        </van-field>
                      </van-col>
                 </van-row>
                  <van-row  class="row2">
                     <van-col span="2"  class="phoneIcon">
                             <i class="iconfont icon-yonghuming"></i>
                     </van-col>
                      <van-col span="22">
                        <van-password-input
                          v-model="password"
                          info="请输入密码且密码为 6 位数字"
                          :focused="showKeyboard"
                          @focus="showKeyboard = true"
                        />
                        <van-number-keyboard
                            :show="showKeyboard"
                            @input="onInput"
                            @delete="onDelete"
                            @blur="showKeyboard = false"
                          />
                      </van-col>
                 </van-row>
                 <van-row class="footer">
                    <van-button class="btn_submit" plain hairline type="primary" size="large" @click="login()">提交</van-button>
                 </van-row>
            </div>
  </div>
</template>
<<script>
import services from  "../../assets/conf/services"
export default {
    data(){
        return{
            serviceNum:'',
            password:'',
            showKeyboard: true,
            mask:false
        }
    },
    methods:{
      onInput(key) {
      this.password = (this.password + key).slice(0, 6);
    },
    onDelete() {
      this.password = this.password.slice(0, this.password.length - 1);
    },
        login(){
            // if(){
                //校验通过
             let access_token = '45798564';
             //将token存入缓存
             this.$store.commit('user/access_token',access_token)
             let tmp={
                Eh_number:this.serviceNum,
                password:this.password
             }
             console.dir(tmp)
              this.$http
                  .post(services.getLoginInfo.getLoginInfo,tmp)
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



              this.$router.push({ name: 'home' })
            // }else{
            //      this.$dialog.alert({ message: '服务器调用出错！'});
            // }
            
              
        }
    }
}
</script>
<style lang="less" scoped>
.loginPage{
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

}

</style>