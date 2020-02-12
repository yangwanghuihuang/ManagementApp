<template>
    <div class="vote_style">
        <div class="blank_style"></div>
        <div v-for="(item, index) in vote_list" :key="index">
        <div class="item">
             <div class="item_style" @click="getAnswer(item.id)">{{item.rem}}</div>
        </div>
        <!-- <van-action-sheet v-model="show" :title="title"  :actions="actions" @select="onSelect" /> -->
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">题目</van-divider>
      </div>
    </div>
</template>
<script>
import services from  "../../assets/conf/services"
export default {
    data() {
        return {
            vote_list:[
                {
                    id:'1',
                    rem:'12345649'
                },
                {
                    id:'2',
                    rem:'456456456'
                }
            ]
        }
    },
    methods:{
        mounted() {
            //请求后台，获取题目
            this.$http.post(service.getVoteInfo.getVoteInfo).then(
                res => {
                    if (res.data && res) {
                        console.dir(res.data)
                        this.vote_list=res.data
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
        getAnswer(value){
            if(value === '1'){
                //传递当前问卷的id
                console.dir(value)
                this.$router.push({
                     name: "voteAnswer",
                     params:{
                         vote_id:value
                          }
                      });
            }
           
        }
    }
}
</script>
<style lang="less" scoped>
.vote_style{
    width: 100%;
    height: 100%;
    .blank_style{
      width: 100%;
      height: 5%;
    }
    .item{
        width: 100%;
        height: 20%;
        padding-top: 1rem;
        .item_style{
            width: 80%;
            background-color: pink;
            text-align: left;
            margin-left: 1rem;
        }
    }
}
</style>