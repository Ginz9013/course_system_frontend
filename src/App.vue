<script setup>
import HomePage from "./views/HomePage.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

// 学生
import StudentLogin from "./views/student/StudentLogin.vue";
import StudentHome from "./views/student/StudentHome.vue";
import StudentInfo from "./views/student/StudentInfo.vue";
import StudentInfoUpdated from "./views/student/StudentInfoUpdated.vue";
import StudentSelection from "./views/student/StudentSelection.vue";
import StudentSelectionUpdated from "./views/student/StudentSelectionUpdated.vue";
import StudentSelectionDeleted from "./views/student/StudentSelectionDeleted.vue";

// 教師
import TeacherHome from "./views/teacher/TeacherHome.vue";
import TeacherSelection from "./views/teacher/TeacherSelection.vue";
</script>

<template>
  <div class="h-screen w-screen flex flex-col justify-between">
    <NavBar />
    <!-- <HomePage /> -->

    <!-- 学生 -->
    <!-- <StudentLogin /> -->
    <!-- <StudentHome /> -->
    <!-- <StudentInfo /> -->
    <!-- <StudentInfoUpdated /> -->
    <!-- <StudentSelection /> -->
    <!-- <StudentSelectionUpdated /> -->
    <!-- <StudentSelectionDeleted /> -->


    <!-- 教師 -->
    <!-- <TeacherHome /> -->
    <TeacherSelection />


    <Footer />
  </div>
</template>
