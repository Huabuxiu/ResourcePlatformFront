import request from '@/utils/request'

export function getList(data) {
  return request({
    url: 'conversation/history',
    method: 'post',
    data
  })
}
