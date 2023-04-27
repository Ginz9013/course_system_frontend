<script>
export default {
    data() {
        return {
            studentID: "",
            studentName: ""
        }
    },
    methods: {
        // 学生を更新と追加する
        async addAndSetStudent(act) {
            if(this.studentID === "") {
                alert("学生IDを入力してください")
                return;
            }
            if(this.studentName === "") {
                alert("学生名前を入力してください")
                return;
            }
            
            const student = {
                student_id: this.studentID,
                student_name: this.studentName
            }

            const res = await fetch(`http://localhost:8080/${act}_student`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            });
            const data = await res.json();

            console.log(data)


            // リセット
            this.studentID = "";
            this.studentName = "";
        },
        // 学生を取り消し
        async deleteStudent() {
            if(this.studentID === "") {
                alert("学生IDを入力してください")
                return;
            }

            const student = {
                student_id: this.studentID
            }

            const res = await fetch(`http://localhost:8080/delete_student`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            });
            const data = await res.json();

            console.log(data)


            // リセット
            this.studentID = "";
            this.studentName = "";
        }
    }
}
</script>

<template>
        <h1 class="text-5xl font-bold text-darker mb-12">学生資料管理</h1>
        <form action="#" class="w-96 flex flex-col  items-center">
            <!-- 学生ID -->
            <div class="student-id mb-6 w-full relative">
                <label for="studentID" class="text-darker font-bold text-lg tracking-wider">学生ID</label>
                <input
                    id="studentID"
                    type="text"
                    placeholder="S001"
                    class="
                    block w-full py-2 pl-12 rounded mt-1 outline-0
                    duration-200
                    hover:scale-105
                    focus:bg-primary
                    focus:text-white"
                    v-model="studentID"
                >
                <img
                    src="/user-solid.svg" 
                    alt="Student"
                    class="w-4 absolute top-11 left-4"
                >
            </div>

            <!-- 学生名前 -->
            <div class="studentname mb-12 w-full relative">
                <label for="studentName" class="text-darker font-bold text-lg tracking-wider">学生名前</label>
                <input
                    id="studentName"
                    type="text"
                    placeholder="Kouhei"
                    class="
                    block w-full py-2 pl-12 rounded mt-1 outline-0
                    duration-200
                    hover:scale-105
                    focus:bg-primary
                    focus:text-white"
                    v-model="studentName"
                >
                <img
                    src="/user-solid.svg" 
                    alt="Student"
                    class="w-4 absolute top-11 left-4"
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
                    @click="addAndSetStudent('add')"
                >
                    追加
                </button>
                <button
                    type="button"
                    class="bg-primary py-2 px-8 rounded-md text-white w-1/2 tracking-widest mx-4
                    duration-100
                    hover:scale-105 hover:bg-darker
                    active:scale-95"
                    @click="addAndSetStudent('set')"
                >
                    更新
                </button>
                <button
                    type="button"
                    class="bg-primary py-2 px-4 rounded-md text-white w-1/2 tracking-widest
                    duration-100
                    hover:scale-105 hover:bg-darker
                    active:scale-95"
                    @click="deleteStudent"
                >
                    取り消し
                </button>
            </div>
        </form>
</template>