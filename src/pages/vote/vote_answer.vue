<template>
    <div>
        <div class="topStyle">

        </div>
        <div class="answer" v-for="(item, index) in answer_list" :key="index">
           <van-checkbox v-model="checked">{{item.rem}}</van-checkbox> 
             <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"></van-divider>
        </div>
       
    </div>
</template>
<script>
import services from  "../../assets/conf/services"
export default {
    data() {
        return {
            checked: true,
            voteId:'',
            answer_list:[
            {
                id:'1',
                rem:'145263'
            },
            {
                id:'2',
                rem:'jhvuoafbup'
            },
            ]
        }
    },
    mounted() {
         if(this.$route.params.vote_id){
             alert('56464')
             this.voteId=this.$route.params.vote_id
             console.dir(this.voteId)
         }
        let tmp = {
            ex_id:this.voteId
        }
            //请求后台，获取题目对应的试题答案
            this.$http.post(services.getAnswer.getAnswer,tmp).then(
                res => {
                    if (res.data && res) {
                        console.dir(res.data)
                        this.answer_list=res.data
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
.topStyle{
    width: 100%;
    height: 5%;
}
.answer{
    width: 80%;
    margin-left: 2rem;
    padding: 0.8rem;
}
</style>