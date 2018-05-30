<template>
	<div class="inputNumWrap" :style="{width:width+'px'}">
	      <button class="selfButton" :class="currentValue<=min ? 'activeStyle' :'' " @click="handleReduce" :disabled="currentValue<=min"> <i class="el-icon-minus selfSytle"></i> </button>
		  <input class="inputNum" type="text" :value="currentValue" @change="handleChange"  @keyup='handleKeyup'/>
		  <button class="selfButton" :class="currentValue>=max ? 'activeStyle' :'' " @click="handleAdd" :disabled="currentValue>=max"> <i class="el-icon-plus selfSytle"></i> </button>
		
	</div>      
</template>
<script>

export default {
  name: "selfInputNum",
  data() {
    return {
	 currentValue:1 
	};
  },
 // 定义来自父级的参数
props:{
    width:{
	    type:Number,
		default:130
	},
	max:{
		type:Number,
		default:Infinity
	},
	min:{
		type:Number,
		default:-Infinity
	},
	value:{
		type:Number,
		default:1
	},
	step:{
		type:Number,
		default:1
	}	
  },
  methods: {
        isValueNumber(value){
           return (/(^[0-9]+$)/).test(value);
        },
        handleChange:function(event){
            var val = event.target.value.trim() ;
            if(this.isValueNumber(val)){			    
                var max = this.max ;
                var min = this.min ;
                val = Number(val);
                this.currentValue = val ;
                if(val>max) this.currentValue = max ;
                if(val<min) this.currentValue = min ;
            }else{			
                event.target.value = this.currentValue ;
            }			
			this.$emit('testchange',this.currentValue)
        },
        // 绑定键盘事件
        handleKeyup(event){
		   var val=event.target.value.trim()
           var len=event.target.value.length
			if(this.isValueNumber(event.target.value )){
                event.target.value=event.target.value
				this.currentValue=Number(event.target.value)
                			
			}else{
			  if(event.target.value != ''){
				  event.target.value=val.substr(0,len-1)
				  this.currentValue=parseInt(event.target.value)			  
			  }else{
			      this.currentValue=this.min
			  }	
			  
			}
            this.$emit('testchange',this.currentValue)			
		},		
        handleAdd:function(){
            if(this.currentValue>=this.max) return ;
            this.currentValue += this.step ;
        },
		handleReduce:function(){
            if(this.currentValue<=this.min) return ;
            this.currentValue -= this.step;
        },
        updateVal:function(val){
            if(val>this.max) val = this.max ;
            if(val<this.min) val = this.min ;
            this.currentValue = val ;
			this.$emit('testchange',this.currentValue)
        }  
  },
	watch:{
		// 增加监听
		currentValue:function(val){
			this.$emit('input',val);
			this.$emit('on-change',val);
		},
		value:function(val){
			this.updateVal(val);
		}
	}  
};
</script>
<style scoped>
.inputNumWrap{
  height:34px;
  border:1px solid #ccc;
  font-size:0px;
}
.selfButton{
   height:34px;
   background-color:#fff;
   border:none;
   width:34px;
   outline:none;   
}
.selfSytle{
  font-size:14px;
  font-weight:600;
}
.inputNum{
  width: calc(100% - 70px);
  border: none;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  height:34px;
  text-align:center;
  outline:none;
}
.activeStyle{
  background:#eef1f6;
  cursor: not-allowed;
}

</style>
