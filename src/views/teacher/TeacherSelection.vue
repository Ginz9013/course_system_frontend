<script>
export default {
    data() {
        return {
            studentID: "",
            courseID: ""
        }
    },
    methods: {
        // 履修登録を入力すると取り消し
        async addAndDeleteSelection(act) {
            if(this.studentID === "") {
                alert("学生IDを入力してください")
                return;
            }

            if(this.courseID === "") {
                alert("コースIDを入力してください")
                return;
            }

            const selection = {
                student_id: this.studentID,
                course_id: this.courseID
            }

            const res = await fetch(`http://localhost:8080/${act}_selection`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(selection)
            });
            const data = await res.json();

            console.log(data)


            // リセット
            this.studentID = "";
            this.courseID = "";
        }
    }
}
</script>

<template>
        <h1 class="text-4xl text-darker font-bold tracking-wider mb-12">履修登録</h1>
        <form action="#" class="w-96 flex flex-col items-center text-darker font-bold mb-16">
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

            <div class="student-id mb-6 w-full">
                <label for="courseID" class=" text-lg tracking-wider">コースID</label>
                <input
                    id="courseID"
                    type="text"
                    placeholder="C001"
                    class="
                    block w-full py-2 pl-16 rounded mt-1 outline-0
                    duration-200
                    hover:scale-105
                    focus:bg-primary
                    focus:text-white"
                    v-model="courseID"
                >
            </div>
            <div class="flex justify-between w-full">
                <button
                    type="button"
                    class="bg-primary py-2 px-8 rounded-md text-white w-1/2 tracking-widest mr-8
                    duration-100
                    hover:scale-105 hover:bg-darker
                    active:scale-95"
                    @click="addAndDeleteSelection('add')"
                >
                    登録
                </button>
                <button
                    type="button"
                    class="bg-primary py-2 px-8 rounded-md text-white w-1/2 tracking-widest
                    duration-100
                    hover:scale-105 hover:bg-darker
                    active:scale-95"
                    @click="addAndDeleteSelection('delete')"
                >
                    取り消し
                </button>
            </div>
        </form>
</template>