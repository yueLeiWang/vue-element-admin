<template>
  <div class="indexWrap" >	
     <div>
	   <h1>简单穿棱框组件</h1><br/><br/>
	   <my-transfer :options="options" :title='title' :showContentOne='valueType' :moveButtonStyle='buttonstlye' :ThreeShow='Threeshow' :titleOne='titleOne' :titleTwo='titleTwo' :titleThree='titleThree' @projectOneValue="getvalueOne" @projectTwoValue="getvalueTwo" @projectThreeValue="getvalueThree"></my-transfer>
	   <h1>简单倒计时组件</h1><br/><br/>
	   <down-time @time-end="message = '倒计时结束'" :endTime='endTime'></down-time><br/><br/><br/><br/><br/>
	   <h1>简单Tabs组件</h1><br/><br/>
	   <self-tabs style="margin-bottom:50px;"  :tabsoptions="options1" :boxoptions="options2"></self-tabs>
	   <h1>简单upload组件</h1><br/><br/>
	   <self-upload :limit="limit"></self-upload>
	   <h1>简单TimePicker(半点)组件</h1><br/><br/>
	   <self-time-picker :mintime='mintime' :maxtime="maxtime" :width="navHeight" @changepicker="changepicker"></self-time-picker>
	   <h1>简单组件self-input-number(只能输入整数)</h1><br/><br/>
	   <self-input-number  v-model="testval" :min='1' :max='5' :width="120" @testchange="changeNumber"></self-input-number><br/><br/>
       <self-input-number  v-model="testval1" :min='2'  @testchange="changeNumber1"></self-input-number>	   
	</div>
	    <div class="parent1">
           <div class="child">hello world-1</div>
        </div>
		<div class="classB">1111111111111111</div>
	
  </div>
 
</template>

<script>
import MyTransfer from '../components/MyTransfer';
import DownTime from '../components/DownTime';
import SelfTabs from '../components/Selftabs';
import SelfUpload from '../components/Selfupload';
import SelfTimePicker from '../components/SelfTimePicker';
import SelfInputNumber from '../components/selfInputNumber';
export default {
  components: { MyTransfer,DownTime,SelfTabs,SelfUpload,SelfTimePicker,SelfInputNumber},
  data () {
    return {
	   testval:1,
	   testval1:1,
	   message : '正在倒计时',
	   endTime : '2018-05-01 10:00:00',
	   mintime:'00:00',
	   maxtime:'23:30',
	   limit:'3',
       navHeight:'160',	   
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
　　　　　　{title: '标题1',content:'内容1内容1内容1内容1内容1内容1'},
			{title: '标题2',content:'内容2内容2内容2内容2内容2内容2'},
			{title: '标题3',content:'内容3内容3内容3内容3内容3内容3'},
			{title: '标题4',content:'内容4内容4内容4内容4内容4内容4'},
			{title: '标题5',content:'内容5内容5内容5内容5内容5内容5'}

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
	},
    changepicker(val){
	   console.log(val)
	},
    changeNumber(val){
		console.log(val,'1')
	},
    changeNumber1(val){
		console.log(val,'2')
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
        .classB{color:red};

	   

.indexWrap{
	font-weight: normal;
    float:left;
    padding:20px;
    margin:0 250px;	
}
.parent1{
    display: table;
    height:300px;
    width: 300px;
    background-color: #FD0C70;
}
.parent1 .child{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    color: #fff;
    font-size: 16px;
}

</style>
