<template>
  <div class="app-container">
    <h1>学习笔记</h1>
	<div class="barWrap">
	  <h3>按需引入Element-ui</h3>
	  <div>
	     <p class="titleMain">（一）导入Element-ui与安装babel-plugin-component</p>
		 <p class="contentBar">npm install element-ui --save</p>
		 <p class="contentBar">npm install babel-plugin-component -D</p>
	  </div>
	  <div>
	      <p class="titleMain">（二）在main.js中加入</p>
		  <p class="contentBar">import {Pagination} from 'element-ui'//可以引入多个</p>
		  <p class="contentBar">Vue.use(Pagination)//一个一个的引入</p>
	  </div>
	  <div>
		<p class="titleMain">（三）在.babelrc文件中的"plugins"的对象中加入：</p>
  <pre>
  [
	  "component",
	  {
		"libraryName": "element-ui",
		"styleLibraryName": "theme-chalk"
	  }
  ]</pre>	  
	  </div>	
	</div>
	<div class="barWrap">
	  <h3>合并对象（给原对象新增属性）</h3>
	  <div>
		 <p class="contentBar">Object.assign({},obj,obj1)</p>
		 <p class="contentBar">花括号叫目标对象，后面的obj、obj1是源对象。对象合并是指：将源对象里面的属性添加到目标对象中去，若两者的属性名有冲突，后面的将会覆盖前面的</p>
		 <p class="contentBar">【注意】：当Object.assign()方法用于数组时,对象是根据属性名来对应，数组是根据索引号来对应</p>
		 <p class="contentBar">var arr11 = Object.assign([1,2,3],[4,5]);</p>
		 <p class="contentBar">console.log(arr11);//[4,5,3]</p>
	  </div>	
	</div>
	<div class="barWrap">
	  <h3 >Element-ui 样式自定义（覆盖）</h3>
	  <div>
		 <p class="titleMain">（一）先安装sass-loader与node-sass</p>
		 <p class="contentBar">npm intall sass-loader --save;</p>
		 <p class="contentBar">npm install node-sass --save;</p>
	  </div>
	  <div>
		 <p class="titleMain">（二）新建styles文件夹，其内创建index.scss,写新样式就可以了</p>
	  </div>
	  <h3>$nextTick的理解</h3>
	  <div>
		 <p class="contentBar">$nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM</p>
         <p class="contentBar">$nextTick在change事件中应用的较多</p>		 
	  </div>
    </div>	  
  </div>
</template>

<script>
export default {
  name: 'notes',
  data () {
    return {
      msg: '学习笔记',
    }
  },
  computed: { 
  },  
  methods: {
    getList(){
	  	  
	}	
  },
  mounted(){
    this.getList()
  }
}
</script>
<style scoped>
.titleMain{
	font-size:14px;font-weight:600;
}
.barWrap{width:100%;text-align:left;}
.contentBar{text-indent:2em;}
</style>
