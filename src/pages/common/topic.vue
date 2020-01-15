<template>
    <div ref="top">
         <div v-for="(item, index) in title_list" :key="index">
           <div class="radioGroup"  v-if="item.queType === '1'">
            <label>{{item.queName}}</label>
            <van-radio-group v-model='item.value'  @change="onChange(item)"  :disabled="enable">
                <van-radio  v-for="(itemLable) in item.optConfList"  :name="itemLable.optId" :key="itemLable.optId">{{itemLable.optValue}}</van-radio>
            </van-radio-group>
        </div>
        <div class="checkboxGroup"  v-if="item.queType === '0'">
            <label>{{item.queName}}</label>
             <van-checkbox-group v-model='item.value' @change="onChange(item)"  :disabled="enable">
                <van-checkbox v-for="(itemLable) in item.optConfList" :key="itemLable.optId" :name="itemLable.optId">{{itemLable.optValue}}</van-checkbox>
            </van-checkbox-group>
        </div>
         </div>

    </div>
</template>
<script>
import services from "../../assets/conf/services";
export default {
    data(){
        return{
             selected_list: [], //
             title_list: [], //         首次进入页面通过接口获取完整的题目以及全部选项
             optResult:'',
              selectedMap: new Map(), // 首次进入页面通过接口获取已选项，并且存入map
            dataMap: new Map(), // 该子组件准备的实时的已选数据，给父组件提供
            enable:false
        }
    },
    props:{
        keyData:{
            type:Array,
            default:[]
        },
        updateEnable:{
            type:Boolean,
            default:false
        }
    },
    methods:{
       onChange(item){
            if (item.queType === '1') {
                let selected_children_list= [];
                selected_children_list.push(item.value);
                // 单选绑定值类型是string，这里变成list，以便与接口统一
                this.dataMap.set(item.queId, selected_children_list); // 如果操作了选项，实时存map
            }
            if (item.queType === '0') {
                this.dataMap.set(item.queId, item.value); // 如果操作了选项，实时存map
            }
       }
    },
    created(){
             this.selected_list = this.keyData;
                for (let i =0; i<this.selected_list.length; i++) {
                   this.selectedMap.set(this.selected_list[i].queId, this.selected_list[i].optConfList);
                 }
    },
    mounted(){
     
        if(this.updateEnable){
            this.enable = true
         
        }
          this.$http.post(services.initInformationRegist.initInformationRegist).then(res => { // 获取完整的题目以及全部选项
            if (res && res.data &&res.data.result && res.data.result.length>0) {
                for (let i =0; i<res.data.result.length; i++) {
                    if (res.data.result[i].queType === '1') {
                        res.data.result[i].value = '';
                  
                        if(this.selectedMap.size!=0){
                           if (this.selectedMap.get(res.data.result[i].queId)[0]) {
                            res.data.result[i].value = this.selectedMap.get(res.data.result[i].queId)[0].optId;
                            let list = [];
                            list.push(res.data.result[i].value);
                            this.dataMap.set(res.data.result[i].queId, list); // 如果刚进来有数据，存一次map
                           }
                        }

                       }
                    if (res.data.result[i].queType === '0') {
                        res.data.result[i].value = [];
                     
                        if(this.selectedMap.size!=0){
                            if (this.selectedMap.get(res.data.result[i].queId) && this.selectedMap.get(res.data.result[i].queId).length !== 0) {
                              for( let j=0;j<this.selectedMap.get(res.data.result[i].queId).length;j++)
                                    res.data.result[i].value.push(this.selectedMap.get(res.data.result[i].queId)[j].optId)

                                }
                            this.dataMap.set(res.data.result[i].queId, res.data.result[i].value); // 如果刚进来有数据，存一次map
                        }
                    }

                }
            }
                this.title_list = res.data.result;
        });
    }
}
</script>
<style lang="less" scoped>
.radioGroup,.checkboxGroup{
        margin-left: 1rem;
}
.checkboxGroup{
    margin-top: 1rem;
}
.van-radio,.van-checkbox{
    margin-top: 1rem;
}
</style>
