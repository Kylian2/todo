<template>
    <Header/>
    <div class="flex flex-col items-center w-full gap-2">
        <Todo v-for="todo in todos" :todo="todo"/>
    </div>
</template>
<script>
export default {
  data () {
    return {
      todos: []
    }
  },
  mounted () {
    fetch('http://localhost:3333/todo')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.todos = data;
        console.log(data)
      })
      .catch((error) => {
        console.log("Il y a une erreur")
        console.log(error);
      });
  }
};
</script>
<style>

</style>