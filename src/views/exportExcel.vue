<template>
  <div class="hello">
    <h1>{{msg}}<el-button @click="exportExcel" style="float:right">导出</el-button></h1>
	 <el-table
      :data="tableData"
	  border
      style="width: 100%;margin:0 auto">
      <el-table-column
		align="center"
		prop='id'
        label="序号"
        width="180">
      </el-table-column>	  
      <el-table-column
        prop="name"
		align="center"
        label="名称"
        width="380">
      </el-table-column>	  
      <el-table-column
        prop="time"
		align="center"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="limit"
		align="center"
        label="初始量">
      </el-table-column>
      <el-table-column
        prop="num"
		align="center"
        label="数量">
      </el-table-column>
      <el-table-column
		align="center"
        label="状态">
		<template slot-scope='zhudai'>
		    <span v-if="zhudai.row.status == 'yes' || zhudai.row.status == '上架'">上架</span>
			<span v-if="zhudai.row.status == 'no'  || zhudai.row.status == '下架'">下架</span>			
		</template>
      </el-table-column>	  
    </el-table>	
  </div>
</template>

<script>
import exceldata from "@/mock/data/exceldata";
export default {
  data () {
    return {
      msg: '表格导出实例',
	  tableData:[]
    }
  },
  methods: {
     //数据获取
     getTest(){
	    new Promise((resolve, reject) => {
		    this.tableData=exceldata.ExcelData.list;			
		}).catch(err=>{
		  console.log(err)
		})

	 },
	 //导出操作
	 exportExcel(){	      
		  import('@/vendor/Export2Excel').then(excel => {
			const tHeader = ['序号','名称', '时间', '初始量', '数量', '状态'];//表头
			var filterVal = ['id','name', 'time', 'limit', 'num','status'];//表头对应字段名
			var list = this.tableData;//数据来源
			var data = this.formatJson(filterVal,list);//数据格式化
			var index1='商品列表';//导出时文件名
			excel.export_json_to_excel(tHeader,data,index1)//导出文件
		  })
	 },
	//对导出数据格式化处理
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'status') {
		  if(v[j] === 'yes' || v[j] == '上架'){
		     return v[j]='上架'
		  }
		  if(v[j] === 'no' || v[j] == '下架'){
		     return v[j]='下架'
		  }
        }else{  
             return v[j]
		}
      }))
    } 	 
  },
  mounted(){
     this.getTest() 
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
