import Mock from 'mockjs'
import tabledataAPI from './tabledata'
import exceldataAPI from './exceldata'
// 表格相关
Mock.mock(/\/tabledata\/list/, 'get', tabledataAPI.getList)
Mock.mock(/\/tabledata\/create/, 'post', tabledataAPI.createTableData)
Mock.mock(/\/tabledata\/update/, 'post', tabledataAPI.updateTableData)
//excelTableData
Mock.mock(/\/exceldata\/list/, 'get', exceldataAPI.getList)

export default Mock
