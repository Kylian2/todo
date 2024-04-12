<template>
    <div v-if="!checked" class="flex justify-between items-center w-[700px] border-2 border-lime-400 border-solid mx-2 rounded-md p-2">
        <div class="flex gap-2 w-full items-center">
            <NuxtLink :to="`/todo/${todo.id}`" class="flex justify-between items-center w-full">
                <p> {{ todo.name }}</p>
                <p>{{ date }}</p>
            </NuxtLink>
            <input type="checkbox" id="checkbox" v-model="checked" @change="dbdelete"/>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                checked: false
            };
        },
        props:{
            todo : Object,
        },
        methods:{
            async dbdelete (){
                if(this.checked){
                    await $fetch(`http://localhost:3333/todo/delete/${this.todo.id}`, {
                        method: 'POST',
                    })
                }
            }
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