<template>
    <div class="flex justify-between items-center w-[700px] border-2 border-lime-400 border-solid mx-2 rounded-md p-2">
        <div class="flex gap-2 w-full">
            <NuxtLink :to="`/todo/${todo.id}`" class="flex justify-between items-center w-full">
                <p> {{ todo.name }}</p>
                <p>{{ date }}</p>
            </NuxtLink>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            todo : Object,
        },
        setup(props){
            let date = props.todo.createdAt.slice(0, 10);
            console.log(date);
            return{
                date,
            }
        }
    }
</script>