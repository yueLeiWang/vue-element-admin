<template>
  <div class="indexWrap" >
	
	
     <div>
	   <h1>简单穿棱框组件</h1><br/><br/>
	   <my-transfer :options="options" :title='title' :showContentOne='valueType' :moveButtonStyle='buttonstlye' :ThreeShow='Threeshow' :titleOne='titleOne' :titleTwo='titleTwo' :titleThree='titleThree' @projectOneValue="getvalueOne" @projectTwoValue="getvalueTwo" @projectThreeValue="getvalueThree"></my-transfer>
	   <h1>简单倒计时组件</h1><br/><br/>
	   <down-time @time-end="message = '倒计时结束'" :endTime='endTime'></down-time><br/><br/><br/><br/><br/>
	   <h1>简单Tabs组件</h1><br/><br/>
	   <self-tabs :tabsoptions="options1" :boxoptions="options2"></self-tabs>
	</div>
	
  </div>
 
</template>

<script>
import MyTransfer from '../components/MyTransfer';
import DownTime from '../components/DownTime';
import SelfTabs from '../components/Selftabs';
export default {
  components: { MyTransfer,DownTime,SelfTabs},
  data () {
    return {
		message : '正在倒计时',
		endTime : '2018-05-01 10:00:00',	
       options:[
　　　　　　{account: '项目组1',id:'1'},
　　　　　　{account: '项目组2',id:'2'},
　　　　　　{account: '项目组3',id:'3'},
　　　　　　{account: '项目组4',id:'4'},
　　　　　　{account: '项目组5',id:'5'},
　　　　],
       options1:[
　　　　　　{name: '项目组1'},
			{name: '项目组2'},
			{name: '项目组3'},
			{name: '项目组4'},
			{name: '项目组5'}			
　　　　],
       options2:[
　　　　　　{name: '内容1'},
			{name: '内容2'},
			{name: '内容3'},
			{name: '内容4'},
			{name: '内容5'}

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
