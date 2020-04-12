import request from '@/utils/request'

export function getList(data) {
  return request({
    url: 'department/list',
    method: 'post',
    data
  })
}
