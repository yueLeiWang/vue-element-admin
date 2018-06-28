<template>
	<div class="btn-group" ref="downmenu">
			<div @click="toggleMenu()" class="dropdown-toggle">
				{{menuName}}
			</div>
			<!--<transition name="move" >-->
                <div class="dropdown-menu" :class="{ 'hide' : !showMenu}" v-show='showMenu'>
					<ul >					
							<li v-for="(option,index) in options" :key="index" @click="updateOption(option)">
								 {{ option.name }}
							</li>													
					</ul>
					<div class="MenuFooter" @click="moreFunction"><span class="moreTextStyle">{{moreText}}</span></div>				
				</div>			

			<!--</transition>-->
	</div>
</template>

<script>
   export default{
       data () {
           return {
                showMenu: false,
				selectedOption: {
                    name: '',
                },
				emitOptions:[],
           }

       },
       props:{
            options: {
                type: [Array, Object]
            },
            menuName:{
			  type:String,
			  default:'菜单'
			},
            moreText:{
			  type:String,
			  default:'more >>'			
			}			
       },	   
       mounted () {
           document.addEventListener('click', this.hidePanel, false)	   
       },
       methods : {
            toggleMenu() {
                this.showMenu = !this.showMenu;
            },
            updateOption(option) {
                this.selectedOption = option;
                this.$emit('updateOption', this.selectedOption);
            },
            hidePanel(e) {//点击下拉以外区域关闭			     
                 //if(e.target.contains(this.$refs.downmenu)){
				    //this.showMenu=false
				 //}
            },
            moreFunction(){
			   this.$emit('moreFunction', this.options);
			}			
       }
   }
</script>
<style scoped>
.move-enter-active, .move-leave-active {
	transition: all 1s ;
	transform: translate3d(0, 0, 0);
}
.move-enter,  .move-leave {
    transform: translate3d(700px, 0, 0);
}
.btn-group {
    width: 300px;
    height: 40px;
    position: relative;
    margin: 10px 1px;
    display: inline-block;
    vertical-align: middle;
	border:1px solid #ccc;
	color:#000;
}
.dropdown-toggle {
    color: #000;;
    width: 300px;
    padding: 10px;
    font-weight: 300;
    margin-bottom: 7px;
}
.hide {
    display: none;
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 9999;
    width: 300px;
	height:auto;
    padding: 5px 0;
    margin: 2px 0 0;
    list-style: none;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
}
.dropdown-menu >ul >li {
    overflow: hidden;
	padding: 0 10px;
	float:left;
	height:30px;
	line-height:30px;
    width: 280px;
    position: relative;
    margin: 2px 0;
}
.MenuFooter{float:left;width:300px;background:#eee;margin-bottom: -5px;height:40px;line-height:40px;text-align:right;}
.moreTextStyle{display:inline-block;margin-right:20px;}
.caret {
    display: relative;
    width: 0;
    position: relative;
    top: 10px;
    height: 0;
    margin-right: 20px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid \9;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    float: right;
}
</style>