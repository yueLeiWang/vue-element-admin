<template>
  <div class="indexWrap" >
	<my-transfer :options="options" :title='title' :showContentOne='valueType' :moveButtonStyle='buttonstlye' :ThreeShow='Threeshow' :titleOne='titleOne' :titleTwo='titleTwo' :titleThree='titleThree' @projectOneValue="getvalueOne" @projectTwoValue="getvalueTwo" @projectThreeValue="getvalueThree"></my-transfer>
    <div>
	   <down-time @time-end="message = '倒计时结束'" :endTime='endTime'></down-time>
	</div>
	
  </div>
 
</template>

<script>
import MyTransfer from '../components/MyTransfer';
import DownTime from '../components/DownTime';
export default {
  components: { MyTransfer,DownTime},
  data () {
    return {
		message : '正在倒计时',
		endTime : '2018-04-20 10:06:00',	
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
    padding:20px;
    margin:0 250px;	
}

</style>
