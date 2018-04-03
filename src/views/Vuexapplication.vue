<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <p>{{ getCount }}</p>
	<el-button  @click="add">+1</el-button>
	<el-button  @click="dec">-1</el-button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Vuex应用实例',
	  getCount:this.$store.state.count
    }
  },
  computed: { 
  },  
  methods: {
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
