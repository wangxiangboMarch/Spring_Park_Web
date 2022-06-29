import request from '@/utils/request'

// export function getTeacherList(current,limit,teacherQuery) {
//   return request({
//     // url 的两种写法
//     // url: '/eduServer/teacher/pageTeacherCondition' + '/' + current + '/' + limit,
//     url: `/eduServer/teacher/pageTeacherCondition/${current}/${limit}`,
//     method: 'get',
//     // 条件对象 RequestBoby来接受数据 (json);  data 就是表示用json 传递参数
//     data: teacherQuery
//   })
// }

// 第二种写法

export default {
  // 1.0 获取讲师列表
  getTeacherList(current, limit, teacherQuery) {
    return request({
      // url 的两种写法
      // url: '/eduServer/teacher/pageTeacherCondition' + '/' + current + '/' + limit,
      url: `/eduServer/teacher/pageTeacherCondition/${current}/${limit}`,
      method: 'post',
      // 条件对象 RequestBoby来接受数据 (json);  data 就是表示用json 传递参数
      data: teacherQuery
    })
  },
  // 2.0 根据ID删除
  deleteTeacherById(id) {
    return request({
      url: `/eduServer/teacher/${id}`,
      method: 'delete',
    })
  },
  // 添加教师
  addTeacher(teacher) {
    return request({
      url: `/eduServer/teacher/addTeacher`,
      method: 'post',
      data: teacher
    })
  },
  // 根据id查询教师信息
  getTeacherById(id) {
    return request({
      url: `/eduServer/teacher/getTeacher/${id}`,
      method: 'get',
    })
  },
  // 更新教师信息
  updateTeacher(teacher) {
    return request({
      url: `/eduServer/teacher/updateTeacher/`,
      method: 'post',
      data: teacher
    })
  }
}