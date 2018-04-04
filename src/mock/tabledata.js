import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    author: '@cname()',
    reviewer: '@cname()',
    title: '@ctitle(2,16)',
    dateTime: '@datetime'
  }))
}

export default {
  getList: config => {
    const { title, page = 1, limit = 20, sort } = param2Obj(config.url)

    let mockList = List.filter(item => {
      if (title && item.title.indexOf(title) < 0) return false
      return true
    })
    if (sort === '-id') {
      mockList = mockList.reverse()
    }
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    
	return {
      total: mockList.length,
      items: pageList
    }
  },
  createTableData: () => ({
    data: 'success'
  }),
  updateTableData: () => ({
    data: 'success'
  })
}
