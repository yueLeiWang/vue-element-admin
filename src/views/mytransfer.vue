<template>
  <div class="indexWrap" >
	<my-transfer :options="options" :title='title' :showContentOne='valueType' :moveButtonStyle='buttonstlye' :ThreeShow='Threeshow' :titleOne='titleOne' :titleTwo='titleTwo' :titleThree='titleThree' @projectOneValue="getvalueOne" @projectTwoValue="getvalueTwo" @projectThreeValue="getvalueThree"></my-transfer>
  </div>
 
</template>

<script>
import MyTransfer from '../components/MyTransfer';
export default {
  components: { MyTransfer },
  data () {
    return {
       options:[
　　　　　　{account: '项目组1',id:'1'},
　　　　　　{account: '项目组2',id:'2'},
　　　　　　{account: '项目组3',id:'3'},
　　　　　　{account: '项目组4',id:'4'},
　　　　　　{account: '项目组5',id:'5'},
　　　　],
		titleOne:'读',
		titleTwo:'写',
		titleThree:'无权限',
		title:'SVN权限分配',
		Threeshow:true,
		buttonstlye:{
           width:'60px',
		   'border-radius':'6px',
		   outline:'none',
		   background:'#50bfff',
		   color: '#fff',
		   border: 'none',
		   'font-weight':'700'			    
		},
		valueType:'name'
		
    }
  },
  methods: {
    getvalueOne(value){	   
	   console.log('读:',value);
	},
    getvalueTwo(value){
	   console.log('写:',value)
	},
    getvalueThree(value){
	   console.log('无权限:',value)
	}	
  },
  mounted() {
	 this.options=[
　　　　　　{account: '项目组1',id:'1'},
　　　　　　{account: '项目组2',id:'2'},
　　　　　　{account: '项目组3',id:'3'},
　　　　　　{account: '项目组4',id:'4'},
　　　　　　{account: '项目组5',id:'5'},
　　　　　　{account: '项目组6',id:'6'},
　　　　　　{account: '项目组7',id:'7'},
　　　　　　{account: '项目组8',id:'8'},
　　　　　　{account: '项目组9',id:'9'},
　　　　　　{account: '项目组10',id:'10'},
　　　　]
  },  
}
</script>
<style scoped>
.indexWrap{
	font-weight: normal;
    float:left;	
}

</style>
