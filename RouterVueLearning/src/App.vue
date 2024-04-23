<script setup>
import {ref} from "vue";
import{RouterView} from "vue-router"
import Nav from "./components/Nav.vue"
import { RouterLink } from "vue-router";

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
    <button><RouterLink to="/donations"> Donate to someone</RouterLink></button>
  </div>
</template>

