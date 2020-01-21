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
                   <option class="opt" v-for="(item) in option1" :key="item.value" value="item.value">{{item.text}}</option>       
              </select>
            </div>
        </div>
        <div class="problemContent">
            <van-cell-group>
                <van-field class="problemInput" type="textarea"  autosize placeholder="请输入您的反馈内容（不得超过200字）" maxlength="5"/>
            </van-cell-group>
        </div>
        <div class="problemPicture">
            <div class="textPic">图片<span class="text1">(选填，提供问题图片)</span><span class="text2"><span class="currentNum">0</span><span class="total">/1</span></span></div>
            <van-uploader v-model="fileList" preview-image multiple class="uploadPicture" preview-size="100px">
               <van-button class="picture" icon="photograph" type="info"></van-button>
            </van-uploader>
        </div>
          <div class="problemTime">
            <van-cell is-link @click="showPopup">请选择上传时间：</van-cell>
            <van-popup v-model="show">
              <van-datetime-picker
                v-model="currentDate"
                type="date"
                :min-date="minDate"
                :max-date="maxDate"
                @confirm="zhanshi()"
              />
            
            </van-popup>
             <van-field v-model="dateTime" placeholder="请输入用户名" />
        </div>
        <div class="problemBtn">
              <van-button  class="btn_next" plain hairline type="primary" size="large" @click="btn_next()">提交</van-button>
        </div>
    </div>
</template>
<script>
export default {
     data() {
    return {
      option1: [
        { text: '故障类型', value: 0 },
        { text: '类型一', value: 1 },
        { text: '类型二', value: 2 }
      ],
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      dateTime:'',
        show: false,
       fileList: [
        // { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
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
    zhanshi(){
     console.dir(this.currentDate) 
     this.show = false
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