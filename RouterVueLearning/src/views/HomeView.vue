<script setup>
import { RouterLink } from "vue-router";
import cars from "../data/cars.json"

</script>

<template>
    <div>
      <h1>Home view</h1>
      <div class="cars">
        <RouterLink :to="`/cars/${car.id}`"  v-for="car in cars" :key="cars.id" href="">{{car.name}}
      </RouterLink>
      <button><RouterLink to="/donations"> Donate to someone</RouterLink></button>
      </div>
    </div>
  </template>

<style scoped>
  .cars{
    display: flex;
  
  }

.cars a{
  text-decoration: none;
  color: rgb(2, 2, 2);
  width: 100%;
  background-color: white;
  box-shadow: 1px 1px 10px rgba(5, 111, 47, 0.588);
  margin: 10px;
}

</style>
