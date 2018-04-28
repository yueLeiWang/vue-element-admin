import Home from './views/Home'
import Echarts from './views/Echarts'
import GDMap from './views/GDMap'
import mockspmile from './views/mockspmile'
import mytransfer from './views/mytransfer'
import exportExcel from './views/exportExcel'
import Vuexapplication from './views/Vuexapplication'
import complexTable from './views/complexTable'
import notes from './views/notes'
import Edit from './views/Edit'
let routes = [
    {
      path: '/',
      name: '首页',
      component: Home
    },
    {
      path: '/Echarts',
      name: 'Echarts应用',
      component:Echarts	  
    },
    {
      path: '/complexTable',
      name: 'Table操作',
      component:complexTable,
    },	
    {
      path: '/GDMap',
      name: '高德地图',
      component:GDMap,
    },
    {
      path: '/mockspmile',
      name: '数据模拟',
      component:mockspmile,
    },
	{
		path:'/mytransfer',
		name:'自定义组件',
		component:mytransfer,
	},
	{
		path:'/exportExcel',
		name:'excel表格导出',
		component:exportExcel,
	},
	{
		path:'/Edit',
		name:'文本编辑器',
		component:Edit,
	},
	{
		path:'/Vuexapplication',
		name:'Vuex应用实例',
		component:Vuexapplication,
	},
	{
		path:'/notes',
		name:'学习笔记',
		component:notes,
	}
	
];

export default routes;
