<template>
    <div class="flex items-center justify-between mx-20 my-7 text-lg font-semi-bold">
        <div><NuxtLink to="/"><h1 class="bg-lime-400 px-6 py-2 rounded-md">Todo Adonis</h1></NuxtLink></div>
        <div>
            <ul class="flex justify-between gap-10">
                <li>Nous somme le <span class="inline-block border-b-2 border-lime-400 border-solid mx-2">Vendredi 23 Avril</span></li>
                <li class="hover:text-lime-400 transition duration-750 "><NuxtLink to="/">À propos</NuxtLink></li>
            </ul>
        </div>
    </div>
</template>