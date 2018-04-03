<template>
    <div id="app">
		<el-container style="height: 100vh; border: 1px solid #eee">
		  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
			  <el-menu
			  :default-active="activeIndex2"
			  class="el-menu-vertical-demo"
			  @select="handleSelect"
			  >
			  <el-menu-item index="/">	    
				<i class="el-icon-menu"></i>
				<span slot="title">项目首页</span>		   
			  </el-menu-item>
			  <el-menu-item index="Echarts">
				<i class="el-icon-document"></i>
				<span slot="title">Echarts</span>
			  </el-menu-item>
			  <el-menu-item index="GDMap">
				<i class="el-icon-location"></i>
				<span slot="title">高德地图</span>
			  </el-menu-item>
			  <el-menu-item index="mockspmile">
				<i class="el-icon-tickets"></i>
				<span slot="title">mock实例</span>
			  </el-menu-item>
			  <el-menu-item index="mytransfer">
				<i class="el-icon-setting"></i>
				<span slot="title">mytransfer</span>
			  </el-menu-item>
			  <el-menu-item index="exportExcel">
				<i class="el-icon-download"></i>
				<span slot="title">exportExcel</span>
			  </el-menu-item>
			  <el-menu-item index="Edit">
				<i class="el-icon-document"></i>
				<span slot="title">文本编辑器</span>
			  </el-menu-item>
			  <el-menu-item index="Vuexapplication">
				<i class="el-icon-document"></i>
				<span slot="title">Vuex应用实例</span>
			  </el-menu-item>			  
			</el-menu>  

		  </el-aside>  
		  <el-container>
			<el-header style="height:200px;text-align: right; font-size: 12px;">
				<el-carousel :interval="2000" type="card" height="200px">
					<el-carousel-item v-for="item in banners" :key="item.imgUrl">
					  <img :src="item.imgUrl">
					</el-carousel-item>
				</el-carousel>          
			</el-header>			
			<el-main>	
				<router-view></router-view>
			</el-main>
		  </el-container>
		</el-container>    
  </div>
</template>

<script>
 import luan from './assets/1.jpg'
 import mouse from './assets/2.jpg'
 import yellow from './assets/3.jpg'
 import blue from './assets/4.jpg'
export default {
  name: 'app',

  data () {
    return {
      msg: '欢迎',
	  activeIndex2: '/',
	  banners: [
              { imgUrl: luan },
              { imgUrl: mouse },
              { imgUrl: yellow },
			  { imgUrl: blue }
      ],
    }
  },
  methods: {
      handleSelect(key,keyPath) {
        this.$router.push({ path: key });
      }
  },
  mounted() {
        this.$router.push({ path: this.activeIndex2 });
		console.log(this.$router)
  }  
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-menu{
  background:#50bfff;
  height:50px;
}
.el-menu-item{
  font-size:16px;
  font-weight:600;
  height:50px;
  line-height:50px;
}
.el-menu-item.is-active {
    color: #fff;
	border-bottom:none;
}
.el-menu--horizontal .el-menu-item{
  background:#50bfff;
  border-bottom:none;
}
 .el-carousel__item img {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
	width:100%;
    height:200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
