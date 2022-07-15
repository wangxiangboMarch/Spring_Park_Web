import request from '@/utils/request'

export default {
  // 保存课程
  saveCourseInfo(courseInfo) {
    return request({
      url: `/eduServer/course/addCourseInfo`,
      method: 'post',
      data: courseInfo
    })
  },
  // 根据课程id 获取课程信息
  getCourseInfoById(id) {
    return request({
      url: `/eduServer/course/courseInfo/${id}`,
      method: 'get'
    })
  },
// 更新 课程信息
  updateCourseInfoById(courseInfo) {
      return request({
        url: `/eduServer/course/updateCourseInfo`,
        method: 'post',
        data: courseInfo
      })
    }
}