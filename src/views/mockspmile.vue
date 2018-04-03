<template>
  <div class="hello">
    <h1>{{msg}}</h1>
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
    </el-table>	
  </div>
</template>

<script>
import commditydata from "@/mock/data/goods";
export default {
  data () {
    return {
      msg: '表格实例mock模拟数据',
	  tableData:[]
    }
  },
  methods: {
     //数据获取
     getTest(){
	    new Promise((resolve, reject) => {
		    this.tableData=commditydata.data.foods;			
		}).catch(err=>{
		  console.log(err)
		})
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
