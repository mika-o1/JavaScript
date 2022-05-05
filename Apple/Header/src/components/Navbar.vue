<template>
    <div class="navbar bg-headbg">
        <div class="container mx-auto">
            <div class="hidden sm:flex justify-between py-4 items-center">
                <router-link class="text-headlinks opacity-80 hover:opacity-100 text-xl hover:text-white transition-all" to="/about"><i class="fa-brands fa-apple"></i></router-link>
                <router-link class="text-headlinks opacity-80 hover:opacity-100 text-sm hover:text-white transition-all" to="/about">Mac</router-link>
                <router-link class="text-headlinks opacity-80 hover:opacity-100 text-sm hover:text-white transition-all" to="/about">iPad</router-link>
                <router-link class="text-headlinks opacity-80 hover:opacity-100 text-sm hover:text-white transition-all" to="/about">iPhone</router-link>
                <router-link class="text-headlinks opacity-80 hover:opacity-100 text-sm hover:text-white transition-all" to="/about">Watch</router-link>
                <router-link class="text-headlinks opacity-80 hover:opacity-100 text-sm hover:text-white transition-all" to="/about">AirPods</router-link>
                <router-link class="text-headlinks opacity-80 hover:opacity-100 text-sm hover:text-white transition-all" to="/about">TV & Home</router-link>
                <router-link class="text-headlinks opacity-80 hover:opacity-100 text-sm hover:text-white transition-all" to="/about">Only on Apple</router-link>
                <router-link class="text-headlinks opacity-80 hover:opacity-100 text-sm hover:text-white transition-all" to="/about">Support</router-link>
                <router-link class="text-headlinks opacity-80 hover:opacity-100 text-sm hover:text-white transition-all" to="/about">Where to buy</router-link>
            </div>
            <div class="flex sm:hidden justify-center py-4 items-center relative">
                <i class="burger fa-solid fa-bars text-headlinks opacity-80 hover:opacity-100 text-xl hover:text-white transition-all"></i>
                <router-link class="text-headlinks opacity-80 hover:opacity-100 text-xl hover:text-white transition-all" to="/about"><i class="fa-brands fa-apple"></i></router-link>
            </div>
        </div>
    </div>
</template>