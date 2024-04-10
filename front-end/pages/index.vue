<template>
    <Header/>
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