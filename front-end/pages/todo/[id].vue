<template>
  <Header />
  <div v-if="!pending">
    <Todo :todo="todo"/>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: todo, pending } = await useLazyFetch(`http://localhost:3333/todo/${route.params.id}`)
</script>