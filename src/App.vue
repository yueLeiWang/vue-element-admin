<template>
    <div id="app">
		<el-container style="height: 100vh; border: 1px solid #eee">
		  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
			  <el-menu
			  :default-active="activeIndex2"
			  class="el-menu-vertical-demo"
			  @select="handleSelect"
			  >
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
			  <el-menu-item index="complexTable">
				<i class="el-icon-document"></i>
				<span slot="title">Table操作</span>
			  </el-menu-item>			  
              			  
			</el-menu>  

		  </el-aside>  
		  <el-container>
			<el-header class="headStyle">
               Vue+Element项目实例               			   
			</el-header>		
			<el-main >
                <tab-bar style="position:relative;width:100%;margin-left:-0px;background:#FFF;margin-top:2px;"></tab-bar>			
				<router-view style="overflow-y:hidden;"></router-view>
			</el-main>
		  </el-container>
		</el-container>    
  </div>
</template>

<script>
import TabBar from './components/TabBar';
export default {
  components: { TabBar },
  name: 'app',
  data () {
    return {
      msg: '欢迎',
	  activeIndex2: '/',
    }
  },
  methods: {
      handleSelect(key,keyPath) {
        this.$router.push({ path: key });
      }
  },
  mounted() {
     this.$router.push({ path: this.activeIndex2 });
  }  
}
</script>

<style scoped>
*{margin:0;padding:0}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.headStyle{
   text-align:center;background:#fff;line-height:60px;font-size:20px;font-weight:600
}
.el-menu{
  background-color: rgb(238, 241, 246);;
  height:60px;
}
.el-menu-item{
  font-size:16px;
  font-weight:600;
  height:60px;
  line-height:60px;
}
.el-menu-item.is-active {
    color: #4c70e8;
	border-bottom:none;
}
.el-menu--horizontal .el-menu-item{
  border-bottom:none;
}
</style>
