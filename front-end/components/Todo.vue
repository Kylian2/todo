<template>
    <div class="flex justify-between align-middle w-[600px] border-2 border-lime-400 border-solid mx-2 rounded-md p-2">
        <div class="flex gap-2">
            <NuxtLink :to="`/todo/${todo.id}`">
                <p>{{ date }}</p>
                <p> {{ todo.name }}</p>
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