<script>
export default {
    
}
</script>

<template>
    <div class="bg-secondary grow flex flex-col justify-center items-center text-darker font-bold">
        <h1 class="text-4xl tracking-wider mb-12">履修登録</h1>
        <form action="#" class="w-96 flex flex-col  items-center mb-16">
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
                >
            </div>
            <div class="flex justify-between w-full">
                <button
                    type="button"
                    class="bg-primary py-2 px-8 rounded-md text-white w-1/2 tracking-widest mr-8
                    duration-100
                    hover:scale-105 hover:bg-darker
                    active:scale-95"
                >
                    登録
                </button>
                <button
                    type="button"
                    class="bg-primary py-2 px-8 rounded-md text-white w-1/2 tracking-widest
                    duration-100
                    hover:scale-105 hover:bg-darker
                    active:scale-95"
                >
                    取り消し
                </button>
            </div>
        </form>

        <h2 class="text-3xl font-bold">登録コース</h2>
        <div>
            
        </div>
        <ul>
            <li></li>
        </ul>
        
    </div>
</template>