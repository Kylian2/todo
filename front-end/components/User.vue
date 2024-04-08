<template>
    <div class="bg-blue-400 border-red-700">
        <h1>{{ info.id }}- {{ info.username }}</h1>
    </div>
</template>
<script>
    export default{
        props:{ //on recupere les props
            info: Object,
        },
    }
</script>
<style>
</style>