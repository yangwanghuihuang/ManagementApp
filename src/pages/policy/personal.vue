<template>
     <div>
        <div class="top">
             <div class="left">
                <img src="../../../static/images/bg.png" width="100px" height="100px"/>
             </div>
             <div class="right">
                 <h2>户主名</h2>
                 <div>微信号：</div>
             </div>
        </div>
       <div class="per_content">
           <van-cell-group>
            <van-field
                v-model="area"
                label="房租面积"
                disabled
            />
            <van-field
                value="输入框已禁用"
                label="户型"
                 disabled
            />
            <van-field
                value="输入框已禁用"
                label="是否有车位"
               disabled
            />
            <van-field
                value="输入框已禁用"
                label="存车类型"
                disabled
            />
            </van-cell-group>
       </div>
        <tabbar></tabbar>
    </div>
</template>
<script>
import tabbar from "../../components/tobbar.vue";  //引用组件的地址
export default {
    components: {
    'tabbar': tabbar
  },
  data(){
      return {
           area:'50平',
      }
  },
  methods:{
    
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
</script>
<style lang="less" scoped>
.top{
    overflow-x: hidden;
    height: 150px;
    .left{
        margin: 1rem;
        float: left;
        height: 50px;
        line-height: 50px;
    }
    .right{
        float: left;
        margin-left:1.5rem;
        margin-top: 1rem;
         height: 50px;
          line-height: 50px;
          h2{
              font-weight: 700;
              font-size: 1.5rem;
          }
    }
   
}
.van-button--danger {
    color: #fff!important;
    background-color: #fff!important;
    border: 1px solid #fff!important;
}
</style>
