<template>
    <p class="bg-blue-400 font-extrabold">Hello world</p>
    <User v-for="user in users" :info="user"/>
</template>
<script>
export default {
  data () {
    return {
      users: []
    }
  },
  mounted () {
    fetch('http://localhost:3333/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.users = data;
        console.log(data)
      })
      .catch((error) => {
        console.log("Il y a une erreur")
        console.log(error);
      });
  }
};
</script>