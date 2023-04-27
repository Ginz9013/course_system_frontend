<script>
export default {
    data() {
        return {
            courseID: "",
            courseName: "",
            day: 0,
            startTime: 0,
            endTime: 0,
            credit: 0
        }
    },
    methods: {
        // コースを追加
        addCourse() {
            if(this.courseID === "") {
                alert("コースIDを入力してください")
                return;
            }
            if(this.courseName === "") {
                alert("コースタイトルを入力してください")
                return;
            }
            if(this.day === 0) {
                alert("授業時間を入力してください")
                return;
            }
            if(this.startTime === 0) {
                alert("授業開始時間を入力してください")
                return;
            }
            if(this.endTime === 0) {
                alert("授業終了時間を入力してください")
                return;
            }
            if(this.credit === 0) {
                alert("単位を入力してください")
                return;
            }

            const course = {
                course_id: this.courseID,
                course_name: this.courseName,
                day: this.day,
                start_time: this.startTime,
                end_time: this.endTime,
                credit: this.credit
            }

            fetch("http://localhost:8080/add_course", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(course)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))

            // リセット
            this.courseID = "",
            this.courseName = "",
            this.day = null,
            this.startTime = null,
            this.endTime = null,
            this.credit = null
        },
        // コースを更新
        setCourse() {
            if(this.courseID === "") {
                alert("コースIDを入力してください")
                return;
            }
            const course = {
                course_id: this.courseID,
                // course_name: this.courseName,
                // day: this.day,
                // start_time: this.startTime,
                // end_time: this.endTime,
                // credit: this.credit
            }

            if(this.courseName !== "") {
                course.course_name = this.courseName;
            }
            if(this.day !== 0) {
                course.day = this.day;
            }
            if(this.startTime !== 0) {
                course["start_time"] = this.startTime;
            }
            if(this.endTime !== 0) {
                course["end_time"] = this.endTime;
            }
            if(this.credit !== 0) {
                course.credit = this.credit;
            }


            fetch("http://localhost:8080/set_course", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(course)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                
                if(data.message === "課程資訊錯誤") {
                    alert(data.message);
                    return;
                }
            })
            .catch((err) => console.log(err));

            // リセット
            this.courseID = "",
            this.courseName = "",
            this.day = null,
            this.startTime = null,
            this.endTime = null,
            this.credit = null
        },
        // コースを取り消し
        deleteCourse() {
            if(this.courseID === "") {
                alert("コースIDを入力してください")
                return;
            }

            const course = {
                course_id: this.courseID
            }

            fetch("http://localhost:8080/delete_course", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(course)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch((err) => console.log(err));

            // リセット
            this.courseID = "",
            this.courseName = "",
            this.day = null,
            this.startTime = null,
            this.endTime = null,
            this.credit = null
        }
    }
}
</script>

<template>
        <h1 class="text-4xl font-bold text-darker tracking-wider mb-6">コース資料管理</h1>
        <form action="#" class="w-96 flex flex-col  items-center">
            <!-- コースID -->
            <div class="course-id mb-6 w-full">
                <label for="courseID" class="text-darker font-bold text-lg tracking-wider">コースID</label>
                <input
                    id="courseID"
                    type="text"
                    placeholder="C001"
                    class="
                    block w-full py-2 rounded mt-1 outline-0 text-center
                    duration-200
                    hover:scale-105
                    focus:bg-primary
                    focus:text-white"
                    v-model="courseID"
                >
            </div>

            <!-- コースタイトル -->
            <div class="course-name mb-6 w-full">
                <label for="courseName" class="text-darker font-bold text-lg tracking-wider">コースタイトル</label>
                <input
                    id="courseName"
                    type="text"
                    placeholder="グラフィックデザイン"
                    class="
                    block w-full py-2 rounded mt-1 outline-0 text-center
                    duration-200
                    hover:scale-105
                    focus:bg-primary
                    focus:text-white"
                    v-model="courseName"
                >
            </div>

            <!-- 授業時間（曜日） -->
            <div class="course-day mb-6 w-full">
                <label for="courseDay" class="text-darker font-bold text-lg tracking-wider">授業時間（曜日）</label>
                <select
                    name="day"
                    id="courseDay"
                    class="block w-full py-2 rounded mt-1 outline-0 text-center
                    duration-200
                    hover:scale-105
                    focus:bg-primary
                    focus:text-white"
                    v-model="day"
                >
                    <option value="1">月曜日</option>
                    <option value="2">火曜日</option>
                    <option value="3">水曜日</option>
                    <option value="4">木曜日</option>
                    <option value="5">金曜日</option>
                    <option value="6">土曜日</option>
                    <option value="7">日曜日</option>
                </select>
            </div>

            <!-- 授業開始時間（9時間30分） -->
            <div class="course-id mb-6 w-full">
                <label for="courseID" class="text-darker font-bold text-lg tracking-wider">授業開始時間（9時間30分）</label>
                <input
                    id="courseID"
                    type="number"
                    placeholder="0930"
                    class="
                    block w-full py-2 rounded mt-1 outline-0 text-center
                    duration-200
                    hover:scale-105
                    focus:bg-primary
                    focus:text-white"
                    v-model="startTime"
                >
            </div>

            <!-- 授業終了時間（17時間30分） -->
            <div class="course-id mb-6 w-full">
                <label for="courseID" class="text-darker font-bold text-lg tracking-wider">授業終了時間（17時間30分）</label>
                <input
                    id="courseID"
                    type="number"
                    placeholder="1730"
                    class="
                    block w-full py-2 rounded mt-1 outline-0 text-center
                    duration-200
                    hover:scale-105
                    focus:bg-primary
                    focus:text-white"
                    v-model="endTime"
                >
            </div>

            <!-- 単位（1～3ポイント） -->
            <div class="course-id mb-6 w-full">
                <label for="courseID" class="text-darker font-bold text-lg tracking-wider">単位（1～3ポイント）</label>
                <input
                    id="courseID"
                    type="number"
                    placeholder="2"
                    class="
                    block w-full py-2 rounded mt-1 outline-0 text-center
                    duration-200
                    hover:scale-105
                    focus:bg-primary
                    focus:text-white"
                    v-model="credit"
                >
            </div>

            <!-- 機能バタン -->
            <div class="flex justify-between w-full mb-4">
                <button
                    type="button"
                    class="bg-primary py-2 px-8 rounded-md text-white w-1/2 tracking-widest
                    duration-100
                    hover:scale-105 hover:bg-darker
                    active:scale-95"
                    @click="addCourse"
                >
                    追加
                </button>
                <button
                    type="button"
                    class="bg-primary py-2 px-8 rounded-md text-white w-1/2 tracking-widest mx-4
                    duration-100
                    hover:scale-105 hover:bg-darker
                    active:scale-95"
                    @click="setCourse"
                >
                    更新
                </button>
                <button
                    type="button"
                    class="bg-primary py-2 px-4 rounded-md text-white w-1/2 tracking-widest
                    duration-100
                    hover:scale-105 hover:bg-darker
                    active:scale-95"
                    @click="deleteCourse"
                >
                    取り消し
                </button>
            </div>


            <router-link
                to="/teacher/course/list"
                class="bg-primary py-2 rounded-md font-bold text-white text-center w-full tracking-widest
                duration-100
                hover:scale-105 hover:bg-darker
                active:scale-95"
            >
                コースリスト
            </router-link>
        </form>
</template>