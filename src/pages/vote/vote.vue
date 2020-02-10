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
export default {
    data() {
        return {
            vote_list:[
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
    methods:{
        mounted() {
            //请求后台，获取题目

        },
        getAnswer(value){
            if(value === '1'){
                this.$router.push({ path: "voteAnswer" });
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