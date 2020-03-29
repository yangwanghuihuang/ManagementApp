<template>
    <div class="problemBack">
        <div class="problemType">
            <!-- <div class="problemInput">
                <van-cell-group>
                     <van-field v-model="option1.text" placeholder="请选择问题类型"/>
                </van-cell-group>
            </div> -->
            <div class="problemMenu">
              <!-- <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1"/>
              </van-dropdown-menu> -->
              <!-- <span>^</span> -->
              <select  class="menu">
                   <option class="opt" v-for="(item) in option1" :key="item.value" :optValue="item.value">{{item.text}}</option>       
              </select>
            </div>
        </div>
        <div class="problemContent">
            <van-cell-group>
                <van-field class="problemInput" type="textarea"  v-model="content" autosize placeholder="请输入您的反馈内容（不得超过200字）" maxlength="5"/>
            </van-cell-group>
        </div>
        <div class="problemPicture">
            <div class="textPic">图片<span class="text1">(选填，提供问题图片)</span><span class="text2"><span class="currentNum">0</span><span class="total">/1</span></span></div>
            <van-uploader v-model="fileList" preview-image multiple class="uploadPicture" preview-size="100px">
               <van-button class="picture" icon="photograph" type="info"></van-button>
            </van-uploader>
        </div>
          <div class="problemTime">
            <van-cell is-link @click="showPopup()">请选择开始时间：</van-cell>
            <van-popup v-model="show"  label="离开时间" position="bottom" :overlay="true">
              <van-datetime-picker
                v-model="currentDate"
                type="datetime"
                 @cancel="cancel()"
                @confirm="show = false"
                   @change="startTimeChange"
              />
            </van-popup>
            <van-field  v-model="dateTime" placeholder="开始日期" />
            <hr>
            <van-cell is-link @click="showPp()">请选择结束时间：</van-cell>
             <van-popup v-model="showP"  label="离开时间" position="bottom" :overlay="true">
              <van-datetime-picker
                v-model="currentDate_end"
                type="datetime"
                 @cancel="cancelP()"
                @confirm="showP = false"
                   @change="endTimeChange"
              />
             </van-popup>
            <van-field v-model="endTime" placeholder="结束日期" />
        </div>
        <div class="problemBtn">
              <van-button  class="btn_next" plain hairline type="primary" size="large" @click="btn_next()">提交</van-button>
        </div>
    </div>
</template>
<script>
import services from  "../../assets/conf/services"
export default {
     data() {
    return {
      option1: [
        { text: '故障类型', value: 0 },
        { text: '未解决', value: 1 },
        { text: '已解决', value: 2 }
      ],
      optValue:'',
      showP:false,
      currentDate_end:'',
      // minDate: new Date(2020, 0, 1),
      // maxDate: new Date(2025, 10, 1),
      currentDate:'',
      dateTime:'',
      endTime:'',
      content:'',
      show: false,
       fileList: [
         { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // // Uploader 根据文件后缀来判断是否为图片文件
        // // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: 'https://cloud-image', isImage: true }
      ]
    }
  },
  methods:{
     showPopup() {
      this.show = true;
    },
    showPp(){
      this.showP = true;
    },
   cancelP(){
      this.showP = false;
   },
    cancel(){
      this.show =false
    },
    startTimeChange(e){
        let endTimeArr = e.getValues();//["2019", "03", "22", "17", "28"]
        this.dateTime = `${endTimeArr[0]}-${endTimeArr[1]}-${endTimeArr[2]}  ${endTimeArr[3]}:${endTimeArr[4]}:00`
    },
     endTimeChange(e) {
        let endTimeArr = e.getValues();//["2019", "03", "22", "17", "28"]
        this.endTime = `${endTimeArr[0]}-${endTimeArr[1]}-${endTimeArr[2]}  ${endTimeArr[3]}:${endTimeArr[4]}:00`
      },
    btn_next(){
       for (let i = 0; i < this.option1.length; i++) {
         this.optValue=this.option1[i].value
       }
       let tmp={
         faultPicture:this.fileList,
         fault_content:this.content,
         is_solve:this.optValue,
        start_time:this.dateTime,
        end_time:this.endTime
       }
       this.$http
      .post(services.setProblemInfo.setProblemInfo,tmp)
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
    }
  }
}
</script>
<style lang="less">
  .problemBack{
      width: 100%;
      height: 100%;
      .problemType{
          width: 100%;
          height: 10%;
          display: flex;
          flex-direction: row;
          margin-bottom: 1rem;
          border-top: 1px solid #666;
          .problemMenu{
              width: 95%;
              height: 100%;
              position: relative;
              margin-top: 1rem;
              margin-left: 6%;
              .opt::-ms-expand{ display: none; }
              .opt{
                  -moz-appearance:none; /* Firefox */
                  -webkit-appearance:none; /* Safari 和 Chrome */
                  appearance:none;
              }
              /* --背景色字体颜色--*/
              .opt:hover{
                cursor: pointer;
                  color:#fff;
                  background-color:rgb(238, 240, 241);
              }

              .menu{
                width: 95%;
                height: 50%;
                border: 1px solid  #dad6d6;
              }     
          }
      }
        .problemContent{
          width: 90%;
          height: 30%;
         margin-left: 5%;
         margin-right: 10%;
          margin-bottom: 10%;
          .problemInput{
              background-color: #eae9e9;
              height: 200px;
          }
      }
        .problemPicture{
          width: 100%;
          height: 40%;
          position: relative;
          margin-bottom: 10%;
          overflow:auto;
          span{
              color: #666;
          }
          .text1{
              margin-left: 1rem;
          }
           .text2{
              margin-left: 29%;
          }
          .textPic{
              margin-left: 5%;
              margin-bottom: 5%;
              .currentNum{
                color: #3eb4fa;
              }
          }
          .uploadPicture{
              float: left;
              margin-left: 5%;
          }
          .picture{
              margin-top: 3%;
               margin-left: 5%;
               background-color: #eae9e9;
               width: 100px;
               height: 100px;
               color: #666;
          }
          .van-button__icon {
            max-width: 47em;
            font-size: 2.2em;
            line-height: inherit;
            vertical-align: top;
        }
      }
        .problemBtn{
            margin-left: 5%;
          height: 10%;
          padding-top: 10%;
            width: 90%;
          .van-button--plain.van-button--primary {
                background-color: #3eb4fa;
                color: #fff!important;
            }
      }
  }

</style>