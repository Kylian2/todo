<template>
    <div class="card">
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
.card{
    border: 2px solid red;
    margin: 10px;
}
</style>