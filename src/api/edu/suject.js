import request from '@/utils/request'

export default {
  // 获取课程分类列表
  getSubjectList() {
    return request({
      // url 的两种写法
      // url: '/eduServer/teacher/pageTeacherCondition' + '/' + current + '/' + limit,
      url: '/eduServer/subject/getAllSubject',
      method: 'get',
    })
  }
}