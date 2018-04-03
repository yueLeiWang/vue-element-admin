<template>
  <div class="hello">
    <h1>{{msg}}</h1>
          <div ref="gdMap" class="mapWrap">             
          </div>
          <div class="buttonWrap">
            <input type="button" class="mapButton" value="绘制多边形" ref="polygon"/>
            <input type="button" class="mapButton" value="绘制圆" ref="circle"/>
            <button type="button" class="mapButton"  @click="saveOverlays">保存</button>
            <button class="mapButton"  @click="closeMap">取消</button>			
          </div> 		
          <div class="pickerBox">
            <div class="headerWrap">
            <h3>服务范围信息<span v-if="showPromit" style="color:red;margin-left:30px;">{{promitInf}}</span></h3>
            <div style="height:25px;line-height:25px;margin-top:10px;"><span style="display:inline-block;">服务范围个数:</span><span class="overlay-number">{{number}}</span><span style="display:inline-block;margin-left:20px;color:blue;cursor:pointer;" @click="removeOverlay">全部删除</span></div>
            </div>
            <div class="bottomContent">
              <p >请输入地址:<input class="pickerInput" ref="pickerInput"  value='' placeholder="输入关键字选取地点"></p>
              <div>
                <el-table
                  :data="tableData"
                  border
                  style="width: 100%"
                  max-height="250">
                  <el-table-column
                  label="服务范围"
                  align="center"
                  width='120'
                  >
				  <template slot-scope="xuhao">
					{{xuhao.row.name+xuhao.row.index}}
				  </template>
                  </el-table-column>
                  <el-table-column
                  prop="area"
                  align="center"
                  width='160'
                  label="面积"
                  >
                  </el-table-column>
                  <el-table-column
                  align="center"
                  width="100"						
                  label="操作">
					<template slot-scope="act">
						<el-button type="button" @click="Delete(act.row)" >删除</el-button>
					</template>						
				</el-table-column>
			</el-table>							
			</div>
		</div>													    
	</div>
	<br/>
	<br/>			
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '高德地图实例',
      inputvalue: [],
      myMap: {}, //地图对象
      number: "0",
      tableData: [],
      promitInf: "",
      showPromit: false,	  
    }
  },
  methods: {
        openMap(){
			this.$nextTick(() => {
				this.initMap1();
			});
	    },
		// 地图初始化
		initMap1() {
		  var that = this;
		  var id = this.$refs.gdMap;
		  var inputname = this.$refs.pickerInput;
		  var map = new AMap.Map(id, {
			center: [116.459771, 39.922132],
			zoom: 15
		  });

		  map.plugin(["AMap.Scale"], function() {
			var scale = new AMap.Scale();
			map.addControl(scale);
		  });
		  map.plugin(["AMap.ToolBar"], function() {
			//加载工具条
			var tool = new AMap.ToolBar();
			map.addControl(tool);
		  });
		  var styleOptions = {
			strokeColor: "blue", //边线颜色。
			fillColor: "blue", //填充颜色。当参数为空时，圆形将没有填充效果。
			strokeWeight: 1, //边线的宽度，以像素为单位。
			strokeOpacity: 0.1, //边线透明度，取值范围0 - 1。
			fillOpacity: 0.3, //填充的透明度，取值范围0 - 1。
			strokeStyle: "solid" //边线的样式，solid或dashed。
		  };
		  that.myMap = map;
		  var mouseTool = new AMap.MouseTool(map);
		  var polygon = this.$refs.polygon;
		  var circle = this.$refs.circle;
		  AMap.event.addDomListener(
			polygon,
			"click",
			function() {
			  mouseTool.polygon(styleOptions);
			},
			false
		  );
		  AMap.event.addDomListener(
			circle,
			"click",
			function() {
			  mouseTool.circle(styleOptions);
			},
			false
		  );		  
		  AMap.event.addListener(mouseTool, "draw", function callback(e) {
			var eObject = e.obj; //obj属性就是鼠标事件完成所绘制的覆盖物对象。
			that.testalert(eObject);
		  });
		  AMapUI.loadUI(["misc/PoiPicker"], function(PoiPicker) {
			var poiPicker = new PoiPicker({
			  city: "北京",
			  input: inputname
			});
			//初始化poiPicker
			poiPickerReady(poiPicker);
		  });
		  function poiPickerReady(poiPicker) {
			window.poiPicker = poiPicker;
			var marker = new AMap.Marker();
			var infoWindow = new AMap.InfoWindow({
			  offset: new AMap.Pixel(0, -20)
			});
			//选取了某个POI
			poiPicker.on("poiPicked", function(poiResult) {
			  var source = poiResult.source,
				poi = poiResult.item,
				info = {
				  source: source,
				  id: poi.id,
				  district: poi.district,
				  name: poi.name,
				  location: poi.location.toString(),
				  address: poi.address
				};
			  inputname.value = info.district + info.name;
			  that.inputvalue.push(info.location);
			  marker.setMap(map);
			  infoWindow.setMap(map);
			  marker.setPosition(poi.location);
			  infoWindow.setPosition(poi.location);
			});
		  }
		},
		testalert(obj) {
		  //获取多边形轮廓线节点数组。其中lat和lng是经纬度参数
		  var path = "";
		  var row = {};
		  if (obj.CLASS_NAME === "AMap.Polygon") {
			path = obj.getPath();
			row.type = "Polygon";
			row.path = path;
			row.area = parseInt(obj.getArea() / 1000000 * 100) / 100 + "平方公里";
		  }
		  if(obj.CLASS_NAME === "AMap.Circle"){
             path =obj.getCenter();
			 //obj.getRadius()半径
			 row.type = "Circle";
			 row.path = path;//圆心		 
		     row.area = "--";
		  }
		  row.name = "范围";
		  row.index = "";
		  row.id = obj._amap_id;
		  this.tableData.push(row);
		  for (var a = 0; a < this.tableData.length; a++) {
			this.tableData[a].index = a + 1;
		  }
		  this.number = this.tableData.length;
		},
		//删除地图所有的覆盖物
		removeOverlay() {
		  var overlays = this.myMap.getAllOverlays();
		  this.tableData = [];
		  this.myMap.remove(overlays);
		  this.number = "0";
		},
		//删除地图覆盖物
		Delete(row) {
		  var overlays = this.myMap.getAllOverlays();
		  for (var i = 0; i < overlays.length; i++) {
			if (overlays[i]._amap_id == row.id) {
			  this.myMap.remove(overlays[i]);
			}
		  }
		  for (var j = 0; j < this.tableData.length; j++) {
			if (overlays[j]._amap_id == row.id) {
			  this.tableData.del(j);
			}
		  }
		  if (this.number > 0) {
			this.number = this.number - 1;
		  } else {
			this.number = 0;
		  }
		},
		//保存到服务站区域到后台
		saveOverlays() {
		  if (this.tableData == "") {
			this.promitInf = "请选择一个服务区域";
			this.showPromit = true;
		  } else if (this.tableData.length > 1) {
			this.promitInf = "只能选择一个服务区域";
			this.showPromit = true;
		  } else {
			this.promitInf = "";
			this.showPromit = false;
            console.log(this.tableData)
		  }
		},
		closeMap() {
		  this.tableData = [];
		  this.number = "0";
		  this.promitInf = "";
		  this.inputvalue = [];
		  this.$refs.pickerInput.value = "";
		  this.showPromit = false;
		  this.severSelectdialogVisible = false;
		}				
  },
  mounted(){
     this.openMap()
  }
}
</script>
<style scoped>
.mapButton {
  width: 80px;
  height: 25px;
  line-height: 25px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  border: none;
  border-radius: 0px;
  outline: none;
  background: #4c70e8;
  cursor: pointer;
}
.mapButton:hover {
  background: #6d8dfc;
}
.mapWrap {
  width: 70%;
  height: 500px;
  float: left;
}
.buttonWrap {
  position: absolute;
  z-index: 9999;
  bottom: 45%;
  right: 32%;
}
.pickerBox {
  float: left;
  width: 29%;
  height: 500px;
  background: #fff;
  border-left: 1px dashed #ccc;
  font-size: 12px;
}
.headerWrap {
  border-bottom: 1px dashed #ccc;
  padding: 10px 5px;
}
.overlay-number {
  display: inline-block;
  width: 30px;
  text-align: center;
  color: red;
}
.bottomContent {
  padding: 20px 5px;
}
.el-table th > .cell {
  font-size: 12px;
}
.pickerInput {
  width: 150px;
  padding: 5px 5px;
}
.masterForm {
  width: 90%;
  margin: 0 auto;
}
.scrollBox {
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.overheidden {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>
