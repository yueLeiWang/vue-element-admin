 <template>
   <div class="mytransWrap">
		<form name=frm1 > 
			<table width="100%" border="0" align="center" cellpadding="1" cellspacing="1"> 
				<tr> 
				<td nowrap="nowrap">&nbsp;</td> 
					<td width="220px" align="center" style="height:370px;">
						<span>{{title}}</span>										
						<select ref="SrcSelect" name="SrcSelect" size=100 v-model="selected"  class="dataSrc" multiple>  
						  <option v-for="option in options"  v-bind:value="option.id" >  
							{{ option.account}}  
						  </option>  
						</select> 									
					</td> 
					<td width="30px" align="center" style="height:360px;padding-left:10px;">
						<div style="height:120px;padding-top:60px;">
							<input align="left" :style="moveButtonStyle" type=button value=">>" title="全部右移" @click="moveLeftOrRightAll('SrcSelect','ObjSelect1')" ><br> 
							<input align="left" :style="moveButtonStyle" class="marginTopval"  type=button value=">"  title="右移" @click="moveLeftOrRight('SrcSelect','ObjSelect1')" ><br> 
							<input align="left" :style="moveButtonStyle" class="marginTopval"  type=button value="<" title="左移" @click="moveLeftOrRight('ObjSelect1','SrcSelect')" ><br> 
							<input align="left" :style="moveButtonStyle" class="marginTopval"  type=button value="<<" title="全部左移" @click="moveLeftOrRightAll('ObjSelect1','SrcSelect')" > 									
						</div>
						<div style="height:120px;padding-top:5px;">
							<input align="left" :style="moveButtonStyle"   type=button value=">>" title="全部右移" @click="moveLeftOrRightAll('SrcSelect','ObjSelect2')" ><br> 
							<input align="left" :style="moveButtonStyle" class="marginTopval"  type=button value=">"  title="右移" @click="moveLeftOrRight('SrcSelect','ObjSelect2')" ><br> 
							<input align="left" :style="moveButtonStyle" class="marginTopval"  type=button value="<" title="左移" @click="moveLeftOrRight('ObjSelect2','SrcSelect')" ><br> 
							<input align="left" :style="moveButtonStyle" class="marginTopval"  type=button value="<<" title="全部左移" @click="moveLeftOrRightAll('ObjSelect2','SrcSelect')" >
						</div>
						<div style="height:120px;">
							<input align="left" :style="moveButtonStyle"class="marginTopval" type=button value=">>" title="全部右移" @click="moveLeftOrRightAll('SrcSelect','ObjSelect3')" ><br> 
							<input align="left" :style="moveButtonStyle" class="marginTopval" type=button value=">"  title="右移" @click="moveLeftOrRight('SrcSelect','ObjSelect3')" ><br> 
							<input align="left" :style="moveButtonStyle" class="marginTopval" type=button value="<" title="左移" @click="moveLeftOrRight('ObjSelect3','SrcSelect')" ><br> 
							<input align="left" :style="moveButtonStyle" class="marginTopval" type=button value="<<" title="全部左移" @click="moveLeftOrRightAll('ObjSelect3','SrcSelect')" >
						</div>										
					</td> 
					<td width="200px" align="center" style="height:360px;">
						<div class="formWrap marginBotVal">
							<div class="formDataWrap">
								<span class="formTitle">{{titleOne}}</span>									
								<select ref="ObjSelect1" name="ObjSelect1" size=6 class="formSel"   multiple @dblclick="moveLeftOrRight('ObjSelect1','SrcSelect')"> 
								</select>
							</div>
						</div>
						<div class="formWrap marginBotVal">
							<div class="formDataWrap">
								<span class="formTitle">{{titleTwo}}</span>									
								<select ref="ObjSelect2" name="ObjSelect2" size=6 class="formSel" multiple @dblclick="moveLeftOrRight('ObjSelect2','SrcSelect')"> 
								</select>
							</div>										
						</div>
						<div class="formWrap marginBotVal">
							<div class="formDataWrap">
								<span class="formTitle" style="margin-bottom:5px;">{{titleThree}}</span>									
								<select ref="ObjSelect3" name="ObjSelect3" size=6 class="formSel"  multiple @dblclick="moveLeftOrRight('ObjSelect3','SrcSelect')"> 
								</select>
							</div>												
						</div>										
					</td> 
				</tr>																	
			</table> 
		</form>	
       <el-button type="primary"  @click="projectsubmit">确定</el-button>		
	</div>
</template>

