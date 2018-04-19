<template>
  <div class="app-container">
    <h1>{{msg}}</h1>
    <p>{{ getCount }}</p>
	<el-button  @click="add">+1</el-button>
	<el-button  @click="dec">-1</el-button>
	<div v-for="item in testdata">{{item.name}}<el-checkbox  @change="rowChange(item)" v-model="item.commidySelect" ></el-checkbox></div>
  </div>
</template>

<script>
export default {
  name: 'vuexapplication',
  data () {
    return {
      msg: 'Vuex应用实例',
	  getCount:this.$store.state.count,
      testdata:[{id:'1',name:'aaa'}]	  
    }
  },
  computed: { 
  },  
  methods: {
    getList(){   		  
	},
	rowChange(item){
	  console.log(item)
	},
    add(){
	   this.$store.commit('increment')
	   this.getCount=this.$store.state.count
	},
    dec(){
	   this.$store.commit('deccrement')
	   this.getCount=this.$store.state.count
	} 	
  },
  mounted(){
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
