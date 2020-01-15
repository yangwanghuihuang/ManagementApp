<template>
  <div>
    <van-tabbar v-model="active" inactive-color="#777777" active-color="#000000">
    <van-tabbar-item v-for="(item,index) in tabbars" :key="index" :to="(item.name)">
      <span>{{item.title}}</span>
      <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal" />
    </van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "tabbar",
   data () {
      return {
      active: 0,
      tabbars: [
        {
          name: "home",
          title: "首页",
          normal:
            "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-fx2.png",
          active:
            "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-fx.png"
        },
        {
          name: "personal",
          title: "学习",
          normal:
            "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-xx.png",
          active:
            "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-xx2.png"
        },
        {
          name: "workflow",
          title: "我的",
          normal:
            "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-wd.png",
          active:
            "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-wd2.png"
        }
      ]
      }
    },
    created() {
       if (this.$route.name == "home") {
      this.active = 0;
    } else if (this.$route.name == "personal") {
      this.active = 1;
    } else if (this.$route.name == "workflow") {
      this.active = 2;
    }
    },
      mounted(){
      
    },
    methods:{
     
    }
  }
</script>
<style lang="less" scoped>
 
</style>
