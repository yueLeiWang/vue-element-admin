// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueRouter from 'vue-router'
import store from './store'
import routes from './routes'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import './mock' 
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'
import './assets/icon/iconfont.css'
//import AMap from 'vue-amap'
//Vue.use(AMap)
// 初始化vue-amap
//AMap.initAMapApiLoader({
// 申请的高德key
//key: '160cab8ad6c50752175d76e61ef92c50',
// 插件集合
//plugin: ['AMap.Autocomplete','AMap.PlaceSearch',
//'AMap.Scale', 'AMap.OverView',
//'AMap.MouseTool',
//'AMap.ToolBar', 'AMap.MapType',
//'AMap.PolyEditor', 
//'AMap.CircleEditor']

//});
//定义全局变量
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.Url = 'https://github.com/yueLeiWang/vue-element-admin'
Vue.use(ElementUI)
Vue.use(VueRouter)

// 按下标删除数组的对应元素
Array.prototype.del = function(dx) {
  if (isNaN(dx) || dx > this.length) { return false }
  this.splice(dx, 1)
}
// 指定元素从Array对象中删除
Array.prototype.remove = function(val) {
  var index = this.indexOf(val)
  if (index > -1) {
    this.splice(index, 1)
  }
}
// 确定指定对象是否是 Array 对象中的元素
Array.prototype.contains = function(obj) {
  var i = this.length
  while (i--) {
    if (this[i] === obj) {
      return true
    }
  }
  return false
}
// 数组去重
Array.prototype.unique = function() {
  var res = [this[0]]
  for (var i = 1; i < this.length; i++) {
    var repeat = false
    for (var j = 0; j < res.length; j++) {
      if (this[i] === res[j]) {
        repeat = true
        break
      }
    }
    if (!repeat) {
      res.push(this[i])
    }
  }
  return res
}
// 数组去重(重新排序)
Array.prototype.distinct = function (){
 var arr = this,
  result = [];
 arr.forEach(function(v, i ,arr){  //这里利用map，filter方法也可以实现
  var bool = arr.indexOf(v,i+1);  //从传入参数的下一个索引值开始寻找是否存在重复
  if(bool === -1){
   result.push(v);
  }
 })
 result.sort();
 return result;
};
//对象深拷贝（应用时this.cloneObj(obj)）
Vue.prototype.cloneObj=function (obj){
  var str, newobj = obj.constructor === Array ? [] : {};
  if(typeof obj !== 'object'){
      return;
  } else if(window.JSON){
      str = JSON.stringify(obj), //序列化对象
      newobj = JSON.parse(str); //还原
  } else {//如果不支持以上方法
      for(var i in obj){
          newobj[i] = typeof obj[i] === 'object' ? cloneObj(obj[i]) : obj[i]; 
      }
  }
  return newobj;
};
const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
