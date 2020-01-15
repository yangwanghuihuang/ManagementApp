<template>
	<div class="app">
		<detail-header></detail-header>
		<router-view class="content"></router-view>
	</div>
</template>

<script>
import DetailHeader from 'components/detailheader/DetailHeader.vue'

	export default {
		data () {
			return {
			}
		},
		components: {
			"detail-header": DetailHeader,
	  }
	}
</script>

<style lang="less">
	.app{
		height: 100%;
    .content{
      height: 100%;
      margin-top: 48px;
    }
	}
</style>
