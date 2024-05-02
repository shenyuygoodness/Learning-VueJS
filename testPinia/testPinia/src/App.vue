<script setup>
import HelloWorld from './views/HomeView.vue'
import TheWelcome from './views/AboutView.vue'
import {RouterView, RouterLink} from 'vue-router'

import { useAuthStore } from './stores/auth';
const authStore = useAuthStore(); 

function logout(){
  authStore.$patch((state) => {
    (state.isAuthenticated = false), (state.user = {})
  });
}
function login(){
  authStore.$reset()
  // patch((state) => {
  //   (state.isAuthenticated = true), (state.user = {user: {
  //           name: "Sarthak",
  //           email: "sarthak@bitfumes.com",
  //       },})
  // });
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <button @click="logout" v-if="authStore.isAuthenticated">Logout</button>
        <button @click="login" v-else>Login</button>

      </nav>
    </div>
  </header>
  <RouterView />
  
</template>

