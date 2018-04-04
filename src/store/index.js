import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//存放组件之间共享的数据
const state = {
	count:0,
	visitedViews: []
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
   },
	ADD_VISITED_VIEWS: (state, view) => {
	  if (state.visitedViews.some(v => v.path === view.path)) return
	  state.visitedViews.push({ name: view.name, path: view.path })
	},
	DEL_VISITED_VIEWS: (state, view) => {
	  let index
	  for (const [i, v] of state.visitedViews.entries()) {
		if (v.path === view.path) {
		  index = i
		  break
		}
	  }
	  state.visitedViews.splice(index, 1)
	}   
}
//异步更改state里的数据
const actions = {
    addVisitedViews({ commit }, view) {
      commit('ADD_VISITED_VIEWS', view)
    },
    delVisitedViews({ commit, state }, view) {
      return new Promise((resolve) => {
        commit('DEL_VISITED_VIEWS', view)
        resolve([...state.visitedViews])
      })
    }	
}
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
