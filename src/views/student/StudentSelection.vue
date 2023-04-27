<script>
import router from '../../router';

export default {
    data() {
        return {
            selectedList: [],
            courseID: "",
        }
    },
    methods: {
        // 履修登録を追加と取り消す
        async addAndDeleteSelection(act) {
            if(this.courseID === "") {
                alert("コースIDを入力してください")
                return;
            }

            const selection = {
                student_id: sessionStorage.getItem("studentID"),
                course_id: this.courseID
            }

            const res = await fetch(`http://localhost:8080/${act}_selection`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(selection)
            })

            const data = await res.json();

            console.log(data)
            sessionStorage.setItem("courseID", this.courseID)

            console.log(act)
            if(act === "add") {
                router.push("/student/selection/updated");
            } else if(act === "delete") {
                router.push("/student/selection/deleted");
            }
        }
    },
    mounted() {
        // 個人的な履修登録を取り出す
        fetch("http://localhost:8080/get_selection_by_student", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sessionStorage.getItem("studentID"))
        })
        .then(res => res.json())
        .then(data => {
            this.selectedList = [...data.selectionList];
        });
    },
}
</script>

<template>
        <h1 class="text-4xl tracking-wider mb-12 text-darker font-bold">履修登録</h1>
        <form action="#" class="w-96 flex flex-col text-darker font-bold items-center mb-16">
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

        <h2 class="text-3xl font-bold">登録コース</h2>
        <div class="flex border-b-2 border-darker px-16 py-2 mb-2">
            <h4 class="text-xl mr-8">コースID</h4>
            <h4 class="text-xl">コースタイトル</h4>
        </div>
        <ul class="text-xl font-bold">
            <li v-for="course in selectedList" class="mb-2">
                <span class="mr-8 ml-8">{{ course.courseID }}</span>
                <span>{{ course.studentID }}</span>
            </li>
        </ul>
</template>