<template>
    <Header/>
    <div class="flex justify-center items-center flex-col my-20">
        <h1 class="text-xl font-semibold">Nouveau Todo</h1>
        <form action="http://localhost:3333/todo/" method="post" class="flex items-center flex-col p-2">
            <label for="name">Nom :</label><br>
            <input class="border-2 border-lime-400 border-solid mx-2 rounded-md" type="text" id="name" name="name"><br><br>
            <input class="bg-lime-400 rounded-md px-6 py-2" type="submit" value="Envoyer">
        </form>
    </div>
</template>