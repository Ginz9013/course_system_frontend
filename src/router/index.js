import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    // 学生サイト
    {
      path: '/student_login',
      name: 'studentLogin',
      component: () => import('../views/student/StudentLogin.vue')
    },
    {
      path: '/student',
      name: 'studentInfo',
      component: () => import('../views/student/StudentHome.vue')
    },
    {
      path: '/student/selection',
      name: 'studentSelection',
      component: () => import('../views/student/StudentSelection.vue')
    },
    {
      path: '/student/selection/updated',
      name: 'StudentSelectionUpdated',
      component: () => import('../views/student/StudentSelectionUpdated.vue')
    },
    {
      path: '/student/selection/deleted',
      name: 'StudentSelectionDeleted',
      component: () => import('../views/student/StudentSelectionDeleted.vue')
    },
    {
      path: '/student/info',
      name: 'studentHome',
      component: () => import('../views/student/StudentInfo.vue')
    },
    {
      path: '/student/info/updated',
      name: 'studentInfoUpdated',
      component: () => import('../views/student/StudentInfoUpdated.vue')
    },

    // 教師サイト
    {
      path: '/teacher',
      name: 'teacherHome',
      component: () => import('../views/teacher/TeacherHome.vue')
    },
    {
      path: '/teacher/student_info',
      name: 'teacherSetStudentInfo',
      component: () => import('../views/teacher/TeacherSetStudentInfo.vue')
    },
    {
      path: '/teacher/course',
      name: 'teacherCourseManage',
      component: () => import('../views/teacher/TeacherCourseManage.vue')
    },
    {
      path: '/teacher/course/list',
      name: 'teacherCourseList',
      component: () => import('../views/teacher/TeacherCourseList.vue')
    },
    {
      path: '/teacher/selection',
      name: 'teacherSelection',
      component: () => import('../views/teacher/TeacherSelection.vue')
    }
  ]
})

export default router
