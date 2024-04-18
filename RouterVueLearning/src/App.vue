<script setup>
import {ref} from "vue";
import{RouterView} from "vue-router"
import Nav from "./components/Nav.vue"

const randomState = ref("")
</script>
name: "home",
            component: HomeView
<template>
  <div>
    {{randomState}}
    <button @click="randomState = 'hello there'">Click me</button>
    <Nav />
    <RouterView />
  </div>
</template>

