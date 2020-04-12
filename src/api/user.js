import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/user_info',
    method: 'post',
    data: {"token":token}
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}


export function getexamine_list() {
  return request({
    url: 'user/examine_list',
    method: 'post'
  })
}
