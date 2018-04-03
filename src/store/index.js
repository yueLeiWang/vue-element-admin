import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//存放组件之间共享的数据
const state = {
	count:0
}
//获取数据的方法
const getters = {
	count: state => state.count
}
//显式的更改state里的数据
const mutations = {
   increment (state){
	   state.count++
   },
   deccrement (state){
	   state.count--
   }
}
//异步更改state里的数据
const actions = {
	
}
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})