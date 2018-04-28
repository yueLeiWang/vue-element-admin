<template>
  <div class="app-container">
    <h1>{{msg}}</h1>
    <p>{{ getCount }}</p>
	<el-button  @click="add">+1</el-button>
	<el-button  @click="dec">-1</el-button>
	<h1>时间转化</h1>
	<p>{{time}}</p>
	<p>{{timeString}}</p>
  </div>
</template>

<script>
import dateformat from "@/utils/date";
export default {
  name: 'vuexapplication',
  data () {
    return {
      msg: 'Vuex应用实例',
	  getCount:this.$store.state.count,
      time:'',
      timeString:''
    }
  },
  computed: { 
  },  
  methods: {
    getList(){
      var time=dateformat.formatDate.format(
              new Date(),
              "yyyy-MM-dd hh:mm:ss"
           );
	  var string=dateformat.formatDate.parse('2018-04-24 10:26:12','yyyy-MM-dd hh:mm:ss')
	  this.time=time
	  this.timeString=string	  
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
    this.getList()
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
