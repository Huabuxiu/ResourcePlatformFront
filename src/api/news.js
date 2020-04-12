import request from '@/utils/request'


export function add(data) {
  return request({
    url: '/news/add',
    method: 'post',
    data: data
  })
}


export function getList() {
  return request({
    url: 'news/list',
    method: 'post'
  })
}

