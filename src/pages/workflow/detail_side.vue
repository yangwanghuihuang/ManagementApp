<template>
    <div>
        上传故障信息：<br>
       {{fault_content}}
        {{faultUrl}}
         {{start_time}}
          {{end_time}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            fault_content:'123',
            faultUrl:'456',
            start_time:'2020-01-21',
            end_time:'2020-10-10'
        }
    },
}
</script>
<style lang="less" scoped>

</style>