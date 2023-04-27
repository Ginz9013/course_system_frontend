<script>
    export default {
        name: "TeacherCourseList",
        data() {
            return {
                courseList: [],      
            }
        },
        methods: {
            

        },
        mounted() {
            // 取得課程清單
            fetch("http://localhost:8080/get_all_course")
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.courseList = data;
                    console.log(this.courseList);
                });

            
        },
    }
</script>

<template>
        <h1 class="text-4xl tracking-wider mb-12 text-darker font-bold">コースリスト</h1>
        <div class="flex border-b-2 border-darker px-16 py-2 mb-2">
            <h4 class="text-xl mr-8">コースID</h4>
            <h4 class="text-xl">コースタイトル</h4>
        </div>
        <ul class="text-xl font-bold">
            <li v-for="course in courseList" class="mb-2">
                <span class="mr-8 ml-8">{{ course.courseID }}</span>
                <span>{{ course.courseName }}</span>
            </li>
        </ul>
</template>