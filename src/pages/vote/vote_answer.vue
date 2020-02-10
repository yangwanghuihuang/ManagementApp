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
export default {
    data() {
        return {
            checked: true,
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