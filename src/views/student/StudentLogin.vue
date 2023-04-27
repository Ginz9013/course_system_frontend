<script>
import router from '../../router';

export default {
    data() {
        return {
            studentID: "",
            studentName: ""
        }
    },
    methods: {
        login() {
            if(this.studentID === "") {
                alert("学生IDを入力してください")
                return;
            }

            if(this.studentName === "") {
                alert("学生名前を入力してください")
                return;
            }

            sessionStorage.setItem("studentID", this.studentID);
            sessionStorage.setItem("studentName", this.studentName);

            router.push("/student");
        },
    }
}
</script>

<template>
        <h1 class="text-5xl font-bold text-darker mb-12">学生システム</h1>
        <form action="#" class="w-96 flex flex-col  items-center">
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
            <button
                type="button"
                class="bg-primary py-2 px-8 rounded-md font-bold text-white w-1/2
                duration-100
                hover:scale-105 hover:bg-darker
                active:scale-95"
                @click="login"
            >
                ログイン
            </button>
        </form>
</template>