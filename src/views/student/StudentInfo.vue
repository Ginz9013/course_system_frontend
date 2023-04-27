<script>
import router from '../../router';

export default {
    data() {
        return {
            studentName: ""
        }
    },
    methods: {
        // 学生の資料を更新する
        async updateStudentInfo() {
            if(this.studentName === "") {
                alert("学生名前を入力してください")
                return;
            }

            const student = {
                student_id: sessionStorage.getItem("studentID"),
                student_name: this.studentName
            }

            const res = await fetch("http://localhost:8080/set_student", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            })

            const data = await res.json()
            
            console.log(data)
            sessionStorage.setItem("studentName", this.studentName)
            router.push("/student/info/updated");
        }
    }
}
</script>

<template>
        <h1 class="text-4xl font-bold text-darker tracking-wider mb-12">学生資料更新</h1>
        <form action="#" class="w-96 flex flex-col  items-center">
            <div class="studentname mb-12 w-full">
                <label for="studentName" class="text-darker font-bold text-lg tracking-wider">学生名前</label>
                <input
                    id="studentName"
                    type="text"
                    placeholder="Kouhei"
                    class="
                    block w-full py-2 pl-16 rounded mt-1 outline-0
                    duration-200
                    hover:scale-105
                    focus:bg-primary
                    focus:text-white"
                    v-model="studentName"
                >
            </div>
            <button
                type="button"
                class="bg-primary py-2 px-8 rounded-md font-bold text-white w-1/2 tracking-widest
                duration-100
                hover:scale-105 hover:bg-darker
                active:scale-95"
                @click="updateStudentInfo"
            >
                更新
            </button>
        </form>
</template>