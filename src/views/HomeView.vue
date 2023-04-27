<script>
export default {
    
}
</script>
<template>
    <div class="bg-secondary grow flex flex-col justify-center items-center">
        <h1 class="text-5xl font-bold text-darker mb-12">コースシステム</h1>
        <div class="flex">
            <RouterLink
                to="/student_login"
                class="block bg-primary text-white text-2xl font-bold text-center p-20 mr-12 rounded-lg hover:scale-110 hover:bg-darker duration-200">
                学生
                <br>
                システム
            </RouterLink>
            
            <RouterLink
                to="/teacher"
                class="block bg-primary text-white text-2xl font-bold text-center p-20 rounded-lg hover:scale-110 hover:bg-darker duration-200">
                教師
                <br>
                システム
            </RouterLink>
        </div>
    </div>
</template>

