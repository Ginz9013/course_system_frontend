<script>
export default {
    data() {
        return {
            courseID: "",
            courseName: "",
            day: "",
            startTime: 0,
            endTime: 0,
            credit: 0,
        }
    },
    mounted() {
        fetch("http://localhost:8080/get_all_course")
        .then(res => res.json())
        .then(data => {
            data.forEach(course => {
                if(course.courseID === sessionStorage.getItem("courseID")) {
                    this.courseID = course.courseID;
                    this.courseName = course.courseName;

                    switch(course.day) {
                        case 1:
                        this.day = "月曜日"
                        break;
                        case 2:
                        this.day = "火曜日"
                        break;
                        case 3:
                        this.day = "水曜日"
                        break;
                        case 4:
                        this.day = "木曜日"
                        break;
                        case 5:
                        this.day = "金曜日"
                        break;
                        case 6:
                        this.day = "土曜日"
                        break;
                        case 7:
                        this.day = "日曜日"
                        break;
                    }

                    this.startTime = course.startTime;
                    this.endTime = course.endTime;
                    this.credit = course.credit;
                }
            });
            console.log(this.selectedList)
        })
    }
}
</script>

<template>
        <h1 class="text-4xl text-darker tracking-wider mb-12">履修登録完成</h1>
        <ul class="text-xl font-bold mb-16">
            <li class="mb-2">
                <p>
                    コースID:
                    <span class="text-3xl ml-20">{{ courseID }}</span>
                </p>
            </li>
            <li>
                <p>
                    コースタイトル:
                    <span class="text-3xl ml-4">{{ courseName }}</span>
                </p>
            </li>
            <li>
                <p>
                    授業時間:
                    <span class="text-3xl ml-20">{{ day }}</span>
                </p>
            </li>
            <li>
                <p>
                    授業開始時間:
                    <span class="text-3xl ml-10">{{ Math.floor(startTime/100) }} 時 {{ Math.floor(startTime%100) }} 分</span>
                </p>
            </li>
            <li>
                <p>
                    授業終了時間:
                    <span class="text-3xl ml-10">{{ Math.floor(endTime/100) }} 時 {{ Math.floor(endTime%100) }} 分</span>
                </p>
            </li>
            <li>
                <p>
                    単位:
                    <span class="text-3xl ml-32">{{ credit }} ポイント</span>
                </p>
            </li>
        </ul>
        <router-link
            to="/student"
            class="bg-primary py-2 px-8 rounded-md text-xl font-bold text-white text-center w-48
            duration-100
            hover:scale-105 hover:bg-darker
            active:scale-95"
        >
            戻る
        </router-link>
</template>