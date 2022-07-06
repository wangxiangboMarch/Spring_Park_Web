import request from '@/utils/request'

export default {
  // 保存课程
  saveCourseInfo(courseInfo) {
        return request({
          url: `/eduServer/course/addCourseInfo`,
          method: 'post',
          data: courseInfo
        })
      }
}