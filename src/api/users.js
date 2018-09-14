import request from '@/utils/request'

// 获取所有用户信息列表
export function fetchAllUserList(query) {
  return request({
    url: '/user/getAllUserInfo/',
    method: 'get',
    params: query
  })
}

// 获取所有用户密钥信息列表
export function fetchAllUserKeyInfo(query) {
  return request({
    url: '/user/getAlluserKey/',
    method: 'get',
    params: query
  })
}

// 下载密钥文件
export function downLoadKeyFile(query) {
  return request({
    url: '/user/downUserKey/',
    method: 'get',
    params: query
  })
}

// 创建服务器用户并生成公私钥
export function createServerUser(data) {
  return request({
    url: '/user/genUserKey/',
    method: 'post',
    data
  })
}

// 删除服务器用户并删除公私钥
export function deleteServerUser(data) {
  return request({
    url: '/user/deleteUserKey/',
    method: 'post',
    data
  })
}

// 获取某个用户的所有公私钥
export function getUserAllKey(data) {
  return request({
    url: '/user/getUserAllkey/',
    method: 'post',
    data
  })
}

// 删除单个用户
export function deleteUser(data) {
  return request({
    url: '/user/deleteUser/',
    method: 'post',
    data
  })
}

// 批量删除用户
export function batchDeleteUser(data) {
  return request({
    url: '/user/batchDeleteUser/',
    method: 'post',
    data
  })
}

// 修改用户信息
export function modifyUserInfo(data) {
  return request({
    url: '/user/modifyUserInfo/',
    method: 'post',
    data
  })
}

// 获取所有用户组信息
export function fetchAllGroupsList(query) {
  return request({
    url: '/user/getAllGroupInfo/',
    method: 'get',
    params: query
  })
}

// 创建用户组
export function createGroups(data) {
  return request({
    url: '/user/createGroup/',
    method: 'post',
    data
  })
}

// 删除单个用户组
export function deleteOneGroups(data) {
  return request({
    url: '/user/deleteGroup/',
    method: 'post',
    data
  })
}

// 批量删除用户组
export function batchDeleteGroups(data) {
  return request({
    url: '/user/batchDeleteGroup/',
    method: 'post',
    data
  })
}

// 根据用户组ID获取对应组信息
export function getGroupsInfoByID(data) {
  return request({
    url: '/user/getGroupMember/',
    method: 'post',
    data
  })
}

// 修改用户组信息
export function modifyGroupsInfoByID(data) {
  return request({
    url: '/user/modifyGroupInfo/',
    method: 'post',
    data
  })
}

// 群发用户消息
export function batchCreateMessages(data) {
  return request({
    url: '/user/batchCreateMessages/',
    method: 'post',
    data
  })
}

// 获取未读的用户消息
export function fetchUnreadMessages(query) {
  return request({
    url: '/user/getAllUnreadMessages/',
    method: 'get',
    params: query
  })
}

// 获取所有的用户消息
export function fetchAllMessages(query) {
  return request({
    url: '/user/getAllUserMessages/',
    method: 'get',
    params: query
  })
}

// 标记消息为已读
export function markMessages(data) {
  return request({
    url: '/user/markMessages/',
    method: 'post',
    data
  })
}

// 批量标记消息为已读
export function batchMarkMessages(data) {
  return request({
    url: '/user/batchMarkMessages/',
    method: 'post',
    data
  })
}

// 快速获取当前用户信息
export function fetchUserInfo(query) {
  return request({
    url: '/user/quick_get_user_info/',
    method: 'get',
    params: query
  })
}

// 快速修改当前用户信息
export function changeCurUserInfo(data) {
  return request({
    url: '/user/quick_change_user_info/',
    method: 'post',
    data
  })
}

// 快速获取当前用户项目信息
export function fetchUserProjectsInfo(query) {
  return request({
    url: '/user/quick_get_user_projects/',
    method: 'get',
    params: query
  })
}

// 获取当前用户当月的SSH密码
export function getUserSshPassword(data) {
  return request({
    url: '/user/getUserSSHPassword/',
    method: 'post',
    data
  })
}
