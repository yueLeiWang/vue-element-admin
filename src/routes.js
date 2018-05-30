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
      component: Home,
	  meta:{keepAlive: false}
    },
    {
      path: '/Echarts',
      name: 'Echarts应用',
      component:Echarts,
	  meta:{keepAlive: false}
    },
    {
      path: '/complexTable',
      name: 'Table操作',
      component:complexTable,
	  meta:{keepAlive: false}
    },	
    {
      path: '/GDMap',
      name: '高德地图',
      component:GDMap,
	  meta:{keepAlive: false}
    },
    {
      path: '/mockspmile',
      name: '数据模拟',
      component:mockspmile,
	  meta:{keepAlive: false}
    },
	{
		path:'/mytransfer',
		name:'自定义组件',
		component:mytransfer,
		meta:{keepAlive: false}
	},
	{
		path:'/exportExcel',
		name:'excel表格导出',
		component:exportExcel,
		meta:{keepAlive: false}
	},
	{
		path:'/Edit',
		name:'文本编辑器',
		component:Edit,
		meta:{keepAlive: false}
	},
	{
		path:'/Vuexapplication',
		name:'Vuex应用实例',
		component:Vuexapplication,
		meta:{keepAlive: false}
	},
	{
		path:'/notes',
		name:'学习笔记',
		component:notes,
		meta:{keepAlive: true},		
	}
	
];

export default routes;
