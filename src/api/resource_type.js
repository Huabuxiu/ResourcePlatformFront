import request from '@/utils/request'


export function add(data) {
  return request({
    url: '/resource_type/add',
    method: 'post',
    data: data
  })
}


export function getList() {
  return request({
    url: 'resource_type/list',
    method: 'post'
  })
}

