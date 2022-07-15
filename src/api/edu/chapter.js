import request from '@/utils/request'

const api_name = '/eduServer/chapter'

export default {
  // 获取课程章节
  getNestedTreeList(courseId) {
    return request({
      url: `/eduServer/chapter/nestedList/${courseId}`,
      method: 'get'
    })
  },

  removeById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  },

  save(chapter) {
    return request({
      url: api_name,
      method: 'post',
      data: chapter
    })
  },

  getById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'get'
    })
  },

  updateById(chapter) {
    return request({
      url: `${api_name}/${chapter.id}`,
      method: 'put',
      data: chapter
    })
  }
}