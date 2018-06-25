<template>
  <div class="components-container">    
    <!--<div class="info">UE编辑器示例<br>需要使用编辑器时，调用UE公共组件即可。可设置填充内容defaultMsg，配置信息config(宽度和高度等)，可调用组件中获取内容的方法。支持页面内多次调用。</div>
    <button @click="getUEContent()">获取内容</button>
    <div class="editor-container">
      <UE :defaultMsg=defaultMsg :config=config :id=ue1 ref="ue"></UE>
    </div>-->
	<div >
	   <vue-editor v-model="content"  style="width:500px;" ></vue-editor>
	</div>
	
	<el-button @click="getcontent">dddd</el-button>
  </div>
</template>
<style scoped>
  .info{
    border-radius: 10px;
    line-height: 20px;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
  }
  .editor-container{
     margin-top:50px;
	 margin-left:150px;
  }
</style>
<script>
  import UE from '../components/ue/ue.vue';
  import { VueEditor } from 'vue2-editor'
  
  export default {
    components: {UE,VueEditor},
    data() {
      return {
	   content: ''  ,

	    msg: '文本编辑器实例',
        defaultMsg: '这里是UE测试',
        config: {
          initialFrameWidth: 800,
          initialFrameHeight: 350
        },
        ue1: "ue1", // 不同编辑器必须不同的id
      }
    },
    methods: {
      getUEContent() {
        let content = this.$refs.ue.getUEContent(); // 调用子组件方法
        this.$notify({
          title: '获取成功，可在控制台查看！',
          message: content,
          type: 'success'
        });
        console.log(content)
      },
	  getcontent(){
	    console.log(this.content)
	  }
    }
  };
</script>


















