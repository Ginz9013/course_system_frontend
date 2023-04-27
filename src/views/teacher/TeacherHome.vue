<script>
export default {
    
}
</script>
<template>
        <h1 class="text-5xl font-bold text-darker mb-12">教師システム</h1>
        <div class="flex">
            <router-link
                to="/teacher/student_info"
                class="flex flex-col justify-center items-center bg-primary text-center text-white text-2xl font-bold p-20 mr-12 rounded-lg hover:scale-110 hover:bg-darker duration-200"
            >
                <p>学生資料</p>
                <p>管理</p>
            </router-link>

            <router-link
                to="/teacher/course"
                class="flex flex-col justify-center items-center bg-primary text-center text-white text-2xl font-bold p-20 mr-12 rounded-lg hover:scale-110 hover:bg-darker duration-200"
            >
                <p>コース資料</p>
                <p>管理</p>
            </router-link>

            <router-link
                to="/teacher/selection"
                class="flex flex-col justify-center items-center bg-primary text-center text-white text-2xl font-bold p-20 mr-12 rounded-lg hover:scale-110 hover:bg-darker duration-200"
            >
                <p>履修登録</p>
                <p>管理</p>
            </router-link>
        </div>
</template>

