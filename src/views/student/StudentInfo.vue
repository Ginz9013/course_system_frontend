<script>
export default {
    
}
</script>

<template>
    <div class="bg-secondary grow flex flex-col justify-center items-center">
        <h1 class="text-4xl font-bold text-darker tracking-wider mb-12">学生資料更新</h1>
        <form action="#" class="w-96 flex flex-col  items-center">
            <div class="student-id mb-6 w-full">
                <label for="studentID" class="text-darker font-bold text-lg tracking-wider">学生ID</label>
                <input
                    id="studentID"
                    type="text"
                    placeholder="S001"
                    class="
                    block w-full py-2 pl-16 rounded mt-1 outline-0
                    duration-200
                    hover:scale-105
                    focus:bg-primary
                    focus:text-white"
                >
            </div>
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
                >
            </div>
            <button
                type="button"
                class="bg-primary py-2 px-8 rounded-md font-bold text-white w-1/2 tracking-widest
                duration-100
                hover:scale-105 hover:bg-darker
                active:scale-95"
            >
                更新
            </button>
        </form>
        
    </div>
</template>