 <template>
  <div id="tab">
   <div class="tab_menu">
    <ul>
     <li v-for=" (option,index) in tabsoptions" @click="liClick(index)" ref="tabs">{{option.name}}</li>
    </ul>
   </div>
   <div class="tab_box">
    <div v-for="option in boxoptions" ref="box">{{option.name}}</div>
   </div>
  </div>
 </template>

<script>
  export default {
    name: 'SelfTabs',
    props: {     
      tabsoptions: {
        type: Array,
        default: []
      },
      boxoptions: {
        type: Array,
        default: []
      }	  
    },
    data() {
      return {
		
      }
    },
    mounted() {
       this.init()
    },
    methods: {
	   init () {
		  for(var a=0;a<this.$refs.tabs.length;a++){
			  this.$refs.box[a].className='hide';
			  this.$refs.tabs[a].className='';		    
		  }	   
	       this.$refs.tabs[0].className='selected'
		   this.$refs.box[0].className='';
	   },
	   liClick(index){
	      for(var a=0;a<this.$refs.tabs.length;a++){
			  this.$refs.box[a].className='hide';
			  this.$refs.tabs[a].className='';		    
		  }
		  this.$refs.box[index].className='';
		  this.$refs.tabs[index].className='selected'
	   }
    }		
  }
</script>

<style scoped>
	.tab_menu .selected{background-color:#409EFF;color:#fff;}
	.tab_menu ul{height:30px;}
	.tab_menu ul li{list-style:none;display:inline-block;width:50px;height:30px;color:#000;border:solid 1px gray;border-bottom:none; text-align:center;line-height:30px;margin-right:3px;}
	.tab_menu ul li a{text-decoration:none;}
	.tab_box{width:540px;height:150px;border:solid 1px gray;}
	.tab_box .hide{display:none;}
</style>          







				
