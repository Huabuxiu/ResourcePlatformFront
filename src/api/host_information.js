import request from '@/utils/request'


export function getList() {
  return request({
    url: '/host_information/list',
    method: 'post'
  })
}
