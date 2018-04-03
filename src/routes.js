import Home from './views/Home'
import Echarts from './views/Echarts'
import GDMap from './views/GDMap'
import mockspmile from './views/mockspmile'
import mytransfer from './views/mytransfer'
import exportExcel from './views/exportExcel'
import Edit from './views/Edit'
let routes = [
    {
      path: '/',
      name: '首页',
      component: Home
    },
    {
      path: '/Echarts',
      name: '标签页',
      component:Echarts,
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
		name:'自定义穿棱框',
		component:mytransfer,
	},
	{
		path:'/exportExcel',
		name:'excel表格导出',
		component:exportExcel,
	},
	{
		path:'/Edit',
		name:'文本编辑',
		component:Edit,
	}
	
];

export default routes;
