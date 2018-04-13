<template>
  <div class="app-container">
    <h1>{{msg}}</h1>
	<div id="myChart" :style="{width: '800px', height: '500px'}"></div>
  </div>
</template>

<script>
export default {
  name: 'Echarts',
  data () {
    return {
      msg: 'Echarts应用实例'
    }
  },
  computed: { 
  },  
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: 'echarts柱形图' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
  },
  mounted(){
    this.drawLine();	
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
