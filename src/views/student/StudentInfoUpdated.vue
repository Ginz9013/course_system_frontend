<script>
export default {
    data() {
        return {
            studentID: "",
            studentName: ""
        }
    },
    mounted() {
        this.studentID = sessionStorage.getItem("studentID");
        this.studentName = sessionStorage.getItem("studentName");
        console.log(this.studentID);
        console.log(this.studentName);
    }
}
</script>

<template>
        <h1 class="text-4xl text-darker tracking-wider mb-12">資料更新完成</h1>
        <ul class="text-xl font-bold mb-16">
            <li class="mb-2">
                <p>
                    学生ID:
                    <span class="text-3xl ml-6">{{ studentID }}</span>
                </p>
            </li>
            <li>
                <p>
                    学生名前:
                    <span class="text-3xl ml-2">{{ studentName }}</span>
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