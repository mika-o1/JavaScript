<template>
  <div class="navbar bg-headbg">
    <div class="container mx-auto">
      <div class="hidden sm:flex justify-between py-3 items-center">
        <router-link class="text-headlinks opacity-80 hover:opacity-100 text-xl hover:text-white transition-all" to="/"><i class="fab fa-apple"></i></router-link>
        <router-link class="text-headlinks opacity-80 hover:opacity-100 text-sm hover:text-white transition-all" to="/">Mac</router-link>
        <router-link class="text-headlinks opacity-80 hover:opacity-100 text-sm hover:text-white transition-all" to="/">iPad</router-link>
        <router-link class="text-headlinks opacity-80 hover:opacity-100 text-sm hover:text-white transition-all" to="/iphone">iPhone</router-link>
        <router-link class="text-headlinks opacity-80 hover:opacity-100 text-sm hover:text-white transition-all" to="/">Watch</router-link>
        <router-link class="text-headlinks opacity-80 hover:opacity-100 text-sm hover:text-white transition-all" to="/">AirPods</router-link>
        <router-link class="text-headlinks opacity-80 hover:opacity-100 text-sm hover:text-white transition-all" to="/">TV & Home</router-link>
        <router-link class="text-headlinks opacity-80 hover:opacity-100 text-sm hover:text-white transition-all" to="/">Only on Apple</router-link>
        <router-link class="text-headlinks opacity-80 hover:opacity-100 text-sm hover:text-white transition-all" to="/">Support</router-link>
        <router-link class="text-headlinks opacity-80 hover:opacity-100 text-sm hover:text-white transition-all" to="/">Where to buy</router-link>
      </div>
      <div class="flex sm:hidden justify-center py-3 items-center relative">
        <i class="burger fas fa-bars text-headlinks opacity-80 hover:opacity-100 text-xl hover:text-white transition-all"></i>
        <router-link class="text-headlinks opacity-80 hover:opacity-100 text-xl hover:text-white transition-all" to="/"><i class="fab fa-apple"></i></router-link>
      </div>
    </div>
  </div>
</template>