<template>
      <div class="addorder-container" :style="{width:width+'px'}"> 
          <div @click="btnTime" class="btnTime">{{timeValue}}
            <i v-on:mouseover.prevent="iconTime = false" v-if="iconTime"  class="el-icon-time iCon"></i>
            <i @click="iconRem" v-on:mouseover.prevent="iconTime = true" v-on:mouseout.prevent="iconTime = true" v-if="!iconTime" class="el-icon-close iCon"></i>
          </div>
		  <div class="pickerWrap"  v-if="timeShow">
			  <div class="timeList">
				  <ul>
					<li v-for="(item,index) in TimePicker" :key="index">
						<input :class="[{'inputBtnIndex':timeClassId==item},'inputBtn',{'disabClass':startTimeArr.indexOf(item)>-1}]" :disabled='startTimeArr.indexOf(item)>-1' type="button" :value="item" @click="timePickerFous(item,index)">
					</li>
				  </ul>
			   </div>		  
		  </div>

      </div>
</template>


<script>
export default {
  data() {
    return {
      timeShow: false,
      iconTime: true,
      startTime: "09:00",
      timeClassId: null,
      endTime: "12:30",
      timeAee: [],
      timeValue: "",
      TimePicker: [
        "00:00",
        "00:30",
        "01:00",
        "01:30",
        "02:00",
        "02:30",
        "03:00",
        "03:30",
        "04:00",
        "04:30",
        "05:00",
        "05:30",
        "06:00",
        "06:30",
        "07:00",
        "07:30",
        "08:00",
        "08:30",
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
        "22:30",
        "23:00",
        "23:30",
        "24:00"
      ]
    };
  },
  props: ["mintime", "maxtime", "mound", "width"],
  watch: {
    mound(value) {
      this.timeClassId = value;
    }
  },
  computed: {
    startTimeArr() {
      var arr = [];
      var startTime = this.mintime;
      var endTime = this.maxtime;
      var TimePicker_i = this.TimePicker;
      for (var i = 0; i < TimePicker_i.length; i++) {
        if (
          this.stringTime(TimePicker_i[i]) * 1 <
            this.stringTime(startTime) * 1 ||
          this.stringTime(endTime) * 1 < this.stringTime(TimePicker_i[i]) * 1
        ) {
          this.timeAee.push(TimePicker_i[i]);
        }
      }
      return this.timeAee;
    }
  },
  methods: {
    positi() {
      this.timeValue = "";
      this.timeClassId = null;
      this.timeShow = false;
    },
    iconRem() {
      this.timeValue = "";
      //   this.mound = '';
      this.timeClassId = null;
    },
    btnTime() {
      this.timeShow = !this.timeShow;
    },
    timePickerFous(item, index) {
      this.timeValue = item;
      this.timeClassId = item;
      this.timeShow = false;
      this.$emit("changepicker", item);
    },
    stringTime(time) {
      var s = "";
      var hour = time.split(":")[0];
      var min = time.split(":")[1];
      s = Number(hour * 3600) + Number(min * 60);
      return s;
    }
  },
  mounted() {}
};
</script>

<style   scoped>
.pickerWrap{width:145px;height:150px;float:left;overflow:hidden;}
li {
  list-style: none;
}
.timeList {
  width: 160px;
  margin: 5px 0;
  border: 1px solid #d1dbe5;
  box-shadow: 0 2px 6px #ccc;
  background: #fff;
  z-index: 100;
  border-radius: 2px;
  line-height: 20px;
  height: 150px;
  overflow:hidden;
  overflow-y: auto;
}

.timeList ul,
.timeList ul li,
.timeList ul li input {
  width: 145px;
}
.disabClass {
  color: #e4e8f1;
}
.inputBtn {
  text-align: left;
  background-color: #e4e8f1;
  cursor: pointer;
  box-sizing: border-box;
  font-size: 14px;
  padding: 15px 20px;
  border: none;
  background: #fff;
}
.inputBtn:hover {
  background: #eef1f6;
}
.inputBtnIndex {
  color: #fff;
  background: #20a0ff !important;
}
.iCon {
  font-size: 14px;
  color: #bfcbd9;
  float: right;
  line-height: 30px;
  cursor: pointer;
}
.btnTime {
  border: 1px solid #bfcbd9;
  box-sizing: border-box;
  height: 36px;
  width: 90%;
  line-height: 30px;
  background: #fff;
  outline: 0;
  padding: 3px 10px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.btnTime:hover {
  border: 1px solid #000;
}
</style>