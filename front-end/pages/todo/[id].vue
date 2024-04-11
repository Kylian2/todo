<template>
  <Header />
  <div v-if="!pending" class="flex items-center justify-center">
    <div class="flex justify-between items-center w-[600px] border-2 border-lime-400 border-solid mx-2 rounded-md p-2">
        <div class="flex gap-2 w-full justify-between items-center">
                <form :action="`http://localhost:3333/todo/edit/${todo.id}`" method="post" class="flex items-center">
                  <input class="mx-2" type="text" id="name" name="name" :value="todo.name"><br><br>
                  <input class="bg-lime-400 rounded-md px-2 py-1" type="submit" value="Modifier">
                </form>
              <p v-if="!pending">{{ todo.createdAt.slice(0, 10) }}</p>
        </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: todo, pending } = await useLazyFetch(`http://localhost:3333/todo/${route.params.id}`)

</script>