//引入mockjs
import Mock from 'mockjs';

const List = []
const count = 20

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
	'id|+1': 1,
    'name': "@ctitle(2,15)",
    "img": "@image('600x600',#b7ef7c)",
	'status|1':['yes','no'],
    "brief": "@csentence(1,50)",
    "price|0-20.0-2": 1,
    "num|30-150": 0,
    "minusFlag": true,
    "time": "@time",
    "peisongfei|0-100.0-2": 1,
    "limit|0-50": 1
   }))
}
export default {
  getList: () => {
    return {
      total: List.length,
      items: List
    }
  }
}
 