<script>
  export default {
    name: 'MyTransfer',
    props: {     
      options: {
        type: Array,
        default: []
      },
      titleOne:{
	    type:String,
		default:'标题1'
	  },
      titleTwo:{
	    type:String,
		default:'标题2'
	  },
      titleThree:{
	    type:String,
		default:'标题3'
	  },
      title:{
	    type:String,
		default:'标题'
	  }, 
	  moveButtonStyle:{
		type:Object,
		default:{
           width:'60px',
		   'border-radius':'6px',
		   outline:'none',
		   background:'#50bfff',
		   color: '#000',
		   border: 'none',
		   'font-weight':'600'		
		}
	  },
	  showContentOne:{
	      type:String,
		  default:'id'
	  }
    },
    data() {
      return {
	    selected: [],
		coundt:'',
		objectOneId:[],
		objectOneName:[],
		objectTwoId:[],
		objectTwoName:[],
		objectThreeId:[],
		objectThreeName:[],		
      }
    },
    mounted() {
     
    },
    methods: {
		//选中项向左移动或向右移动 
		moveLeftOrRight(fromObj,toObj){	
			var fromObjOptions=this.$refs[fromObj].options;
			for(var i=0;i<fromObjOptions.length;i++){ 
				if(fromObjOptions[i].selected){              				
					this.$refs[toObj].appendChild(fromObjOptions[i]);					
					i--; 
				} 
			}
			  
		}, 
		//左边全部右移动，或右边全部左移 
		moveLeftOrRightAll(fromObj,toObj){		
			var fromObjOptions=this.$refs[fromObj].options;			
			for(var i=0;i<fromObjOptions.length;i++){ 
				fromObjOptions[0].selected=true;				
				this.$refs[toObj].appendChild(fromObjOptions[i]);               				
				i--; 
			}		
		},
		//回传选择权限
		projectsubmit(){
		     if(this.$refs.ObjSelect1.options.length >0){
			     this.objectOneId=[];
				 this.objectOneName=[];
                 for(var i=0; i<this.$refs.ObjSelect1.options.length ;i++){
				      this.objectOneId.push(this.$refs.ObjSelect1.options[i].value);
					  this.objectOneName.push(this.$refs.ObjSelect1.options[i].text);					  
				 }
                 if(this.showContentOne=='name'){
						this.$emit('projectOneValue',this.objectOneName)	
				 }else{
				       this.$emit('projectOneValue',this.objectOneId) 
				 }				 
                 
			 }else{
			     this.coundt="请选择"+this.titleOne;
			     this.$emit('projectOneValue',this.coundt)
			 }
		     if(this.$refs.ObjSelect2.options.length >0){			 	
			     this.objectTwoId=[];
				 this.objectTwoName=[];
                 for(var i=0; i<this.$refs.ObjSelect2.options.length ;i++){
				      this.objectTwoId.push(this.$refs.ObjSelect2.options[i].value);
					  this.objectTwoName.push(this.$refs.ObjSelect2.options[i].text);					  
				 }
                 if(this.showContentOne=='name'){
						this.$emit('projectTwoValue',this.objectTwoName)	
				 }else{
				        this.$emit('projectTwoValue',this.objectTwoId) 
				 }		
			 }else{
			     this.coundt="请选择"+this.titleTwo
			     this.$emit('projectTwoValue',this.coundt)
			 }
			 if(this.$refs.ObjSelect3.options.length >0){			 	
			     this.objectThreeId=[];
				 this.objectThreeName=[];
                 for(var i=0; i<this.$refs.ObjSelect3.options.length ;i++){
				      this.objectThreeId.push(this.$refs.ObjSelect3.options[i].value);
					  this.objectThreeName.push(this.$refs.ObjSelect3.options[i].text);					  
				 }
                 if(this.showContentOne=='name'){
						this.$emit('projectThreeValue',this.objectThreeName)	
				 }else{
				       this.$emit('projectThreeValue',this.objectThreeId) 
				 }		
			 }else{
				 this.coundt="请选择"+this.titleThree;
				 this.$emit('projectThreeValue',this.coundt)
			 }				     
		 
 
		}		
    }
  }
</script>

<style scoped>
 .mytransWrap{
    width:100%;float:left;margin-bottom:50px;
 }
 .dataSrc{
	height:360px;width:98%;margin-top:10px; 
 }
 .moveButton{
   width:60px;border-radius:6px;outline:none;background:#50bfff;color:#fff;border:none;font-weight:600; 
 }
 .marginTopval{
    margin-top:5px; 
 }
 .marginBotVal{
	margin-bottom:10px;
 }
 .formWrap{
	margin-left:10px;float:left;height:120px; 
 }
 .formDataWrap{
	float:left;width:200px; 
 }
 .formTitle{
	display:inline-block;margin-bottom:15px;margin-top:15px;
 }
 .formSel{
	height:90px;width:98%; 
 }
</style>          







				
