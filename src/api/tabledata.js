import request from '@/utils/request'
//获取数据
export function fetchList(query) {
  return request({
    url: '/tabledata/list',
    method: 'get',
    params: query
  })
}

export function createTableData(data) {
  return request({
    url: '/tabledata/create',
    method: 'post',
    data
  })
}

export function updateTableData(data) {
  return request({
    url: '/tabledata/update',
    method: 'post',
    data
  })
}
